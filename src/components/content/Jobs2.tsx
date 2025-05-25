import React, { useEffect, useState } from "react";
import Job2 from "./Job2";
import axios from "axios";

const Jobs2: React.FC = () => {
  // const jobList: {img:string, alt:string, name:string, period:string}[] = [
  //         {
  //             "img":"images/jobs/google.png",
  //             "alt":"google",
  //             "name":"Google as Junior Software Engineer",
  //             "period":"2019 Oct - Until now"
  //         },
  //         {
  //             "img":"images/jobs/samsung.png",
  //             "alt":"samsung",
  //             "name":"Samsung as Junior Software Engineer",
  //             "period":"2010 Oct - 2019 Oct"
  //         },
  //     ];

  const [jopList, setJopList] = useState([]);

  useEffect(() => {
    axios("/data/jops.json")
      .then((res) => setJopList(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <ul className="jobs">
      {jopList &&
        jopList.map((job) => (
          <li className="job">
            <Job2 job={job} />
          </li>
        ))}
    </ul>
  );
};

export default Jobs2;

import * as api from "../../requests/API";

import { useEffect, useState } from "react";
import DepartmentItem from "./DepartmentItem";

const DepartmentList = () => {
  const [info, setInfo] = useState("");

  let url = "departments";

  useEffect(() => {
    api.get(url).then((res) => setInfo(res));
  }, []);

  return (
    <div className="container">
      <h1>Departments</h1>
      <DepartmentItem departments={info} />
    </div>
  );
};

export default DepartmentList;

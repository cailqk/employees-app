import * as api from "../../requests/API";

import { useState, useEffect } from "react";
import EmployeeItem from "./EmployeeItem";

const EmployeeList = () => {
  const [info, setInfo] = useState("");

  let url = "employees";

  useEffect(() => {
    api.get(url).then((res) => setInfo(res));
  }, []);

  return (
    <div className="container">
      <h1>Employees</h1>
      <EmployeeItem employees={info} />
    </div>
  );
};

export default EmployeeList;

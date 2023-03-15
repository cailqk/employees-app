import * as api from "../../requests/API";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeItem from "./EmployeeItem";

import Button from "../UI/Button";

const EmployeeList = () => {
  const [info, setInfo] = useState("");
  const navigate = useNavigate();

  const onAddEmployee = () => {
    navigate("/employees/add");
  };

  let url = "employees";

  useEffect(() => {
    api.get(url).then((res) => setInfo(res));
  }, []);

  return (
    <div className="container">
      <h1>Employees</h1>
      <div className="text-end mb-2">
        <Button
          className="btn btn-success"
          onClick={onAddEmployee}
          name="Add Employee"
        />
      </div>
      <EmployeeItem employees={info} />
    </div>
  );
};

export default EmployeeList;

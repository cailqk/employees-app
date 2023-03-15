import * as api from "../../requests/API";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import DepartmentItem from "./DepartmentItem";
import Button from "../UI/Button";

const DepartmentList = () => {
  const [info, setInfo] = useState("");
  const navigate = useNavigate();

  const onAddDepartment = () => {
    navigate("/departments/add");
  };

  let url = "departments";

  useEffect(() => {
    api.get(url).then((res) => setInfo(res));
  }, []);

  return (
    <div className="container">
      <h1>Departments</h1>
      <div className="text-end mb-2">
        <Button
          className="btn btn-success"
          onClick={onAddDepartment}
          name="Add Department"
        />
      </div>
      <DepartmentItem departments={info} />
    </div>
  );
};

export default DepartmentList;

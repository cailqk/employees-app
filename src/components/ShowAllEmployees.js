import * as api from "../requests/API";

import { useState } from "react";
import EmployeeItem from "./EmployeeItem";

const ShowAllEmployees = () => {
  const [info, setInfo] = useState("");

  let url = "employee";

  api.get(url).then((res) => setInfo(res));

  return (
    <div className="container">
      <EmployeeItem employees={info} />
    </div>
  );
};

export default ShowAllEmployees;

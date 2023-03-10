import * as api from "../requests/API";

import { useState } from "react";
import EmployeeItem from "./Employees/EmployeeItem";

const Home = () => {
  const [info, setInfo] = useState("");

  let url = "employee";

  api.get(url).then((res) => setInfo(res));

  return (
    <div className="container">
      <h1>Employees</h1>
      <EmployeeItem employees={info} />
    </div>
  );
};

export default Home;

import { useEffect, useState } from "react";
import * as api from "../../requests/API";

import "./Home.css";

const Home = () => {
  const [result, setResult] = useState([]);
  const [deptInfo, setDeptInfo] = useState([]);

  const today = new Date();
  today.setMonth(today.getMonth() - 1);

  let taskUrl = `tasks?_expand=employee&completed_gte=${dateMakerFromTimeStamp(
    today
  )}`;

  let deptUrl = "departments?_embed=employees";

  useEffect(() => {
    api.get(deptUrl).then((res) => {
      const info = [];
      res.forEach((el) => {
        info.push(
          <table className="table table-stripped" key={"dept"}>
            <thead>
              <tr key={el.id}>
                <th scope="col" key={el.id}>
                  {el.name}
                </th>
              </tr>
            </thead>
            <tbody>
              {el.employees.length === 0 && (
                <tr>
                  <td colSpan={5}>No employees in this department yet!</td>
                </tr>
              )}
              {el.employees.map((el) => {
                return (
                  <tr key={el.id}>
                    <td key={el.id}>{el.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        );
      });

      setDeptInfo(info);
    });
  }, []);

  useEffect(() => {
    api.get(taskUrl).then((res) => {
      const data = [];
      res.forEach((el) => {
        let found = data.find((x) => x.employeeId === el.employeeId);
        if (!found) {
          data.push({
            employeeId: el.employeeId,
            name: el.employee.name,
            tasks: 1,
          });
        } else {
          found.tasks++;
        }
      });
      setResult(data);
    });
  }, []);

  function dateMakerFromTimeStamp(d) {
    let date = new Date(d);

    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, "0");
    let day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  result.sort((a, b) => b.tasks - a.tasks).slice(0, 5);

  return (
    <div className="container">
      <div className="row">
        <div className="column">
          <h2>Top Performers (past month)</h2>
          {result.length === 0 && (
            <table>
              <tbody>
                <tr>
                  <td>No data available</td>
                </tr>
              </tbody>
            </table>
          )}
          {result.map((el) => (
            <table className="table table-stripped" key={"emp"}>
              <tbody>
                <tr key={el.id}>
                  <th scope="col" key={el.id}>
                    {el.name} - {el.tasks} task(s)
                  </th>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
        <div className="column">
          <h2>Departments</h2>
          {deptInfo.length === 0 && (
            <table>
              <tbody>
                <tr>
                  <td>No data available</td>
                </tr>
              </tbody>
            </table>
          )}
          {deptInfo}
        </div>
      </div>
    </div>
  );
};

export default Home;

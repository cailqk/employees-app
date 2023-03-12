import { useEffect, useState } from "react";
import * as api from "../requests/API";

const Home = () => {
  const [result, setResult] = useState([]);

  const today = new Date();
  today.setMonth(today.getMonth() - 1);

  let url = `tasks?_expand=employee&completed_gte=${dateMakerFromTimeStamp(
    today
  )}`;

  useEffect(() => {
    api.get(url).then((res) => {
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
    <div>
      <h1>Top Performers (past month)</h1>
      {result.map((el) => (
        <p key={el.employeeId}>
          {el.name} - {el.tasks}
        </p>
      ))}
    </div>
  );
};

export default Home;

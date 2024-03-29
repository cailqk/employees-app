import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import "./EmployeeItem.css";

const EmployeeItem = (props) => {
  const navigate = useNavigate();

  return (
    <table className="table table-striped">
      <thead className="table-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Birthday</th>
          <th scope="col">Salary</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.employees.length === 0 && (
          <tr className="no-data">
            <td colSpan={6}>No data available</td>
          </tr>
        )}
        {props.employees.length > 0 &&
          props.employees.map((el) => {
            const birtday = new Date(el.birthday);
            return (
              <tr key={el.id}>
                <td>{el.name}</td>
                <td>{el.email}</td>
                <td>{el.phone}</td>
                <td>{birtday.toDateString()}</td>
                <td>${el.salary}</td>
                <td>
                  <Button
                    className="btn btn-success btn-sm"
                    onClick={() => navigate(`/employees/${el.id}`)}
                    name="View"
                  />
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default EmployeeItem;

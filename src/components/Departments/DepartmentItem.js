import { useNavigate } from "react-router";
import Button from "../UI/Button";

const DepartmentItem = (props) => {
  const navigate = useNavigate();

  return (
    <table className="table table-striped table-hover">
      <thead className="table-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Information</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.departments.length === 0 && (
          <tr className="no-data">
            <td colSpan={6}>No data available</td>
          </tr>
        )}
        {props.departments.length > 0 &&
          props.departments.map((el) => {
            return (
              <tr key={el.id}>
                <td>{el.name}</td>
                <td>{el.description}</td>
                <td>
                  <Button
                    className="btn btn-success btn-sm"
                    onClick={() => navigate(`/departments/${el.id}`)}
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

export default DepartmentItem;

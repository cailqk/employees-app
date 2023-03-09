import { useNavigate } from "react-router-dom";

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
        {props.employees.length > 0 &&
          props.employees.map((el) => {
            return (
              <tr key={el.id}>
                <td>{el.name}</td>
                <td>{el.email}</td>
                <td>{el.phone}</td>
                <td>{el.date}</td>
                <td>{el.salary}</td>
                <td>
                    <button onClick={() => navigate(`/employee/${el.id}`)}>View</button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default EmployeeItem;

import { useNavigate } from "react-router";

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
                  <button onClick={() => navigate(`/departments/${el.id}`)}>
                    View
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default DepartmentItem;

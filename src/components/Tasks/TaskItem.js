import { useNavigate } from "react-router";

const TaskItem = (props) => {
  const navigate = useNavigate();

  return (
    <table className="table table-striped">
      <thead className="table-dark">
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
          <th scope="col">Due Date</th>
          <th scope="col">Assignee</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.tasks.length === 0 && (
          <tr className="no-data">
            <td colSpan={5}>No data available</td>
          </tr>
        )}
        {props.tasks.length > 0 &&
          props.tasks.map((el) => {
            const date = new Date(el.dueDate);
            return (
              <tr key={el.id}>
                <td>{el.title}</td>
                <td>{el.description}</td>
                <td>{date.toDateString()}</td>
                <td>{el.employee ? el.employee.name : "NONE"}</td>
                <td>
                  <button className="btn btn-success btn-sm" onClick={() => navigate(`/tasks/${el.id}`)}>
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

export default TaskItem;

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

import * as api from "../../requests/API";

const DepartmentDetails = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [department, setDepartment] = useState({});

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    api.get("departments/" + id).then((res) => {
      setName(res.name);
      setDescription(res.description);
      setDepartment(res);
    });
  }, []);

  const editHandler = (e) => {
    e.preventDefault();

    api
      .patch("departments/" + id, {
        name,
        description,
      })
      .then((res) => {
        navigate("/departments");
      });
  };

  const deleteHandler = (e) => {
    e.preventDefault();

    if (
      window.confirm("Would you really want to delete this department ?") ===
      true
    ) {
      api.del("departments/" + id).then((res) => {
        navigate("/departments");
      });
    }
  };

  const cancelHandler = (e) => {
    e.preventDefault();
    navigate("/departments");
  };

  return (
    <div>
      <h1>Details for '{department.name}'</h1>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input
            className="from-control"
            type="text"
            id="name-input"
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            className="from-control"
            type="text"
            id="email-input"
            defaultValue={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-success"
            onClick={editHandler}
          >
            Save
          </button>
          <button
            type="submit"
            className="btn btn-danger"
            onClick={deleteHandler}
          >
            Delete
          </button>
          <button
            type="submit"
            className="btn btn-secondary"
            onClick={cancelHandler}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default DepartmentDetails;

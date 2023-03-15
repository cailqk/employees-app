import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

import * as api from "../../requests/API";
import Button from "../UI/Button";

const DepartmentDetails = () => {
  const navigate = useNavigate();

  let urlExt = "?_embed=employees";

  const { id } = useParams();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    api.get("departments/" + id + urlExt).then((res) => {
      setName(res.name);
      setDescription(res.description);
      setEmployees(res.employees);
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
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <h1>Details for '{name}'</h1>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              id="name-input"
              defaultValue={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              className="form-control"
              type="text"
              id="email-input"
              defaultValue={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label className="form-group">Employees</label>
            {employees.map((el) => (
              <p className="form-control" key={el.id}>
                {el.name}
              </p>
            ))}
          </div>
          <div className="text-end mt-3">
            <Button
              type="submit"
              className="btn btn-success me-1"
              onClick={editHandler}
              name="Save"
            />
            <Button
              type="submit"
              className="btn btn-danger me-1"
              onClick={deleteHandler}
              name="Delete"
            />

            <Button
              type="submit"
              className="btn btn-secondary"
              onClick={cancelHandler}
              name="Cancel"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default DepartmentDetails;

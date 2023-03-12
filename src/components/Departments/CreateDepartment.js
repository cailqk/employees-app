import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as api from "../../requests/API";

const CreateDepartment = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    if (name === "" || description === "") {
      window.alert("Please fill all the fields");
    } else {
        await api.post('departments', {
            name,
            description
        });
        navigate('/departments')
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          id="name-input"
          defaultValue={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          type="text"
          id="description-input"
          defaultValue={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="text-end">
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </div>
    </form>
  );
};

export default CreateDepartment;

import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteSmurf, editSmurf, toggleEdit } from "../actions";

const Smurf = props => {
  const [editInput, setEditInput] = useState({
    name: props.smurf.name,
    age: props.smurf.age,
    height: props.smurf.height
  });

  const handleEditChange = e => {
    e.preventDefault();
    setEditInput({ ...editInput, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = e => {
    e.preventDefault();
    props.editSmurf(props.smurf.id, editInput);
  };
  return (
    <>
      {props.isEditing ? (
        <>
          <form className="editForm" onSubmit={handleEditSubmit}>
            <input
              onChange={handleEditChange}
              id="name"
              name="name"
              placeholder={props.smurf.name}
              value={editInput.name}
            />
            <input
              onChange={handleEditChange}
              id="age"
              name="age"
              placeholder={props.smurf.age}
              value={editInput.age}
            />
            <input
              onChange={handleEditChange}
              id="height"
              name="height"
              placeholder={props.smurf.height}
              value={editInput.height}
            />
            <button>Submit</button>
          </form>
        </>
      ) : (
        <div className="smurfCard">
          <p>Name: {props.smurf.name}</p>
          <p>Age: {props.smurf.age}</p>
          <p>Height: {props.smurf.height}</p>
          <button onClick={() => props.deleteSmurf(props.smurf.id)}>
            Delete
          </button>
          <button onClick={() => props.toggleEdit()}>Edit</button>
        </div>
      )}
    </>
  );
};

export default connect(null, { deleteSmurf, editSmurf, toggleEdit })(Smurf);

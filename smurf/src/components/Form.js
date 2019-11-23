import React, { useState } from "react";

import { addSmurf } from "../actions";
import { connect } from "react-redux";

const Form = props => {
  const [formData, setFormData] = useState({
    name: "",
    height: "",
    age: ""
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addSmurf({ ...formData, id: props.smurfs.length });
    setFormData({
      name: "",
      height: "",
      age: ""
    });
  };
  return (
    <>
      <h2>Add a Smurf</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="number"
          name="height"
          value={formData.height}
          placeholder="height"
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          value={formData.age}
          placeholder="age"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

const mapStateToProps = state => {
  console.log("from", state);
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, { addSmurf })(Form);

import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchSmurfs } from "../actions";

import Smurf from "./Smurf";

const SmurfList = ({ fetchSmurfs, smurfs, isFetching, error, isEditing }) => {
  useEffect(() => {
    fetchSmurfs();
  }, [fetchSmurfs]);

  if (isFetching) {
    return <h2>Smurfs loading...</h2>;
  }

  return (
    <div className="smurfListContainer">
      {smurfs.length < 1 && <h2>Load Some Smurfs!</h2>}
      {error && <h2>{error}</h2>}
      {smurfs.map(smurf => (
        <Smurf smurf={smurf} key={smurf.id} isEditing={isEditing} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    isEditing: state.isEditing,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(SmurfList);

import axios from "axios";

export const FETCH_SMURF_START = "START_SMURF_FETCHING";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAILURE = "FETCH_SMURF_FAILURE";

export const POST_SMURF_START = "POST_SMURF_START";
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURF_FAILURE = "POST_SMURF_FAILURE";

export const DELETE_SMURF_START = "DELETE_SMURF_START";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE";

export const EDIT_SMURF_START = "EDIT_SMURF_START";
export const EDIT_SMURF_SUCCESS = "EDIC_SMURF_SUCCESS";
export const EDIT_SMURF_FAILURE = "EDIT_SMURF_FAILURE";

export const TOGGLE_EDIT = "TOGGLE_EDIT";

//fetch smurfs
export const fetchSmurfs = () => {
  return function(dispatch) {
    dispatch({ type: FETCH_SMURF_START });
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log("reducers/index.js: axios.get res.data: ", res.data);
        dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
      })
      .catch(err =>
        dispatch({ type: FETCH_SMURF_FAILURE, payload: err.message })
      );
  };
};

//post smurf
export const addSmurf = smurf => {
  return dispatch => {
    dispatch({ type: POST_SMURF_START });
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {
        console.log(res.data);
        dispatch({ type: POST_SMURF_SUCCESS, payload: res.data });
      })
      .catch(err => dispatch({ type: POST_SMURF_FAILURE, payload: err }));
  };
};

//delete smurf
export const deleteSmurf = smurfId => {
  return dispatch => {
    dispatch({ type: DELETE_SMURF_START });
    axios
      .delete(`http://localhost:3333/smurfs/${smurfId}`)
      .then(res => {
        dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data });
      })
      .catch(err => dispatch({ type: DELETE_SMURF_FAILURE, payload: err }));
  };
};

//edit smurf
export const editSmurf = (smurfId, smurf) => {
  return dispatch => {
    dispatch({ type: EDIT_SMURF_START });
    axios
      .put(`http://localhost:3333/smurfs/${smurfId}`, smurf)
      .then(res => dispatch({ type: EDIT_SMURF_SUCCESS, payload: res.data }))
      .catch(err => dispatch({ type: EDIT_SMURF_FAILURE, payload: err }));
  };
};

//toggle edit mode
export const toggleEdit = () => {
  return dispatch => {
    dispatch({ type: TOGGLE_EDIT });
  };
};

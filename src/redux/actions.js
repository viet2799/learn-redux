import * as types from "./actionType";
import axios from "axios";

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

export const loadUsers = () => {
  return function (dispatch) {
    axios.get(`${process.env.REACT_APP_API}`).then((res) => {
      console.log(res);
      dispatch(getUsers(res.data));
    });
  };
};

const userDelete = () => ({
  types: types.DELETE_USER,
});

export const deleteUser = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then((res) => {
        console.log(res);
        dispatch(userDelete());
        dispatch(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};

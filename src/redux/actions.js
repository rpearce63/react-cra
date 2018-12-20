import axios from "axios";

export const changeName = payload => ({
  type: "CHANGE_NAME",
  payload
});

export const changeAccountType = payload => ({
  type: "CHANGE_ACCOUNT_TYPE",
  payload
});

export const submitForm = () => {
  //send data to server
  return async dispatch => {
    try {
      dispatch({ type: "FETCHING_DATA" });
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const users = res.data;
      //console.log(users);
      dispatch({ type: "FETCH_DATA_SUCCESS", payload: users });
    } catch (error) {
      dispatch({ type: "FETCH_DATA_ERROR", payload: error });
    }
  };
};

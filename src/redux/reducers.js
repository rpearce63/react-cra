const initialState = {
  name: "",
  accountType: "",
  selectionDisabled: true,
  submitDisabled: true,
  formSubmitted: false,
  isLoading: false,
  users: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "CHANGE_NAME":
      return {
        ...state,
        name: payload,
        selectionDisabled: !payload,
        submitDisabled: !payload || !state.accountType
      };
    case "CHANGE_ACCOUNT_TYPE":
      return { ...state, accountType: payload, submitDisabled: false };
    case "FETCHING_DATA":
      return { ...state, isLoading: true };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        isLoading: false,
        users: payload,
        formSubmitted: true
      };
    case "FETCH_DATA_ERROR":
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};

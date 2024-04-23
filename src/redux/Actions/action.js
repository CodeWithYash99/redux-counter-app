export const Decrement = (value) => async (dispatch) => {
  dispatch({
    type: "DECREMENT",
    payload: value,
  });
};

export const Reset = () => async (dispatch) => {
  dispatch({
    type: "RESET",
  });
};

export const Increment = (value) => async (dispatch) => {
  dispatch({
    type: "INCREMENT",
    payload: value,
  });
};

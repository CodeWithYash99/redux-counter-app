const initialCount = 0;

const countReducer = (state = initialCount, action) => {
  const { type, payload } = action;
  switch (type) {
    case "DECREMENT":
      if (payload) {
        return state - payload;
      }
      return state - 1;

    case "RESET":
      return initialCount;

    case "INCREMENT":
      if (payload) {
        return state + payload;
      }
      return state + 1;

    default:
      return state;
  }
};

export default countReducer;

const initialState = {
  i: null,
  j: null,
};

const changeposition = (state = initialState, action) => {
  if (action.type === "position") {
    return {
      ...state,
      i: action.payload.i,
      j: action.payload.j,
    };
  } else {
    return state;
  }
};

export default changeposition;

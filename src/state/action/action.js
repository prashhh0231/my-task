export const tileClick = (i, j) => {
  return {
    type: "position",
    payload: {
      i: i,
      j: j,
    },
  };
};

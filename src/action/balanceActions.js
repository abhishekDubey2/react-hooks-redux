export const depositeAction = (depositeAmount) => {
  return {
    type: "DEPOSIT",
    payload: depositeAmount,
  };
};

 const loadingAction = () => {
    return {
        type:"LOADING"
    }
}

export const depositeAsync = (depositeAmount) => {
    return (dispatch) => {
        dispatch(loadingAction());
        setTimeout(() => {
        dispatch(depositeAction(depositeAmount));
        }, 5000);
    };
};

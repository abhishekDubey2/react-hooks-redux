const initialState = {
    loan: false
};

const loanReducer = (State = initialState, action) => {
    switch(action.type) {
        case "APPLY":
            return {loan:true};
        default:
            return State;
    }
}

export default loanReducer;
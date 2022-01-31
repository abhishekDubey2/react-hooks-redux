import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const balance = useSelector((state) => state.balanceReducer.balance);
  const dispatch = useDispatch();
  const loan = useSelector((state) => state.loanReducer.loan);
  const handleLoan = () => {
    return dispatch({ type: "APPLY" });
  };
  return (
    <div className="ui segment equal width grid">
      <div className="ui tag labels column">
        <label className="ui label">
          Balance: <i className="rupee sign icon"></i> {balance} .00
        </label>
      </div>
      <div className="ui column right labeled input">
        <label placeholder="amount" className="ui label">
          {loan ? "Loan Aplied" : "Loan Needed"}
        </label>
      </div>
      <div className="column">
        <button
          className="ui olive button"
          disabled={loan ? true : false}
          onClick={handleLoan}
        >
          {loan ? "Loan Aplied" : "Apply for loan"}
        </button>
      </div>
    </div>
  );
};

export default Home;

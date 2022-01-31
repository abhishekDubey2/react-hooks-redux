import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as balanceActions from "./../action/balanceActions";

const Deposit = () => {
  const balance = useSelector((state) => state.balanceReducer.balance);
  const loan = useSelector((state) => state.loanReducer.loan);
  const loading = useSelector((state) => state.balanceReducer.loading);
  const [depositeAmount, setDepositeAmount] = useState(0);
  const inputElDeposite = useRef("");

  const dispatch = useDispatch();
  const handleDispatch = () => {
    console.log(inputElDeposite);
    inputElDeposite.current.focus();
    const amount = parseInt(inputElDeposite.current.value?.toLowerCase());

    amount && amount > 0
      ? setDepositeAmount(amount)
      : alert("Please Enter valid amount to deposite.");
    dispatch(balanceActions.depositeAsync(depositeAmount));
  };

  return (
    <div className="ui segment equal width grid">
      <div className="ui column tag labels">
        {loading ? (
          <div className="ui active centered inline loader"></div>
        ) : (
          <label className="ui label">
            Balance: <i className="rupee sign icon"></i> {balance} .00
          </label>
        )}
      </div>
      <div className="ui column right labeled input">
        <label placeholder="amount" className="ui label">
          <i className="rupee sign icon"></i>
        </label>
        <input
          type="text"
          placeholder="Amount"
          id="amount"
          ref={inputElDeposite}
        />
        <div className="ui basic label">.00</div>
      </div>
      <div className="column">
        <button className="ui olive button" onClick={handleDispatch}>
          Deposit
        </button>
      </div>
      <div className="ui column right labeled input">
        <label placeholder="amount" className="ui label">
          {loan ? "Loan Aplied" : "Loan Needed"}
        </label>
      </div>
    </div>
  );
};

export default Deposit;

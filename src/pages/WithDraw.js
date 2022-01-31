import React from "react";
import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Withdraw = () => {
  const balance = useSelector((state) => state.balanceReducer.balance);
  const loan = useSelector((state) => state.loanReducer.loan);
  const loading = useSelector((state) => state.balanceReducer.loading);
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const inputEl = useRef(null);
  const dispatch = useDispatch();
  const handleWithdraw = () => {
    inputEl.current.focus();
    inputEl.current.value && inputEl.current.value > 0
      ? setWithdrawAmount(parseInt(inputEl.current.value.toLowerCase()))
      : alert("Please Enter valid amount withdraw.");
    return balance - withdrawAmount > 0
      ? dispatch({
          type: "WITHDRAW",
          payload: withdrawAmount,
        })
      : alert(
          "Please check your balane before withdraw and after that enter valid amount ."
        );
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
        <input type="text" placeholder="Amount" id="amount" ref={inputEl} />
        <div className="ui basic label">.00</div>
      </div>
      <div className="column">
        <button className="ui olive button" onClick={handleWithdraw}>
          Withdraw
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

export default Withdraw;

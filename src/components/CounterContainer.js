import React, { useState } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

import { TiPlus, TiMinus } from "react-icons/ti";
import { GrPowerReset } from "react-icons/gr";

import { Decrement } from "../redux/Actions/action";
import { Reset } from "../redux/Actions/action";
import { Increment } from "../redux/Actions/action";

const CounterContainer = ({ data }) => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const Decrement = () => {
    dispatch({ type: "DECREMENT", payload: parseInt(input) });
  };

  const Reset = () => {
    dispatch({ type: "RESET" });
    setInput("");
  };

  const Increment = () => {
    dispatch({ type: "INCREMENT", payload: parseInt(input) });
  };

  return (
    <div className="counter-bg-container">
      <h1 className="counter-title">Redux Counter App</h1>

      <div className="counter-container">
        <input
          type="text"
          className="custom-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {data < 0 ? <p className="less-count">{data}</p> : ""}
        {data === 0 ? <p className="initial-count">{data}</p> : ""}
        {data > 0 ? <p className="great-count">{data}</p> : ""}

        <div className="btn-container">
          <span title="Decrement">
            <TiMinus className="btn decrement-btn" onClick={Decrement} />
          </span>
          <span title="Reset">
            <GrPowerReset className="btn reset-btn" onClick={Reset} />
          </span>
          <span title="Increment">
            <TiPlus className="btn increment-btn" onClick={Increment} />
          </span>
        </div>
      </div>
    </div>
  );
};

const mapStateToPrps = (state) => ({
  data: state,
});

export default connect(mapStateToPrps, { Decrement, Reset, Increment })(
  CounterContainer
);

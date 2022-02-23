import React, { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const IncDecCounter = (props) => {
  const { stock } = props;
  const [num, setNum] = useState(0);
  let incNum = () => {
    if (num < stock) {
      setNum(Number(num) + 1);
    }

    if(stock === num){
      alert("no stock left")
    }
  };
  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  let handleChange = (e) => {
    setNum(e.target.value);
  };
  return (
    <>
      <div
        className="d-flex flex-row-reverse justify-content-end"
        style={{ float: "right" }}
      >
        <button className="bt btn-primary" style={{ borderRadius: "10px" }}
          onClick={incNum}
        >
          +
        </button>
        <div
          className="border border-primary p-1"
          style={{ borderRadius: "10px" }}
          onChange={handleChange}
        >
          {num}
        </div>
        <button className="bt btn-primary" style={{ borderRadius: "10px" }} onClick={decNum}>
          -
        </button>
      </div>
      {/* <div className="col-xl-1 d-flex flex-row-reverse bd-highlight" style={{ float: "right" }}>
        <div class="input-group ">
          <div class="input-group-prepend">
            <button
              class="btn btn-outline-primary"
              type="button"
              onClick={decNum}
            >
              -
            </button>
          </div>
          <div
            class="form-control d-flex"
            onChange={handleChange}
            value={stock}
            placeholder={stock}
          >
            {num}
          </div>
          <div class="input-group-prepend d-flex">
            <button
              class="btn btn-outline-primary"
              type="button"
              onClick={incNum}
            >
              +
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default IncDecCounter;

import React, { useState } from "react";
import Loader from "../Loader/Loader";
import Filter from "./Filter";
import IncDecCounter from "./IncDecCounter";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FaFilter } from "react-icons/fa";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const {  handleAddToCart, count, loader, cd, setCd } = props;
  const [modal, setModal] = useState(false);

  const product = useSelector((state) => state.product.products)

  return (
    <>
      {modal && <Filter setModal={setModal} />}
      <div
        className="container justify-content-between "
        style={{ display: "flex", marginTop: "80px" }}
      >
        <h4>Products</h4>

        <button
          onClick={() => {
            setModal(!modal);
          }}
          style={{ borderRadius: "10px", border: "2px solid lightBlue" }}
        >
          <FaFilter />
          Filter
        </button>
      </div>
      {loader ? (
        <div className="text-center p-5">
          <Loader />
        </div>
      ) : (
        <div class="card-group">
          <div className="container">
            <div className="row">
              {product?.map((item) => {
                var d = new Date(item.createDate);
                d.toLocaleDateString();
                d.toLocaleDateString().replaceAll("/", "-");
                // console.log(d.toLocaleDateString().replaceAll("/", "-"));

                // console.log(item.price.replaceAll("$", "Rs "));
                var p = item.price.replaceAll("$", "Rs");
                var myArr = String(p)
                  .split("")
                  .map((p) => {
                    return Number(p);
                  });
                //array banaye

                // console.log(myArr);

                var slice = myArr.slice(2, myArr.length);

                // console.log(slice);

                var number = slice.join("");

                // console.log(slice.join(""));

                var rs = number * 119.7;
                // console.log(rs);
                item.nepaliCurrency = rs; //array ma pathako

                return (
                  <div key={"product_" + item.id} className="col-3 mt-3">
                    <div class="card" style={{ width: "16rem" }}>
                      <img
                        class="card-img-top"
                        src={`https://electronic-ecommerce.herokuapp.com/${item.image}`}
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <div className="">
                          <IncDecCounter stock={item.stock} count={count} />
                        </div>
                        <br/>
                        <br/>
                        <h5 class="card-title">{item.name}</h5>
                        <b> Rs: {rs}</b>
                        <span style={{ float: "right", color: "green" }}>
                          {" "}
                          <small>Stocks left: {item.stock}</small>
                        </span>
                        <br />
                        <b>
                          Released on:{" "}
                          {d.toLocaleDateString().replaceAll("/", "-")}{" "}
                        </b>
                        <br />
                        <div className="text-center">
                          <button
                            class="btn btn-primary mt-2"
                            onClick={() => {
                              let data = [...cd];
                              data.push(item);
                              setCd(data);
                              handleAddToCart()
                              
                            }}
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;

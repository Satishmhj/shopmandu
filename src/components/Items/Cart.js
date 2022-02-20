import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import Loader from "../Loader/Loader";
import Filter from "./Filter";
// import "../../App.css";

const Cart = (props) => {
  const { product, handleAddToCart, count, loader } = props;
  const [modal, setModal] = useState(false);
  console.log(product);

  console.log(modal);
  return (
    <>
      {modal && <Filter setModal={setModal} />}

      <div
        className="container justify-content-between  "
        style={{ display: "flex", marginTop: "20px" }}
      >
        <h3>Products</h3>

        <button
          className="btn-filter"
          onClick={() => {
            setModal(!modal);
          }}
        >
          <FaFilter />
          filter
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
                console.log(d.toLocaleDateString().replaceAll("/", "-"));

                return (
                  <div className="col-3 mt-3">
                    <div class="card" style={{ width: "16rem" }}>
                      <img
                        class="card-img-top"
                        src={`https://electronic-ecommerce.herokuapp.com/${item.image}`}
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h5 class="card-title">{item.name}</h5>
                        <b> Price: {item.price}</b>
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
                              if (item.stock > count) {
                                handleAddToCart(item.id);
                              } else alert("no stock left");
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

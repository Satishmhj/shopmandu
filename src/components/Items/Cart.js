import React from "react";
import { FaFilter } from "react-icons/fa";
// import "../../App.css";

const Cart = (props) => {
  const { product } = props;
  console.log(product);

  return (
    <>
      <div
        className="container justify-content-between"
        style={{ display: "flex", marginTop: "4px" }}
      >
        <h3>Products</h3>
        <button>
          <FaFilter /> Filter
        </button>
      </div>
      <div class="card-group">
        <div className="container">
          <div className="row">
            {/* <div class="d-flex mb-4 justify-content-between p-2"> */}
            {product?.map((item) => {
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
                      <b>Released on:{item.createDate} </b>
                      <br />
                      <div className="text-center">
                        <button class="btn btn-primary mt-2">
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
      {/* </div> */}
    </>
  );
};

export default Cart;

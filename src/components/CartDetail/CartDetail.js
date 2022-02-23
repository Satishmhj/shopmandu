import React from "react";
import { BsTrashFill } from "react-icons/bs";

const CartDetail = (props) => {
  const { setIconCart, cd, setCd, num } = props;
  console.log(cd);

  return (
    <div
      class="modal fade mt-3"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      //   aria-hidden="true"
      style={{ display: "block", opacity: "1" }}
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title mt-1" id="exampleModalLabel">
              Added Items
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => {
                setIconCart(false);
              }}
              style={{
                marginTop: "10px",
                borderRadius: "10px",
                border: "1px solid lightBlue",
              }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          {cd.map((item, index) => {
            return (
              <>
                <div>
                  <div class="modal-body d-flex justify-content-between">
                    <img
                      src={`https://electronic-ecommerce.herokuapp.com/${item.image}`}
                      style={{ width: "10rem" }}
                    />
                    <div>Rs: {item.nepaliCurrency} </div>
                    <button
                      className="btn-sm"
                      style={{
                        backgroundColor: "white",
                        height: "35px",
                        borderRadius: "15px",
                        border: "2px solid red",
                      }}
                    >
                      <BsTrashFill
                        onClick={() => {
                          let data = [...cd];
                          data.splice(index, 1);
                          setCd(data);
                        }}
                      />
                    </button>
                  </div>
                </div>
              </>
            );
          })}
          <div class="modal-footer">
            <button type="button" class="btn btn-success">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetail;

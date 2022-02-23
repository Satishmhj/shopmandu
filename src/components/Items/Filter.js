import React from "react";
import "../../App.css";

const Filter = (props) => {
  const {setModal}=props;
  console.log(props);
  return (
    <>
      <div
        class="modal fade  container mt-1"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        // aria-hidden="true"
        style={{ display: "block", opacity: "1" }}
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title mt-1" id="exampleModalLabel">
                filter
              </h5>
              <button
                type="button"
                className="close mt-2"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() =>{
                  setModal(false)
                }}
                style={{borderRadius: "10px", border: '1px solid lightblue'}}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div>
                <a>Price</a>
                <br />
                <input type="number" placeholder="Min"></input>
                <a>-</a>
                <input type="number" placeholder="Max"></input>
              </div>
              <br/>
              <div>
                <a>Date</a>
                <br />
                <input type="date" />
              </div>
              <br/>
              <div>
                <a>Category</a>
                <div className="category">
                  <input type="text" placeholder=" विकल्प छान्नुहोस्" />

                  <div class="dropdown">
                    <button
                      class="btn dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a class="dropdown-item" href="#">
                          Laptops
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          SmartPhones
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          HeadSet
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button "
                class="btn btn-secondary close btn btn-danger"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" class="btn btn-success">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
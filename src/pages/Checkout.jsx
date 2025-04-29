import React from "react";

function Checkout() {
  return (
    <>
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Checkout</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Pages</a>
          </li>
          <li className="breadcrumb-item active text-white">Checkout</li>
        </ol>
      </div>

      {/* checkout start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <h1 className="mb-4">Billing details</h1>
          <form action="#">
            <div className="row g-5">
              <div className="col-md-12 col-lg-6 col-xl-7">
                <div className="row">
                  <div className="col-md-12 col-lg-6">
                    <div className="form-item w-100">
                      <label className="form-label my-3">
                        First Name<sup>*</sup>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6">
                    <div className="form-item w-100">
                      <label className="form-label my-3">
                        Last Name<sup>*</sup>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="form-item">
                  <label className="form-label my-3">
                    Company Name<sup>*</sup>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">
                    Address <sup>*</sup>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="House Number Street Name"
                  />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">
                    Town/City<sup>*</sup>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">
                    Country<sup>*</sup>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">
                    Postcode/Zip<sup>*</sup>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">
                    Mobile<sup>*</sup>
                  </label>
                  <input type="tel" className="form-control" />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">
                    Email Address<sup>*</sup>
                  </label>
                  <input type="email" className="form-control" />
                </div>
                <div className="form-check my-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="Account-1"
                    name="Accounts"
                    value="Accounts"
                  />
                  <label className="form-check-label" htmlFor="Account-1">
                    Create an account?
                  </label>
                </div>
                <hr />
                <div className="form-check my-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="Address-1"
                    name="Address"
                    value="Address"
                  />
                  <label className="form-check-label" htmlFor="Address-1">
                    Ship to a different address?
                  </label>
                </div>
                <div className="form-item">
                  <textarea
                    name="text"
                    className="form-control"
                    spellCheck="false"
                    cols="30"
                    rows="11"
                    placeholder="Order Notes (Optional)"
                  ></textarea>
                </div>
              </div>

              <div className="col-md-12 col-lg-6 col-xl-5">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Products</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          name: "Awesome Brocoli",
                          price: 69,
                          qty: 2,
                          img: "img/vegetable-item-2.jpg",
                        },
                        {
                          name: "Potatoes",
                          price: 69,
                          qty: 2,
                          img: "img/vegetable-item-5.jpg",
                        },
                        {
                          name: "Big Banana",
                          price: 69,
                          qty: 2,
                          img: "img/vegetable-item-3.png",
                        },
                      ].map((item, index) => (
                        <tr key={index}>
                          <th scope="row">
                            <div className="d-flex align-items-center mt-2">
                              <img
                                src={item.img}
                                className="img-fluid rounded-circle"
                                style={{ width: "90px", height: "90px" }}
                                alt={item.name}
                              />
                            </div>
                          </th>
                          <td className="py-5">{item.name}</td>
                          <td className="py-5">${item.price.toFixed(2)}</td>
                          <td className="py-5">{item.qty}</td>
                          <td className="py-5">
                            ${(item.price * item.qty).toFixed(2)}
                          </td>
                        </tr>
                      ))}

                      <tr>
                        <td colSpan="3" />
                        <td className="py-5">
                          <p className="mb-0 text-dark py-3">Subtotal</p>
                        </td>
                        <td className="py-5">
                          <div className="py-3 border-bottom border-top">
                            <p className="mb-0 text-dark">$414.00</p>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td colSpan="1" />
                        <td className="py-5">
                          <p className="mb-0 text-dark py-4">Shipping</p>
                        </td>
                        <td colSpan="3" className="py-5">
                          {[
                            "Free Shipping",
                            "Flat rate: $15.00",
                            "Local Pickup: $8.00",
                          ].map((option, i) => (
                            <div className="form-check text-start" key={i}>
                              <input
                                type="checkbox"
                                className="form-check-input bg-primary border-0"
                                id={`Shipping-${i}`}
                                name="Shipping"
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`Shipping-${i}`}
                              >
                                {option}
                              </label>
                            </div>
                          ))}
                        </td>
                      </tr>

                      <tr>
                        <td colSpan="2" className="py-5">
                          <p className="mb-0 text-dark text-uppercase py-3">
                            TOTAL
                          </p>
                        </td>
                        <td colSpan="2" />
                        <td className="py-5">
                          <div className="py-3 border-bottom border-top">
                            <p className="mb-0 text-dark">$135.00</p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* {[
                  {
                    id: "Transfer-1",
                    label: "Direct Bank Transfer",
                    description:
                      "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.",
                  },
                  { id: "Payments-1", label: "Check Payments" },
                  { id: "Delivery-1", label: "Cash On Delivery" },
                  { id: "Paypal-1", label: "Paypal" },
                ].map((option, idx) => (
                  <div
                    className="row g-4 text-center align-items-center justify-content-center border-bottom py-3"
                    key={idx}
                  >
                    <div className="col-12">
                      <div className="form-check text-start my-3">
                        <input
                          type="checkbox"
                          className="form-check-input bg-primary border-0"
                          id={option.id}
                          name={option.label}
                        />
                        <label className="form-check-label" htmlFor={option.id}>
                          {option.label}
                        </label>
                      </div>
                      {option.description && (
                        <p className="text-start text-dark">
                          {option.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))} */}

                <div className="row g-4 text-center align-items-center justify-content-center pt-4">
                  <button
                    type="button"
                    className="btn border-secondary py-3 px-4 text-uppercase w-100 text-primary"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* checkout end */}
    </>
  );
}

export default Checkout;

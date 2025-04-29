import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import featur1 from "../assets/img/featur-1.jpg";
import featur2 from "../assets/img/featur-2.jpg";
import featur3 from "../assets/img/featur-3.jpg";
import banner_img_1 from "../assets/img/baner-1.png";
function homepage() {
  return (
    <>
      <Hero />
      <div className="container-fluid fruite py-5">
        <div className="container py-5">
          <div className="tab-class text-center">
            <div className="row g-4">
              <div className="col-lg-4 text-start">
                <h1>Our Organic Products</h1>
              </div>
              <div className="col-lg-8 text-end">
                <ul className="nav nav-pills d-inline-flex text-center mb-5">
                  <li className="nav-item">
                    <a
                      className="d-flex m-2 py-2 bg-light rounded-pill active"
                      data-bs-toggle="pill"
                      href="#tab-1"
                    >
                      <span className="text-dark" style={{ width: "130px" }}>
                        All Products
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex py-2 m-2 bg-light rounded-pill"
                      data-bs-toggle="pill"
                      href="#tab-2"
                    >
                      <span className="text-dark" style={{ width: "130px" }}>
                        Vegetables
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex m-2 py-2 bg-light rounded-pill"
                      data-bs-toggle="pill"
                      href="#tab-3"
                    >
                      <span className="text-dark" style={{ width: "130px" }}>
                        Fruits
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex m-2 py-2 bg-light rounded-pill"
                      data-bs-toggle="pill"
                      href="#tab-4"
                    >
                      <span className="text-dark" style={{ width: "130px" }}>
                        Bread
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex m-2 py-2 bg-light rounded-pill"
                      data-bs-toggle="pill"
                      href="#tab-5"
                    >
                      <span className="text-dark" style={{ width: "130px" }}>
                        Meat
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      <ProductCard
                        className="col-md-6 col-lg-4 col-xl-3"
                        imgSrc="img/fruite-item-5.jpg"
                        category="Fruits"
                        title="Grapes"
                        price="4.99"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div id="tab-2" className="tab-pane fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      <ProductCard
                        imgSrc="img/fruite-item-5.jpg"
                        category="Fruits"
                        title="Grapes"
                        price="4.99"
                      />
                      <ProductCard
                        imgSrc="img/fruite-item-2.jpg"
                        category="Fruits"
                        title="Raspberries"
                        price="4.99"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div id="tab-3" className="tab-pane fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      <ProductCard
                        imgSrc="img/fruite-item-1.jpg"
                        category="Fruits"
                        title="Oranges"
                        price="4.99"
                      />
                      <ProductCard
                        imgSrc="img/fruite-item-6.jpg"
                        category="Fruits"
                        title="Apple"
                        price="4.99"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Add more tabs if needed (Bread, Meat, etc.) */}
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid service py-5">
        <div className="container py-5">
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-4">
              <a href="#">
                <div className="service-item bg-secondary rounded border border-secondary">
                  <img
                    src={featur1}
                    className="img-fluid rounded-top w-100"
                    alt="Fresh Apples"
                  />
                  <div className="px-4 rounded-bottom">
                    <div className="service-content bg-primary text-center p-4 rounded">
                      <h5 className="text-white">Fresh Apples</h5>
                      <h3 className="mb-0">20% OFF</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-md-6 col-lg-4">
              <a href="#">
                <div className="service-item bg-dark rounded border border-dark">
                  <img
                    src={featur2}
                    className="img-fluid rounded-top w-100"
                    alt="Tasty Fruits"
                  />
                  <div className="px-4 rounded-bottom">
                    <div className="service-content bg-light text-center p-4 rounded">
                      <h5 className="text-primary">Tasty Fruits</h5>
                      <h3 className="mb-0">Free delivery</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-md-6 col-lg-4">
              <a href="#">
                <div className="service-item bg-primary rounded border border-primary">
                  <img
                    src={featur3}
                    className="img-fluid rounded-top w-100"
                    alt="Exotic Vegetable"
                  />
                  <div className="px-4 rounded-bottom">
                    <div className="service-content bg-secondary text-center p-4 rounded">
                      <h5 className="text-white">Exotic Vegetable</h5>
                      <h3 className="mb-0">Discount 30$</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Section Start */}
    <div className="container-fluid banner bg-secondary my-5">
      <div className="container py-5">
        <div className="row g-4 align-items-center">

          <div className="col-lg-6">
            <div className="py-4">
              <h1 className="display-3 text-white">Fresh Exotic Fruits</h1>
              <p className="fw-normal display-3 text-dark mb-4">in Our Store</p>
              <p className="mb-4 text-dark">
                The generated Lorem Ipsum is therefore always free from repetition,
                injected humour, or non-characteristic words etc.
              </p>
              <a href="#" className="banner-btn btn border-2 border-white rounded-pill text-dark py-3 px-5">
                BUY
              </a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="position-relative">
                <img src={banner_img_1} className="img-fluid w-100 rounded" alt="Banner" />
              <div
                className="d-flex align-items-center justify-content-center bg-white rounded-circle position-absolute"
                style={{ width: '140px', height: '140px', top: 0, left: 0 }}
              >
                <h1 style={{ fontSize: '100px' }}>1</h1>
                <div className="d-flex flex-column">
                  <span className="h2 mb-0">50$</span>
                  <span className="h4 text-muted mb-0">kg</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    {/* Banner Section End */}
    </>
  );
}

export default homepage;

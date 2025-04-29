import { React, useState } from "react";
import banner_fruit_img from "../assets/img/banner-fruits.jpg";
import ProductCard from "../components/ProductCard";
import pro_img from "../assets/img/fruite-item-1.jpg";
function Shop() {
  const [price, setPrice] = useState(0);

  const handleRangeChange = (e) => {
    setPrice(e.target.value);
  };
  return (
    <>
      {/* // Single Page Header Start */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Shop</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Pages</a>
          </li>
          <li className="breadcrumb-item active text-white">Shop</li>
        </ol>
      </div>
      {/* // Single Page Header End */}

      {/* Fruit shop start  */}
      <div className="container-fluid fruite py-5">
        <div className="container py-5">
          <h1 className="mb-4">Fresh fruits shop</h1>
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="row g-4">
                <div className="col-xl-3">
                  <div className="input-group w-100 mx-auto d-flex">
                    <input
                      type="search"
                      className="form-control p-3"
                      placeholder="keywords"
                      aria-describedby="search-icon-1"
                    />
                    <span id="search-icon-1" className="input-group-text p-3">
                      <i className="fa fa-search"></i>
                    </span>
                  </div>
                </div>
                <div className="col-6"></div>
                <div className="col-xl-3">
                  <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                    <label htmlFor="fruits">Default Sorting:</label>
                    <select
                      id="fruits"
                      name="fruitlist"
                      className="border-0 form-select-sm bg-light me-3"
                      form="fruitform"
                    >
                      <option value="volvo">Nothing</option>
                      <option value="saab">Popularity</option>
                      <option value="opel">Organic</option>
                      <option value="audi">Fantastic</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row g-4">
                <div className="col-lg-3">
                  <div className="row g-4">
                    {/* Categories Section */}
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <h4>Categories</h4>
                        <ul className="list-unstyled fruite-categorie">
                          {[
                            "Apples",
                            "Oranges",
                            "Strawbery",
                            "Banana",
                            "Pumpkin",
                          ].map((item, index) => (
                            <li key={index}>
                              <div className="d-flex justify-content-between fruite-name">
                                <a href="#">
                                  <i className="fas fa-apple-alt me-2"></i>
                                  {item}
                                </a>
                                <span>({Math.floor(Math.random() * 10)})</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Price Section */}
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <h4 className="mb-2">Price</h4>
                        <input
                          type="range"
                          className="form-range w-100"
                          id="rangeInput"
                          name="rangeInput"
                          min="0"
                          max="500"
                          value={price}
                          onChange={handleRangeChange}
                        />
                        <output id="amount" name="amount">
                          {price}
                        </output>
                      </div>
                    </div>

                    {/* Additional Section */}
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <h4>Additional</h4>
                        {[
                          "Organic",
                          "Fresh",
                          "Sales",
                          "Discount",
                          "Expired",
                        ].map((option, idx) => (
                          <div className="mb-2" key={idx}>
                            <input
                              type="radio"
                              className="me-2"
                              id={`Categories-${idx + 1}`}
                              name="Categories-1"
                              value={option}
                            />
                            <label htmlFor={`Categories-${idx + 1}`}>
                              {" "}
                              {option}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Featured Products Section */}
                    <div className="col-lg-12">
                      <h4 className="mb-3">Featured products</h4>

                      <div className="d-flex justify-content-center my-4">
                        <a
                          href="#"
                          className="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100"
                        >
                          View More
                        </a>
                      </div>
                    </div>

                    {/* Banner Section */}
                    <div className="col-lg-12">
                      <div className="position-relative">
                        <img
                          src={banner_fruit_img}
                          className="img-fluid w-100 rounded"
                          alt=""
                        />
                        <div
                          className="position-absolute"
                          style={{
                            top: "50%",
                            right: "10px",
                            transform: "translateY(-50%)",
                          }}
                        >
                          <h3 className="text-secondary fw-bold">
                            Fresh <br /> Fruits <br /> Banner
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* product card section start*/}
                <div className="col-lg-9">
                  <div className="row g-4 justify-content-start ">
                    <ProductCard
                      className="col-md-6 col-lg-6 col-xl-4"
                      imgSrc={pro_img}
                      category="Fruits"
                      title="Grapes"
                      price="4.99"
                      
                    />

                    {/* Pagination */}
                    <div className="col-12">
                      <div className="pagination d-flex justify-content-center mt-5">
                        <a href="#" className="rounded">
                          &laquo;
                        </a>
                        <a href="#" className="active rounded">
                          1
                        </a>
                        <a href="#" className="rounded">
                          2
                        </a>
                        <a href="#" className="rounded">
                          3
                        </a>
                        <a href="#" className="rounded">
                          4
                        </a>
                        <a href="#" className="rounded">
                          5
                        </a>
                        <a href="#" className="rounded">
                          6
                        </a>
                        <a href="#" className="rounded">
                          &raquo;
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* product card section end*/}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fruit shop end  */}
    </>
  );
}

export default Shop;

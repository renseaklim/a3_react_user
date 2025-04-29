import React from "react";

const ProductCard = ({ className, imgSrc, category, title, price }) => {
  return (
    <div className={className}>
      <div className="rounded position-relative fruite-item">
        <div className="fruite-img">
          <img
            src={imgSrc}
            className="img-fluid w-100 rounded-top"
            alt={title}
          />
        </div>
        <div
          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
          style={{ top: "10px", left: "10px" }}
        >
          {category}
        </div>
        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
          <h4>{title}</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
            eiusmod te incididunt
          </p>
          <div className="d-flex justify-content-between flex-lg-wrap">
            <p className="text-dark fs-5 fw-bold mb-0">${price} / kg</p>
            <a
              href="#"
              className="btn border border-secondary rounded-pill px-3 text-primary"
            >
              <i className="fa fa-shopping-bag me-2 text-primary"></i> Add to
              cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

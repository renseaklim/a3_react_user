import React from 'react';
import hero1 from '../assets/img/hero-img-1.png';
import hero2 from '../assets/img/hero-img-2.jpg';
const Hero = () => {
  return (
    <>
      {/* Hero Start */}
      <div className="container-fluid py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-md-12 col-lg-7">
              <h4 className="mb-3 text-secondary">100% Organic Foods</h4>
              <h1 className="mb-5 display-3 text-primary">Organic Veggies & Fruits Foods</h1>
              <div className="position-relative mx-auto">
                <input
                  className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill"
                  type="number"
                  placeholder="Search"
                />
                <button
                  type="submit"
                  className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100"
                  style={{ top: 0, right: '25%' }}
                >
                  Submit Now
                </button>
              </div>
            </div>
            <div className="col-md-12 col-lg-5">
              <div id="carouselId" className="carousel slide position-relative" data-bs-ride="carousel">
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active rounded">
                    <img src={hero1} className="img-fluid w-100 h-100 bg-secondary rounded" alt="First slide" />
                    <a href="#" className="btn px-4 py-2 text-white rounded">Fruites</a>
                  </div>
                  <div className="carousel-item rounded">
                    <img src={hero2} className="img-fluid w-100 h-100 rounded" alt="Second slide" />
                    <a href="#" className="btn px-4 py-2 text-white rounded">Vesitables</a>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero End */}

      {/* Features Section Start */}
      <div className="container-fluid featurs py-5">
        <div className="container py-5">
          <div className="row g-4">
            {[
              {
                icon: 'fas fa-car-side',
                title: 'Free Shipping',
                desc: 'Free on order over $300',
              },
              {
                icon: 'fas fa-user-shield',
                title: 'Security Payment',
                desc: '100% security payment',
              },
              {
                icon: 'fas fa-exchange-alt',
                title: '30 Day Return',
                desc: '30 day money guarantee',
              },
              {
                icon: 'fa fa-phone-alt',
                title: '24/7 Support',
                desc: 'Support every time fast',
              },
            ].map((feature, idx) => (
              <div key={idx} className="col-md-6 col-lg-3">
                <div className="featurs-item text-center rounded bg-light p-4">
                  <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                    <i className={`${feature.icon} fa-3x text-white`}></i>
                  </div>
                  <div className="featurs-content text-center">
                    <h5>{feature.title}</h5>
                    <p className="mb-0">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Features Section End */}
    </>
  );
};

export default Hero;

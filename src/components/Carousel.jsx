import React from "react";
import "../style/carousel.css";
const Carousel = (props) => {
  return (
    <div className="container">
      <div
        id="carouselExampleCaptions"
        className="carousel slide pt-5"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={require("../images/fruits.jpg")}
              className="d-block w-100 gambar-car"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="font-carousel">Fruits</h5>
              <p className="font-carousel">
                Fruits are an excellent source of essential vitamins and
                minerals, and they are high in fiber. Fruits also provide a wide
                range of health-boosting antioxidants, including flavonoids.
                Eating a diet high in fruits and vegetables can reduce a
                person's risk of developing heart disease, cancer, inflammation,
                and diabetes.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={require("../images/vegetables.jpg")}
              className="d-block w-100 gambar-car"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="font-carousel">Vegetable</h5>
              <p className="font-carousel">
                Vegetables are important part of healthy eating and provide a
                source of many nutrients, including potassium, fiber, folate
                (folic acid) and vitamins A, E and C. Options like broccoli,
                spinach, tomatoes and garlic provide additional benefits, making
                them a superfood!
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={require("../images/egg.jpeg")}
              className="d-block w-100 gambar-car"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="font-carousel">Egg</h5>
              <p className="font-carousel">
                Eggs are a very good source of inexpensive, high-quality
                protein. More than half the protein of an egg is found in the
                egg white, which also includes vitamin B2 and lower amounts of
                fat than the yolk. Eggs are rich sources of selenium, vitamin D,
                B6, B12 and minerals such as zinc, iron and copper.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={require("../images/meat.jpg")}
              className="d-block w-100 gambar-car"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="font-carousel">Beef</h5>
              <p className="font-carousel">
                With beef’s exceptional taste and flavour, as well as its meal
                versatility and health benefits, it is no wonder that beef is a
                favourite among us Australian’s.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={require("../images/fish.jpg")}
              className="d-block w-100 gambar-car"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="font-carousel">Fish</h5>
              <p className="font-carousel">
                Fish is a low-fat high quality protein. Fish is filled with
                omega-3 fatty acids and vitamins such as D and B2 (riboflavin).
                Fish is rich in calcium and phosphorus and a great source of
                minerals, such as iron, zinc, iodine, magnesium, and potassium.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={require("../images/spice.jpg")}
              className="d-block w-100 gambar-car"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="font-carousel">Spice</h5>
              <p className="font-carousel">
                Spices play a significant role in the way we cook and consume
                food around the world. Every spice has its own flavoring and
                essence, and its addition or omission can literally make or
                break a dish.
              </p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};
export default Carousel;

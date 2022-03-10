import { React, useState, Fragment } from "react";

function ImageSlider({ imagesUrlArray }) {
  const [current, setcurrent] = useState(0);
  const nextSlide = () => {
    console.log("got next");
    if (current < imagesUrlArray.length) {
      setcurrent(current === imagesUrlArray.length - 1 ? 0 : current + 1);
    }
  };

  const pervSlide = () => {
    console.log("got perivius");
    setcurrent(current === 0 ? imagesUrlArray.length - 1 : current - 1);
  };
  return (
    <Fragment>
      <div className="dirk">
        <i
          className=" fas fa-caret-square-left left-arrow"
          onClick={pervSlide}
        />
        {imagesUrlArray.map((item, index) => (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img className="sliderImage" src={item} alt="travel" />
            )}
          </div>
        ))}
        <i
          className=" fas fa-caret-square-right right-arrow"
          onClick={nextSlide}
        />
      </div>
    </Fragment>
  );
}

export default ImageSlider;

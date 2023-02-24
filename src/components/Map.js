import React from "react";

export const Map = () => {
  return (
    <>
      <div className=" flex flex-row items-center justify-evenly py-20 bg-gradient-to-r from-[#d24e4f] to-[#d3b1b6]">
        <iframe
          width="50%"
          height="500"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Lovely%20Professional%20University+(My%20Business%20Name)&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.maps.ie/distance-area-calculator.html">
            measure area map
          </a>
        </iframe>
        <div className="flex flex-col justify-start gap-4">
          <h1 className="text-5xl text-white">Want To Know Your Location</h1>
          <div className="flex flex-row items-center gap-2">
            <p className="text-5xl text-white">
              Get <span className="text-red-600">blood</span> at your
              doorstep...
            </p>
            <img
              className="invert w-12 h-12"
              src="https://img.icons8.com/external-outlines-amoghdesign/32/null/external-drop-marine-and-nautical-outlines-amoghdesign.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

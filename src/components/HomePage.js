import React from "react";
import { Map } from "../components/Map";
import { BloodGroups } from "../components/BloodGroups";
import { Calendar } from "../components/Calendar";
import { Footer } from "../components/Footer";
import { CardSection } from "../components/CardSection";
export const HomePage = () => {
  return (
    <>
      <div className="py-24 bg-gradient-to-r from-[#d24e4f] to-[#d3b1b6] flex flex-col gap-5 items-center justify-center">
        <div className="text-5xl md:text-6xl text-center flex-col items-center justify-center   text-slate-50 mb-6">
          <h1 className=" mb-6 font-semibold">GIVE THE GIFT OF LIFE</h1>
          <h1 className="font-bold">
            DONATE{" "}
            <span className="bg-slate-50 font-semibold px-3 ml-1 text-[#fa6060]">
              BLOOD
            </span>
          </h1>
        </div>
        <div className="flex flex-row items-center">
          <div className="w-48 flex flex-col align-items text-center">
            <div className="text-4xl flex flex-col items-center border-r">
              <p className="flex flex-row items-center text-5xl text-slate-50 gap-3">
                157
                <img
                  className="invert h-9"
                  src="https://img.icons8.com/external-outlines-amoghdesign/32/null/external-drop-marine-and-nautical-outlines-amoghdesign.png"
                  alt=""
                />
              </p>
              <p className="text-lg text-slate-50 ">
                People have show interest
              </p>
            </div>
          </div>
          <div className="w-48 flex flex-col align-items text-center">
            <div className="text-4xl flex flex-col items-center">
              <p className="flex flex-row items-center text-5xl text-slate-50 gap-3">
                43
                <img
                  className="invert h-9"
                  src="https://img.icons8.com/ios/50/null/we.png"
                  alt=""
                />
              </p>
              <p className="text-lg text-slate-50 ">
                People have show interest
              </p>
            </div>
          </div>
        </div>
      </div>
      <CardSection />
      <Map />
      <BloodGroups />
      <Calendar />
      <Footer />
    </>
  );
};

import React from "react";

export const CardSection = () => {
  return (
    <>
      <div className="flex flex-row bg-slate-100 items-center justify-center flex-wrap gap-20 py-32">
        <div className="h-40 w-40 gap-4 border flex flex-col items-center font-semibold text-lg text-slate-500 bg-white justify-center hover:scale-125 cursor-pointer transition-transform">
          <img
            className="h-12"
            src="https://img.icons8.com/ios/50/null/search-client.png"
            alt=""
          />
          FIND A DONOR
        </div>
        <div className="h-40 w-40 gap-4 border flex flex-col items-center font-semibold  hover:scale-125 bg-white cursor-pointer transition-transform text-lg text-slate-500 justify-center">
          <img
            className="h-14"
            src="https://img.icons8.com/external-smashingstocks-detailed-outline-smashing-stocks/66/null/external-blood-bag-medical-smashingstocks-detailed-outline-smashing-stocks.png"
            alt=""
          />
          BLOOD BANK
        </div>
        <div className="h-40 w-40 gap-4 border flex flex-col items-center font-semibold  hover:scale-125 bg-white cursor-pointer transition-transform text-lg text-slate-500 justify-center">
          <img
            className="h-12"
            src="https://img.icons8.com/ios/50/null/edit-message.png"
            alt=""
          />
          REQUESTS
        </div>
        <div className="h-40 w-40 gap-4 border flex flex-col items-center font-semibold  hover:scale-125 cursor-pointer transition-transform bg-white text-lg text-slate-500 justify-center">
          <img
            className="h-12"
            src="https://img.icons8.com/ios/50/null/advanced-search.png"
            alt=""
          />
          OTHER
        </div>
      </div>
    </>
  );
};

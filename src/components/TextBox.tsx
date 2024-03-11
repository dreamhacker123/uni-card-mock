import React from 'react';

import downArrow from "../public/down_arrow.svg"


export const TextBox = ()=>{

    return (
      <div className="flex flex-col justify-center w-full max-w-7xl mx-auto px-6 md:px-4" style={{marginTop:"200px"}}>
        <div className="flex flex-col justify-center md:text-center text-[28px] md:text-[40px] leading-[34px] md:leading-[1.2] tx-black-primary md:pb-16 font-medium">
          <p className='fadeInBottom' >
            Earn 1% assured cashback
            <span className="text-[#9EA7AE]"> on your spends. Get</span> 5X
          </p>
          <p className='fadeInBottom'>
            more value than cashback
            <span className="text-[#9EA7AE]"> at the Uni Store. Enjoy</span>
          </p>
          <p className='fadeInBottom'>
            <span className="text-[#9EA7AE]">round the clock </span>
            Whatsapp support.{" "}
            <span className="text-[#9EA7AE]">And it's</span>
          </p>
          <p className='fadeInBottom'>
            lifetime free
            <span className="">
              ; no joining fee, no annual charges.
            </span>
          </p>
        </div>
        <div
          className="animate-bounce flex md:justify-center py-12"
          style={{ opacity: 1, transform: "none" }}
        >
          <div
            style={{
              background:
                "linear-gradient(140.86deg, #65ECD8 11.07%, #FDEF78 80.28%)",
            }}
            className="flex w-[96px] md:w-[150px] h-[96px] md:h-[150px] rounded-[50%] justify-center"
          >
            <img
              alt="down_arrow"
              src={downArrow}
              loading="lazy"
              className="w-9 md:w-14 css-0"
            />
          </div>
        </div>
      </div>
    );
}
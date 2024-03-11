import React from "react";

import circlesImage from "../public/circles.png";
import { ContentBoxprops } from "../types/globalTypes";

export interface DarkContentBoxprops extends ContentBoxprops {
  hasBgCircles?: boolean;
  hasTextTop?:boolean;
}

export const DarkContentBox = ({
  imagePath,
  isImageFirst,
  primaryText,
  secondaryText,
  subText,
  hasBgCircles,
  hasTextTop
}: DarkContentBoxprops): JSX.Element => {
  return (
    <div className="flex blackBox items-center relative">
      {hasBgCircles && (
        <img
          src={circlesImage}
          alt="circles"
          className="absolute left-0 top-0 h-auto w-[70%]"
        />
      )}
      <div
        className={`flex md:items-center ${hasTextTop?"flex-col":"flex-col-reverse"} ${
          isImageFirst ? "md:flex-row-reverse" : ""
        } md:flex-row w-full font-medium justify-center  md:pt-[70px] py-0 md:py-[60px]`}
      >
        <div className="flex flex-col flex-[50%] md:flex-[100%] ml-6 text-left">
          <p className="text-[22px] font-medium text-white w-[80%] mb-4 md:text-[40px] leading-[1.2]">
            {primaryText}
            <span className="gradientTextDark"><br/>{secondaryText}</span>
          </p>
          {subText ? (
            <div className="text-[#BFC9CC] text-[14px] w-[60%] md:text-2xl font-normal">
              {subText}
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="flex justify-center flex-[50%]">
          <img
            src={imagePath}
            alt="some-images"
            className="h-auto w-[80%] md:w-[420px] max-w-[420px] z-[1] mx-6"
          />
        </div>
      </div>
    </div>
  );
};

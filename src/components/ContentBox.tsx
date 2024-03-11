import React from "react";

import { ContentBoxprops } from "../types/globalTypes";



export const ContentBox = ({imagePath,isImageFirst,primaryText,secondaryText, subText}:ContentBoxprops):JSX.Element=>{
    return(
        <div className={`flex md:items-center flex-col-reverse ${isImageFirst?"md:flex-row-reverse":""} md:flex-row fit-content font-medium justify-center  md:pt-[70px] py-0 md:py-[60px] mb-8`}>
            <div className="flex flex-col flex-[70%] items-center ml-8 text-left -mx-8">
                <p className="leading primaryText w-[70%]">{primaryText}<em>{secondaryText}</em></p>
                {
                    subText?(<div className="leading-5 mt-10 w-[70%] font-normal text-[13px] md:text-lg text-[#9EA7AE]">{subText}</div>):<></>
                }
            </div>
            <img src={imagePath} alt="some-images" className="h-auto w-[225px] md:w-[420px] max-w-[420px] z-[1] mx-6"/>
        </div>
    )
}
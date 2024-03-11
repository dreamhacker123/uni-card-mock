import React from "react";

export interface BubbleCardProps{
    logoPath: string;
    primaryText:string;
    secondaryText?: string;
    secondaryLogo?:string;
}

export const BubbleCard = ({logoPath,primaryText,secondaryText,secondaryLogo}:BubbleCardProps):JSX.Element=>{
    return(
        <div className="flex false w-full items-center md:flex-col md:max-w-xs my-12 md:my-0">
            <div className="flex-[50%] flex-shrink-0 flex w-full">
                <div className="w-full h-36 relative">
                <img className="absolute md:relative md:left-auto md:-translate-x-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-20 md:w-28 h-auto mx-auto md:mx-0" src={logoPath} alt={logoPath} />
                </div>
            </div>
            <div className="flex-[50%] flex flex-col">
            <p className="text-left font-medium text-base text-white leading-[18px] md:text-2xl">{primaryText}</p>
            {
                secondaryText&&(
                    <p className="text-left text-sm text-gray-4 mt-2 md:text-lg"><span>{secondaryText}</span></p>
                )
            }
            {
                secondaryLogo&&(
                    <p className="text-sm text-gray-4 mt-2 md:text-lg"><span><img src={secondaryLogo} alt="logo-some" /></span></p>
                )
            }
            </div>
        </div>
    )
}
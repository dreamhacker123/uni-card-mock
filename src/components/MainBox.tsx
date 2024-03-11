import React, { useEffect, useState } from "react";
import { DiamondSVG } from "./DiamondSVG";
import { InputBox } from "./InputBox";

const videoBg = require("../public/video_bg.mp4");

export interface MainBoxProps{
    imagePath:string;
    primaryText: string;
    secondaryText:string;
    subtexts:string[];
}

export const MainBox = ({imagePath,primaryText,secondaryText, subtexts}:MainBoxProps):JSX.Element => {

    const [isInputSticky,setInputSticky] = useState(false);

    useEffect(() => {   
        window.addEventListener("scroll", listenToScroll);
        return () => 
           window.removeEventListener("scroll", listenToScroll); 
      }, [])
      
      const listenToScroll = () => {
        let heightToHideFrom = 700;
        const winScroll = document.body.scrollTop || 
            document.documentElement.scrollTop;
    
        if (winScroll > heightToHideFrom) {  
             (!isInputSticky)&&setInputSticky(true);
        } else {
             setInputSticky(false);
        }  
      };


    return (
        <div className="flex px-6">
        <video className="video-bg" loop autoPlay muted playsInline><source src={videoBg} type="video/mp4" /></video>
        <div className={`flex md:items-center h-full flex-col-reverse md:flex-row h-100vh w-full md:pt-[70px] py-0 md:py-[60px] mb-8`}>
        <div className="z-10 w-full mt-7 md:mt-0 md:my-auto flex flex-col self-end md:self-center px-6">
            <h1 className="font-normal max-w-[300px] md:max-w-[700px] text-3xl md:text-[3.4rem] md:leading-[54px] text-black md:mb-6 ">
                <p className="mainText text-left pr-8"><strong>{primaryText}</strong>{secondaryText}</p>
            </h1>
            
            <span className="flex text-center mt-0 mb-9">{
                subtexts.map((eachSubText,index)=>{
                    return <p className="mainSubtexts">{eachSubText}{(index<subtexts.length-1)&&<DiamondSVG />}</p>
                })
                }</span>
            <InputBox isSticky={isInputSticky} placeholder="Enter Phone Number" buttonText="Apply Now" termsText="You agree to be contacted by Uni Cards over Call, SMS, Email or WhatsApp to guide you through your application."/>
        </div>
        <img src={imagePath} alt="some-images" className="h-auto w-[225px] md:w-[420px] md:h-[420px] max-w-[420px] z-[1] mx-6"/>
    </div>
    </div>
    )
}
import React from "react";
import { BUBBLES_CONTENT } from "../constants/contentTexts";
import { BubbleCard } from "./BubbleCard";


export const BubbleBanner = ():JSX.Element=>{
    return(
        <div className="flex blackBox items-center relative justify-between">
            {
                BUBBLES_CONTENT.map((eachBubbleProps)=>{
                    return <BubbleCard {...eachBubbleProps} />
                })
            }
        </div>
    )
}
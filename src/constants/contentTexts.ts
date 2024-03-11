import { ContentBoxprops } from "../types/globalTypes";

import image2 from "../public/image2.png"
import image1 from "../public/image1.png";

import image3 from "../public/image3.png";
import image4 from "../public/image4.png";

import image5 from "../public/image5.webp";
import image6 from "../public/image6.webp";

import watsAppLogo from "../public/whatsapp_bubble.webp";
import rupeeLogo from "../public/whatsapp_bubble.webp";
import antiVirusLogo from "../public/antivirus_bubble.webp";
import certLogo from "../public/pcidss_cert.svg";

import { MainBoxProps } from "../components/MainBox";
import { DarkContentBoxprops } from "../components/DarkContentBox";
import { BubbleCardProps } from "../components/BubbleCard";



export const CONTENT_SLIDES:{[ x in "dark"|"light"]: (ContentBoxprops|DarkContentBoxprops)[]
} = {
    "light":[
        {
            primaryText: "1% assured cashback on your spends.",
            secondaryText: "The more you spend the more you earn.",
            imagePath: image2,
            subText:"Not applicable on fuel purchase, rent & wallet transfers, ATM withdrawals & international transactions."
        
        },
        {
            primaryText:"5x more value than your cashback,",
            secondaryText:" only at the Uni Store.",
            imagePath:image3,
            isImageFirst:true
        },
        {
            primaryText:"Zero Forex Markup.",
            secondaryText:"Go international, without any fees.",
            imagePath:image4
        },


    ],
    "dark":[
        {
            primaryText:"We've all heard of instant groceries, now say hello to,",
            secondaryText:" instant Credit.",
            imagePath:image5,
            subText:"0% hassle, 100% paperless. Get your Uni Card instantly",
            hasBgCircles:true,
            hasTextTop:true
        },
        {
            primaryText:"With Uni,",
            secondaryText:" you're always in control",
            imagePath:image6,
            subText:"Set your own payment limits. Choose how and where you spend. Lock and unlock your card. All right from the app. ",
        }

    ]
}


export const MAIN_SLIDE:MainBoxProps = {
    primaryText: "NX Wave.",
    secondaryText: "The next-gen credit card for those who love rewards.",
    imagePath: image1,
    subtexts: ["1% Cashback","5x Rewards","Zero Forex Markup"]

}

export const BUBBLES_CONTENT:BubbleCardProps[]=[{
    primaryText:"Help, just a WhatsApp away. Anytime, Anyday.",
    secondaryText:"During hectic work hours. On lazy sunday mornings. In the thick of night. Anytime.",
    logoPath:watsAppLogo
},{
    primaryText:"No hidden charges, no last minute surprises.",
    secondaryText:"100% money back guarantee if a charge is applied without your",
    logoPath:rupeeLogo
},{
    primaryText:"Super secure. Because we care about your money.",
    secondaryLogo:certLogo,
    logoPath:antiVirusLogo
}]
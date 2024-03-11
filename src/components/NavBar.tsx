import React from 'react';
import { UniLogo } from './UniLogo';
import { Button } from './Button';
import { PAY_CHEK_LINK } from '../constants/links';


export const NavaBar = ():JSX.Element=>{
    return(
        <div className="flex justify-between mx-8 px-6 items-center">
            <UniLogo />
            <Button onClick={()=>window.open(PAY_CHEK_LINK,"_blank")}>Uni Paychek</Button>
        </div>
    )
}

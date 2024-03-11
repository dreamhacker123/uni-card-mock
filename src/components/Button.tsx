import react from 'react';

import styled from 'styled-components';


export const Button =styled.button.attrs<{onClick?:()=>void}>((props)=>({
    className: "flex items-center break-word",
    onClick:props.onClick
}))`
    background: rgb(0,0,0,0.6);
    color: white;
    border-radius: 0.75rem;
    border: none;
    padding: 11px 30px;
    font-size: 14px;
    height: fit-content;
    font-weight: 500;
    &:hover{
        background: rgb(0,0,0,1);
        color: #46D0C4;
    }
    
`
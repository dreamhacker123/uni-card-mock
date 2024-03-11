import React, { useState } from "react";
import { CheckMarkIcon } from "../public/CheckMark";
import { CrossIcon } from "../public/Cross";
import { WarningIcon } from "../public/Warning";

interface InputBoxProps {
  placeholder: string;
  buttonText: string;
  termsText:string;
  isSticky?:boolean;
}


const InfoIcon = ({inputValue,clearInput}:{inputValue:string, clearInput:()=>void}):JSX.Element=>{

  const isNumber = isNaN(Number(inputValue.trim()));
  const canClear = !isNumber && (inputValue.length<10 && inputValue.length>0);

  return(
    inputValue.length?(<span onClick={canClear?clearInput:undefined}className="w-6 flex items-center justify-end m-0 p-0">{
      
 (!isNumber)?((inputValue.length===10)?<CheckMarkIcon />:<CrossIcon />):<WarningIcon />
    }</span>):<></>
  )
}

export const InputBox = ({
  placeholder,
  buttonText,
  termsText,
  isSticky
}: InputBoxProps): JSX.Element => {
  const [inputText, setInputText] = useState("");
  const [isChecked, setChecked] = useState(true);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputText(e.target.value.trim() ?? "");
    e.stopPropagation();
  };

  const onCheckBoxClick = (e: React.ChangeEvent<HTMLInputElement>):void=>{
    setChecked(prevState=>!prevState);
    e.stopPropagation();

  }

  const clearInput = ():void=>{
    setInputText("");
  }

  return (
    <div className={`flex ${isSticky?"stickyFooter py-5":"flex-col w-1/2"}`}>
      <div className="flex bg-black p-1 pl-2 h-12 rounded-xl justify-between">
          <input
            type="tel" id="phone" name="phone" pattern="[0-9]"
            className="flex justify-between bg-black border-0 outline-none text-white p-1 placeholder-[#7E8587] w-44"
            onChange={onChange}
            placeholder={placeholder}
            maxLength={10}
            value={inputText}

          />
            <div className="flex">
            <InfoIcon inputValue={inputText} clearInput={clearInput} />
            <button
              type="submit"
              className="text-center text-sm leading-7 pt-2 ml-2 bg-uni-yellow rounded-xl z-10 py-2 px-4 disabled:opacity-80 disabled:cursor-not-allowed"
              disabled={!isChecked||(inputText.length<10 && inputText.length>0)||(isNaN(Number(inputText)))}
            >
              <span>{buttonText}</span>
            </button>
            </div>
        </div>
        <div className="flex space-x-2 items-center py-4 px-2 max-w-xs">
            <input id="check-box" checked={isChecked} type={"checkbox"} onChange={onCheckBoxClick} />
            <label className="text-left checkboxLabel">{termsText}</label>
        </div>
    </div>
  );
};

import React, { useRef, useState } from "react";

interface inputProps {
  StartIcon: React.ElementType,
  EndIcon?: React.ElementType,
  onChangeValidate?: (e:React.ChangeEvent<HTMLInputElement>) => void,
  inputType?: string,
  label: string
}

const Input:React.FC<inputProps> = ({ StartIcon , EndIcon, onChangeValidate, inputType, label='' }) => {
  const inputBox = useRef(null) ;
  const [Valid, setValid] = useState<boolean>(false) ;
  const [TypeOfInput, setTypeOfInput] = useState<'text'|'password'>('text') ;

  const defaultValidate = (e:React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.value.length <= 0){
      setValid(false);
      return;
    } 

    switch(inputType){
      case undefined:
        setValid(true) ;  // length > 0
        break;
      case 'email':
        setValid(/\S+@\S+\.\S+/.test(e.target.value)) ;
        break;
    }
  }
  
  return (
    <div className="w-full border rounded-md flex flex-row items-center px-2 py-3 cursor-text"
      onClick={()=> inputBox.current.focus()}
    >
      <StartIcon className="h-8 w-8 text-gray-500" />
      <div className="input-box flex flex-col h-full w-full px-3">
        <p className="text-xs text-gray-400 font-thin">{label}</p>
        <input
          type="text"
          className="flex flex-row w-full h-5 focus:outline-none font-sans"
          typeof={TypeOfInput}
          ref={inputBox}
          onChange={(e) => onChangeValidate? onChangeValidate(e): defaultValidate(e)}
        />
      </div>
      {(inputType==='password')? (
        <></>
      ):EndIcon? (
        <EndIcon className={Valid? 'text-green-400' : 'invisible'} />
      ):<></>}
    </div>
  );
};

export default Input;

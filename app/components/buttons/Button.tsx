'use client'

import { IconType } from "react-icons";

type ButtonProps={
    onSubmit:(e:React.MouseEvent<HTMLButtonElement>)=>void;
    btnLabel:string;
    outLine?:boolean;
    icon?:IconType
}

const Button :React.FC<ButtonProps>= (
    {
        onSubmit,
        btnLabel,
        outLine,
        icon:Icon
    }
) => {
  return (
    <button onClick={onSubmit} className={`w-full h-12 cursor-pointer ${outLine?"border border-black":"bg-black text-white"}`}>
        {Icon && <Icon size={25} />}
        {btnLabel}
    </button>
  )
}

export default Button
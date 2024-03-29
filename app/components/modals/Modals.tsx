'use client'
import {GrClose} from "react-icons/gr"
import Button from "../buttons/Button";

type ModelProps = {
    isOpen:boolean;
    onClose:()=>void;
    onSubmit:()=>void;
    btnLabel:string;
    title:string;
    bodyElement?:React.ReactElement;
    footerElement?:React.ReactElement;
}
const Modals:React.FC<ModelProps> = ({
    isOpen,
    onClose,
    onSubmit,
    btnLabel,
    title,
    bodyElement,
    footerElement
}) => {
    const closeFunc=()=>{
        onClose();
    }

    const submitFunc = ()=>{
        onSubmit();
    }

    if(!isOpen){
        return null
    }
  return (
    <div className="bg-black bg-opacity-70 fixed flex items-center justify-center w-full h-full">
        <div className="bg-white rounded-lg p-5 w-1/2">
            <div className="flex items-center justify-between pb-3 mb-3 border-b">
                <div className="text-2xl">{title}</div>
                <div className="" onClick={closeFunc}>
                <GrClose size={25} />
                </div>
            </div>
            <div className="">
                {bodyElement && bodyElement}
            </div>
            <Button
            onSubmit={submitFunc}
            btnLabel={btnLabel}
            />
            {footerElement && footerElement}
        </div>
    </div>
  )
}

export default Modals
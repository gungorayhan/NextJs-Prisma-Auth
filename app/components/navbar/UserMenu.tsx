'use client'
import {useState} from "react"
import {GiHamburgerMenu} from "react-icons/gi"
import Image from "next/image"
import UserMenuItem from "./UserMenuItem"
import { useAppDispatch } from "@/app/redux/hooks"
import { loginModalFunc, registerModalFunc } from "@/app/redux/modalSlice"
const UserMenu = () => {
    const [openMenu,setOpenMenu] = useState<boolean>(false);
    const dispatch = useAppDispatch();
  return (
    <div onClick={()=>setOpenMenu(!openMenu)} className="relative flex items-center gsp-2 cursor-pointer">
        <GiHamburgerMenu size={25}/>
        <Image
            src={`https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png`}
            alt=""
            width={40}
            height={40}
        />

        {
            openMenu && (
                <div className="absolute bg-white shadow-lg shadow-gray-500 w-[150px] top-16 right-0">
                     <UserMenuItem
                    name="Sign In"
                    onClick={()=>{dispatch(loginModalFunc())}}
                    />
                    <UserMenuItem
                    name="Sign In"
                    onClick={()=>{dispatch(registerModalFunc())}}
                    />
                </div>
            )
        }
    </div>
  )
}

export default UserMenu
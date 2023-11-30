'use client'
import {IconType} from "react-icons"
import { useRouter } from "next/navigation"

type CategoriesItemProps ={
    name:string;
    icon:IconType;
    selected:Boolean;
}
const CategoriesItem:React.FC<CategoriesItemProps> = ({name,icon:Icon,selected}) => {
  const router=useRouter();
    return (
    <div onClick={()=>router.push(`?category=${name}`)} className={`${selected ?"border-b-2 border-black":"" } pb-2 flex items-center gap-2 cursor-pointer`}>
        <Icon/>
        <div className="tracking-wider">{name}</div>
    </div>
  )
}

export default CategoriesItem
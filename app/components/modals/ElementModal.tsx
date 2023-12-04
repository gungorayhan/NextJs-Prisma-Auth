'use client'
import {useState} from "react"
import Button from "../buttons/Button"
import Input from "../input/input"
import Modals from "./Modals"
import { FcGoogle } from "react-icons/fc"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks"
import { elementModalFunc, registerModalFunc } from "@/app/redux/modalSlice"
import axios from "axios"
import { toast } from "react-toastify"
import { categories } from "../navbar/Categories"
import CategorySelect from "../listings/CategorySelect"
import CountrySelect from "../listings/CountrySelect"
import CounterSelect from "../listings/CounterSelect"
import Image from "next/image";
import { useRouter } from "next/navigation";


const ElementModal = () => {
    const [imgsSrc,setImgsSrc]=useState([])

    const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {    
            imageSrc:"",
            category:"",
            roomCaount:1,
            location:null
        }
    })

    const { elementModal } = useAppSelector(state => state.modal)
    const dispatch = useAppDispatch();
    const router = useRouter()
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        axios.post('/api/listings',data)
        .then(()=>{
            toast.success("ekelem işlemi başarılı")
            router.refresh()
            reset()
            dispatch(elementModalFunc())
            
        })
        .catch((err)=>{
            toast.error("ekleme işlemi başarısız")
            console.log(err,"error")
        })
    }

    const category =  watch('category')
    const roomCount = watch('roomCount')
    const imageSrc = watch('imageSrc')
    const location = watch('location')

    const customSetValue =  (id:string,value:any) =>{
        setValue(id,value,{
            shouldValidate:true,
            shouldDirty:true,
            shouldTouch:true
        })
    }

    const imageSelectFunc =(e:any)=>{
            for (const file of e.target.files) {
                const reader = new FileReader()
                reader.readAsDataURL(file)
                reader.onload =()=>{
                    setImgsSrc((imgs):any=>[...imgs, reader.result])
                    return customSetValue('imageSrc',reader.result)
                }
                reader.onerror=()=>{
                    console.log(errors)
                }
            }
    }
    const bodyElement = (
        <>
        <div className="flex item-center gap-10 mb-5">
            {
                categories.map((cat,i)=>(
                    <CategorySelect
                    key={i}
                    name={cat.name}
                    icon={cat.icon}
                    onClick={(category)=>{customSetValue('category',category)}}
                    selected={category== cat.name}
                    />
                ))
            }
        </div>

        <div className="mb-5">
            <CountrySelect
                value={location}
                onChange={(value)=>{customSetValue('location',value)}}
            />
        </div>

        <div className="mb-5">
            <CounterSelect
                title="Oda sayısı"
                description="Oda sayısı miktarı açıklama"
                value={roomCount}
                onChange={(value)=>{customSetValue('roomCount',value)}}
            />
        </div>
        <input type="file" name="file" onChange={val=>imageSelectFunc(val)} />
        <div className="mb5">
            <Image
            src={imageSrc}
            alt=""
            width={200}
            height={200}
            />
        </div>
        </>
    )

    const footerElement = (
        <div>
            Footer
        </div>
    )
    return (
        <div>
            <Modals
                footerElement={footerElement}
                bodyElement={bodyElement}
                isOpen={elementModal}
                onSubmit={handleSubmit(onSubmit)}
                onClose={() => { dispatch(elementModalFunc()) }}
                btnLabel='Create'
                title='Create Listing'
            />
        </div>
    )
}

export default ElementModal
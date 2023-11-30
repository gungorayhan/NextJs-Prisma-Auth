'use client'
import Button from "../buttons/Button"
import Input from "../input/input"
import Modals from "./Modals"
import {FcGoogle} from "react-icons/fc"
import {FieldValues, SubmitHandler, useForm} from "react-hook-form"
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks"
import { registerModalFunc } from "@/app/redux/modalSlice"
import axios from "axios"
import { toast } from "react-toastify"


const RegisterModel = () => {
    const {register, handleSubmit, watch, formState:{errors}} = useForm<FieldValues>({
      defaultValues:{
        name:"",
        email:"",
        password:""
      }
    })

    const {regsiterModal} = useAppSelector(state=>state.modal)
    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<FieldValues>=(data)=>{
      console.log(data)
      axios.post('/api/register', data)
      .then(()=>{
        dispatch(registerModalFunc())
        toast.success("Register işlemi başarılıdır")
      })
      .catch((err:any)=>{
        toast.error("register işlemi hatalı")
      })
    }
    const bodyElement=(
        <div>
          <Input
            id="name"
            type="text"
            placeholder="Name"
            register={register}
            errors={errors}
            required
          />
          <Input
            id="email"
            type="text"
            placeholder="email"
            register={register}
            errors={errors}
            required
          />
          <Input
            id="password"
            type="password"
            placeholder="password"
            register={register}
            errors={errors}
            required
          />
        </div>
    )

    const footerElement=(
        <div className="mt-5">
            <Button
                btnLabel="Google ile Giriş"
                outLine
                icon={FcGoogle}
                onSubmit={()=>{}}
            />
        </div>
    )
    return (
        <div>
            <Modals
                footerElement={footerElement}
                bodyElement={bodyElement}
                isOpen={regsiterModal}
                onSubmit={handleSubmit(onSubmit)}
                onClose={() => {dispatch(registerModalFunc()) }}
                btnLabel='Register'
                title='Register'
            />
        </div>
    )
}

export default RegisterModel
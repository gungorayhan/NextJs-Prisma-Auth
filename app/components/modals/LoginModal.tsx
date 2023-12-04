'use client'
import Button from "../buttons/Button"
import Input from "../input/input"
import Modals from "./Modals"
import {FcGoogle} from "react-icons/fc"
import {FieldValues, SubmitHandler, useForm} from "react-hook-form"
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks"
import { loginModalFunc, } from "@/app/redux/modalSlice"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

const LoginModel = () => {

    const {register, handleSubmit, watch, formState:{errors}} = useForm<FieldValues>({
      defaultValues:{
        email:"",
        password:""
      }
    })

    const router =useRouter()

    const {loginModal} = useAppSelector((state)=>state.modal)

    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<FieldValues>=(data)=>{

      signIn("credentials",{
        ...data,
        redirect:false
      })
      .then((callback)=>{
        if(callback?.ok){
          dispatch(loginModalFunc());
          router.refresh();
          toast.success("giriş işlemi başarılıdır")
        }
        if(callback?.error){
          toast.error("Hatalı giriş")
        }
      })

    }
    const bodyElement=(
        <div>
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
                isOpen={loginModal}
                onSubmit={handleSubmit(onSubmit)}
                onClose={() => {dispatch(loginModalFunc()) }}
                btnLabel='Login'
                title='Login'
            />
        </div>
    )
}

export default LoginModel
'use client'
import Button from "../buttons/Button"
import Input from "../input/input"
import Modals from "./Modals"
import {FcGoogle} from "react-icons/fc"
import {FieldValues, SubmitHandler, useForm} from "react-hook-form"
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks"
import { loginModalFunc, } from "@/app/redux/modalSlice"

const LoginModel = () => {
    const {register, handleSubmit, watch, formState:{errors}} = useForm<FieldValues>({
      defaultValues:{
        email:"",
        password:""
      }
    })

    const {loginModal} = useAppSelector((state)=>state.modal)
    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<FieldValues>=(data)=>{}
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
                onSubmit={() => {handleSubmit(onSubmit) }}
                onClose={() => {dispatch(loginModalFunc()) }}
                btnLabel='Login'
                title='Login'
            />
        </div>
    )
}

export default LoginModel
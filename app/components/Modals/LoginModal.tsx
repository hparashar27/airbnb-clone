'use client'
import {signIn} from "next-auth/react"
import { AiFillGithub } from "react-icons/ai";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import Button from "../Button";
import { toast } from "react-hot-toast"; // react-hot-toast is for sending the beautiful notification
import { FieldValues, SubmitHandler,useForm } from "react-hook-form";
import Modal from "./Modal";
import useLoginModal from "@/app/hooks/useLoginModal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { useRouter } from "next/navigation";
import useRegisterModal from "@/app/hooks/useRegisterModal";

const LoginModal = () => {
const router  = useRouter();
  const[isLoading,setIsLoading] = useState(false);
  const LoginModal = useLoginModal();
const registerModal  = useRegisterModal()
  const {register,handleSubmit,formState:{errors,}}= useForm<FieldValues>({
    defaultValues:{
      name:"",
      email:"",
      password:""
    }  })

    const onSubmit : SubmitHandler<FieldValues> = (data) => {
      setIsLoading(true);

      signIn('credentials',({
        ...data,
        redirect : false
      })).then((callback)=>{

        setIsLoading(false);

if(callback?.ok)
{
  toast.success("logged in!");
  router.refresh();
  LoginModal.onClose();
}

if(callback?.error){
  toast.error(callback.error);
}
      })
    }

    const bodyContent = (
      <div className="flex flex-col gap-4">
        <Heading
          title="Welcome Back"
          subtitle="login to you account"
        />
        <Input
          id="email"
          label="Email"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input
          id="password"
          label="Password"
          type="password"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    )
      const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
          <hr />
          <Button 
            outline 
            label="Continue with Google"
            icon={FcGoogle}
            onClick={()=>{}}
          />
          <Button 
            outline 
            label="Continue with Github"
            icon={AiFillGithub}
            onClick={()=>{}}
          />
          <div 
            className="
              text-neutral-500 
              text-center 
              mt-4 
              font-light
            "
          >
            <p>Create a new account
              <span 
                onClick={LoginModal.onClose} 
                className="
                  text-neutral-800
                  cursor-pointer 
                  hover:underline
                "
                >Sign up</span>
            </p>
          </div>
        </div>
    )

return(
  <Modal 
    body={bodyContent}
    footer={footerContent}
    disabled={isLoading}
    onClose={LoginModal.onClose}
    actionlabel ="Continue"
    title="Login"
    isopen={LoginModal.isOpen}
    onSubmit={handleSubmit(onSubmit)} 
    />
)

}

export default LoginModal
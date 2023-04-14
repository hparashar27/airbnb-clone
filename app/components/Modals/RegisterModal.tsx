'use client'
import { AiFillGithub } from "react-icons/ai";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import Button from "../Button";
import { toast } from "react-hot-toast"; // react-hot-toast is for sending the beautiful notification
import { FieldValues, SubmitHandler,useForm } from "react-hook-form";
import Modal from "./Modal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Heading from "../Heading";
import Input from "../inputs/Input";

const RegisterModal = () => {

  const[isLoading,setIsLoading] = useState(false);
  const registerModal = useRegisterModal();

  const {register,handleSubmit,formState:{errors,}}= useForm<FieldValues>({
    defaultValues:{
      name:"",
      email:"",
      password:""
    }  })

    const onSubmit : SubmitHandler<FieldValues> = (data) => {
      setIsLoading(true);
      axios.post("/api/register",data).then(()=>registerModal.onClose).catch((error)=>{
       toast.error('something went wrong')
      }).finally(()=>{
        setIsLoading(false);
      })
    }
    const bodyContent = (
      <div className="flex flex-col gap-4">
        <Heading
          title="Welcome to Airbnb"
          subtitle="Create an account!"
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
          id="name"
          label="Name"
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
            <p>Already have an account?
              <span 
                onClick={registerModal.onClose} 
                className="
                  text-neutral-800
                  cursor-pointer 
                  hover:underline
                "
                > Log in</span>
            </p>
          </div>
        </div>
    )

return(
  <Modal 
    body={bodyContent}
    footer={footerContent}
    disabled={isLoading}
    onClose={registerModal.onClose}
    actionlabel ="Continue"
    title="Register"
    isopen={registerModal.isOpen}
    onSubmit={handleSubmit(onSubmit)} 
    />
)

}

export default RegisterModal
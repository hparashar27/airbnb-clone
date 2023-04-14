'use client'
import { AiFillGithub } from "react-icons/ai";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
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
        console.log(error)
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

return(
  <Modal 
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
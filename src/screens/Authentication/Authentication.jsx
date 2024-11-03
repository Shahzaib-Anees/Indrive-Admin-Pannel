import React, { useState } from 'react'
import { FaRegUser, FaLockOpen, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useForm } from "react-hook-form"
import "./Authentication.css";
const Authentication = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
    console.log(data);
    reset();

  }
  const [ifTrySeePassword, setIfTrySeePassword] = useState(false);
  const [ifTrySignIn, setIfTrySignIn] = useState(false);
  return (
    <>
      <article className='flex justify-center items-center'>
        <article className='lg:w-[700px] md:w-[100%] sm:w-[100%] h-[fit-content] flex flex-col gap-10 justify-center'>
          <div className='flex flex-col gap-1 bg-[#fbfbfb] p-3'>
            <h1 className='text-4xl font-bold text-[#6f6f6f]'>Admin Login</h1>
            <p className='text-[16px] font-semibold text-[#9c9c9b]'>Enter your credentials to login</p>
          </div>
          <form className='flex flex-col px-6 py-8 gap-8' onSubmit={handleSubmit(onSubmit)} style={{
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
          }}>
            <div className='flex flex-col gap-1 items-start'>
              <p className='text-[17px] font-semibold text-[#6f6f6f]'>Email</p>
              <div className='inputField gap-3'>
                <span className='px-2 border-r-2 border-r-gray-300'>
                  <FaRegUser color='#9c9c9b' size={20} />
                </span>
                <input type="email" className='w-[100%] h-[40px] text-[#9c9c9b] font-semibold outline-none border-none' placeholder='Enter your email' placeholderTextColor='gray' {...register("email", { required: true })} />
              </div>
              {errors.email && (
                <span className="error-text">This field is required</span>
              )}
            </div>
            <div className='flex flex-col gap-1 items-start'>
              <p className='text-[17px] font-semibold text-[#6f6f6f]'>Password</p>
              <div className='inputField gap-3'>
                <span className='px-2 border-r-2 border-r-gray-300'>
                  <FaLockOpen color='#9c9c9b' size={20} />
                </span>
                <input type={ifTrySeePassword ? "text" : "password"} className='w-[100%] h-[40px] text-[#9c9c9b] font-semibold outline-none border-none' placeholder='Enter your password' placeholderTextColor='gray'  {...register("password", { required: true })} />
                <span className='pl-2 border-l-2 border-l-gray-300c cursor-pointer' onClick={() => setIfTrySeePassword(!ifTrySeePassword)}>
                  {
                    ifTrySeePassword ?
                      <FaRegEyeSlash color='#9c9c9b' size={23} />
                      :
                      <FaRegEye color='#9c9c9b' size={22} />
                  }
                </span>
              </div>
              {errors.password && (
                <span className="error-text">This field is required</span>
              )}
            </div>
            <button
              type="submit"
              className="w-[100%] bg-[#4f3085] text-[#fff] py-2 font-bold rounded"
              id="submitButton"
            >
              {ifTrySignIn ? "Signing In..." : "Sign In"}
            </button>
          </form>
        </article >
      </article >
    </>
  )
}

export default Authentication
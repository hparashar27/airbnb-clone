'use client'
import { Toaster } from 'react-hot-toast' 

//  we cannot use <Toaster/> directly , we have to provide it a parent class in order to use it in the next js 

const ToastProvider = () => {
  return (
    <Toaster/>
  )
}

export default ToastProvider
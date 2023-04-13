'use client'
import { useState,useEffect } from "react"
// this is for the occuring of an unnecessary error while refreshing the page , this error is coming up due to the hydration , we are going to make a clientOnlyProps which wraps up the the page and prevent it from the error ->
// so we wrap the navbar under the clientonly component in the layout.tsx file
interface ClientOnlyProps {
    children:React.ReactNode
}

const ClientOnly : React.FC<ClientOnlyProps>=({children})=> {
    const [hasMounted,setHasMounted] = useState(false);

  useEffect(() => {
     setHasMounted(true)
    }, []);

    if(!hasMounted){
        return null
    }

  return (
   <>
   {children}
   </>
  )
}

export default ClientOnly
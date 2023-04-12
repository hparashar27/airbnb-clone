"use client";

import { useState, useEffect, useCallback } from "react";

interface ModalProps {
  isopen?: boolean;
  onclose: () => void;
  onsubmit: () => void;
  actionlabel: string;
  footer?: React.ReactElement;
  body?: React.ReactElement;
  title?: string;
  secondaryAction?: () => void;
  disable?:boolean;
  secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isopen,
  disable
  onclose,
  onsubmit,
  actionlabel,
  footer,
  body,
  title,
  secondaryAction,
  secondaryActionLabel,
}) => {
    const [showModal,setShowModal] = useState(isopen);

    useEffect(()=>{
setShowModal(isopen);
    },[isopen]);

    const handleClose = useCallback(()=>{
if(disable){
return
}
setShowModal(false);
setTimeout(() => {
    onclose();
}, 300);
},[onclose,disable]);

const handleSubmit = useCallback(()=>{
    if(disable){
        return
    }
    onsubmit();
},[disable,onsubmit]);

const handleSecondaryAction = useCallback(()=>{
if(disable || !secondaryAction){
    return 
}
secondaryAction();
},[secondaryAction,disable])

if(!isopen){
    return null;
}

  return <div>Modal</div>;
};

export default Modal;

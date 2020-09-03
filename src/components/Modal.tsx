import React, { useState, useCallback, forwardRef, useImperativeHandle } from 'react';

export interface ModelHandles {
    handleOpenModal: ()=>void;
}

const Modal: React.RefForwardingComponent<ModelHandles> = (props, ref) => {
    const [visible, setVisible] = useState(true);
    const handleCloseModal = useCallback(()=>{
        setVisible(false);
    }, []);
    const handleOpenModal = useCallback(()=>{
        setVisible(true);
    }, []);
    useImperativeHandle(ref, ()=>{
        return {
            handleOpenModal
        };
    });
    if(!visible){
        return null;
    }
    return (
        <div>
            Modal On
            <button onClick={handleCloseModal}>Fechar Modal</button>
        </div>
    );
}

export default forwardRef(Modal);
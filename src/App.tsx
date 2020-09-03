import React, { useRef, useEffect, useCallback, FormEvent } from 'react';
import Input from './components';
import Modal, { ModelHandles } from './components/Modal';

function App() {
  const nameInputRefs = useRef<HTMLInputElement>(null);
  const modalRef = useRef<ModelHandles>(null);
  const handleOpenModal = useCallback(()=>{
    modalRef.current?.handleOpenModal();
  }, []);
  const handleFocus = useCallback(()=>{
    nameInputRefs.current?.focus();
  }, []);
  const handleSubmit = useCallback((e:FormEvent)=>{
    e.preventDefault();
    alert(nameInputRefs.current?.value);
  },[]);
  return (
    <div className-="App">
      <form onSubmit={handleSubmit}>
        <Input name= "name" label= "Nome Completo"/>
        <input 
          type="text"
          placeholder="Digite seu nome"
          ref={nameInputRefs}
        />
        <button onClick={handleFocus}>Realizar Foco</button>
        <button type="submit">Enviar</button>
      </form>
      <button type="button" onClick={handleOpenModal}>Abrir Modal</button>
      <Modal ref = {modalRef}/>
    </div>
  );
}

export default App;

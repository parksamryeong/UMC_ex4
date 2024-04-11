import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Modal({isOpen, closeModal}) {
 
  return (
      <>
      <div className="container" style={{ display: isOpen ? "block" : "none"}}>
        <div className="modal-box">
          <h2>안녕하세요</h2>
          <p>모달 내용은 어쩌고 저쩌고..</p>
          <button onClick={closeModal}>닫기</button>
        </div>
      </div>
      </>
  );
}

export default Modal;

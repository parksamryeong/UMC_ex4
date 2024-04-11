import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Modal from './Modal'


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  
  return (
    <>
      <div>
      <h1>안녕하세요!</h1>
      <h3>내용내용내용</h3>
      <button onClick={openModal}>버튼 열기</button>
      <Modal isOpen={isModalOpen} closeModal={closeModal}/>
      </div>
     </>
  );
}

export default App;

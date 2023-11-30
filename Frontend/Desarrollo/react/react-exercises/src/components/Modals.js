import React from 'react';
import Modal from './Modal';
import { useModal } from '../hooks/useModal';
import { ContactForm } from './ContactForm';
import { SongSearch } from './SongSearch';


const Modals = () => {

    const [isOpenModal1,openModal1,closeModal1] = useModal(true);
    const [isOpenModal2,openModal2,closeModal2] = useModal(false);
    const [isOpenModal3,openModal3,closeModal3] = useModal(false);
    const [isOpenModal4,openModal4,closeModal4] = useModal(false);


  return (
    <div>
        <h2>Modals</h2>
        <button onClick={openModal1}>Modal 1</button>
        <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
            <h3>Modal 1</h3>
            <p>Hello, this is the content for modal</p>
            <img src="https://picsum.photos/300/300" alt="random"/>
        </Modal>
        <button onClick={openModal2}>Modal 2</button>
        <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
            <h3>Modal 2</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, illo praesentium! Sunt autem, vel sequi voluptates laborum accusantium aperiam illum?</p>
            <img src="https://picsum.photos/300/300" alt="random"/>
        </Modal>
        <button onClick={openModal3}>Modal 3</button>
        <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
            <ContactForm/>
        </Modal>
        <button onClick={openModal4}>Modal 4</button>
        <Modal isOpen={isOpenModal4} closeModal={closeModal4}>
            <SongSearch/>
        </Modal>
    </div>
  )
}

export default Modals
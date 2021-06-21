import React from 'react' ;
import Modal from 'react-modal' ; 
import './ModalComponent.scss';
function ModalComponent ({setModalIsOpen ,modalIsOpen}){
    return(
        <>
            <Modal isOpen = {modalIsOpen} >
                <div className='modalTop'>
                    <p>Sunday </p>
                    <button onClick={() => setModalIsOpen(false)} className='closeButton'> x </button>
                </div>
                <div className='weather'>
                    <div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default ModalComponent;
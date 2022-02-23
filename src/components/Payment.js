import React from 'react';
import Modal from 'react-modal/lib/components/Modal';
import tmp1 from '../assets/tmp1.jpg';


export default function Payment({ openModal, onModalChange, status }) {

    function handleStatus1() {
        status('Apartado');
    }

    function handleStatus2() {
        status('Pagado')
    }

    const data = {
        status: status
    }

    function closeModal() {
        onModalChange(false);
        status(null);
    }

    return (
        <Modal
            className='room-info'
            isOpen={openModal}
            onRequestClose={closeModal}
            contentLabel="Payment Modal"
        >
            <div style={{ display: 'flex' }}>
                <div>
                    <img src={tmp1} alt="payment" style={{ width: '100%', padding: '5px' }} />
                    <button onClick={handleStatus1}>Apartado</button>
                </div>
                <div>
                    <img src={tmp1} alt="payment" style={{ width: '100%', padding: '5px' }} />
                    <button onClick={handleStatus2}>Completo</button>
                </div>
            </div>
            <button onClick={closeModal}>Cancelar</button>
        </Modal>
    )
}

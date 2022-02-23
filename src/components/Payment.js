import React from 'react';
import Modal from 'react-modal/lib/components/Modal';
import tmp1 from '../assets/tmp1.jpg';


export default function Payment({ openModal, onModalChange, status, onStatusChange }) {

    function handleStatus1() {
        status('Apartado');
    }

    function handleStatus2() {
        status('Pagado')
    }

    function checkStatus() {
        if (status === 'Apartado') {
            return (
                <>
                    <div style={{ display: 'flex' }}>
                        <div>
                            <img src={tmp1} alt="payment" style={{ width: '100%', padding: '5px' }} />
                            <button onClick={handleStatus2}>Liquidar</button>
                        </div>
                    </div>
                    <button onClick={closeModal}>Cancelar</button>
                </>
            )
        } else {
            return (
                <>
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
                </>
            )
        }
    }

    const data = {
        status: status
    }

    function closeModal() {
        onModalChange(false);
        onStatusChange(null);
    }

    return (
        <Modal
            className='room-info'
            isOpen={openModal}
            onRequestClose={closeModal}
            contentLabel="Payment Modal"
        >
            {checkStatus()}
        </Modal>
    )
}

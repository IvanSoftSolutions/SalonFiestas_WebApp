import React, { useState } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'
import Calendar from 'react-calendar'

Modal.setAppElement('#root');

export default function Calendario() {
    const [type, setType] = useState('null');
    const [date, setDate] = useState();
    const [modalIsOpen, setIsOpen] = useState(false);

    const handleType = (e) => {
        setType(e.target.value);
    }

    const handleDate = (e) => {
        setDate(e)
    }

    const renderOtherInput = () => {
        if (type === 'other') {
            return (
                <>
                    <p>Por favor especifique:</p>
                    <input type="text" />
                </>
            )

        }
    }

    const data = {
        date: date,
        type: type
    }

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <Hero>
                <Banner title='Calendario'>
                    <Link to='/' className='btn-primary'>
                        Regresar a inicio
                    </Link>
                </Banner>
            </Hero>
            <div className="calendar-container">
                <Calendar onChange={e => handleDate(e)} />
            </div>
            <div className="btn-container">
                <label>Tipo de evento:</label>
                <select className='btn-secondary' name="type" id="type" defaultValue={'birthday'} onChange={e => handleType(e)}>
                    <option value="birthday">Cumpleaños</option>
                    <option value="anniversary">Aniversario</option>
                    <option value="familiar">Fiesta familiar</option>
                    <option value="graduation">Graduación</option>
                    <option value="communion">Primera comunión</option>
                    <option value="other">Otro</option>
                </select>
            </div>
            <div className='btn-container'>
                {renderOtherInput()}
            </div>
            <div className='btn-container'>
                <button className='btn-secondary' onClick={openModal}>Reservar</button>
                <Link to='/' className='btn-secondary'>
                    Cancelar
                </Link>
            </div>
            <Modal
                className='room-info'
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <h2>Hello</h2>
                <button onClick={closeModal}>close</button>
                <div>I am a modal</div>
                <form>
                    <input />
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                </form>
            </Modal>
        </>

    )
}

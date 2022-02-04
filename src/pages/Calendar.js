import React, { useState } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import Calendar from 'react-calendar';
import { differenceInCalendarDays } from 'date-fns';

import tmp1 from '../assets/tmp1.jpg';

Modal.setAppElement('#root');

export default function Calendario() {
    const [type, setType] = useState('null');
    const [date, setDate] = useState();
    const [status, setStatus] = useState('null')
    const [modalIsOpen, setIsOpen] = useState(false);
    // const dates = [new Date('Thu Feb 17 2022 00:00:00 GMT-0600'), new Date('Thu Feb 18 2022 00:00:00 GMT-0600'), new Date('Thu Feb 19 2022 00:00:00 GMT-0600')]

    // function isSameDay(a, b) {
    //     return differenceInCalendarDays(a, b) === 0;
    // }

    // function tileDisabled({ date, view }) {
    //     // Disable tiles in month view only
    //     if (view === 'month') {
    //         // Check if a date React-Calendar wants to check is on the list of disabled dates
    //         return dates.find(dDate => isSameDay(dDate, date));
    //     }
    // }

    const handleType = (e) => {
        setType(e.target.value);
    }

    const handleDate = (e) => {
        setDate(e)
    }

    function handleStatus1() {
        setStatus('Apartado');
    }

    function handleStatus2() {
        setStatus('Pagado')
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
        type: type,
        status: status,
    }

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
        setStatus(null);
    }

    console.log(status);

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
                <Calendar onChange={e => handleDate(e)} /*tileDisabled={tileDisabled}*/ />
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
        </>

    )
}

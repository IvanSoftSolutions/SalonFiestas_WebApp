import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Calendar from 'react-calendar'

export default function Calendario() {
    return (
        <>
            <Hero>
                <Banner title='Calendario'>
                    <Link to='/' className='btn-primary'>
                        Regresar a inicio
                    </Link>
                </Banner>
            </Hero>
            <div class="calendar-container">
                <Calendar />
            </div>
            <div class="btn-container">
                <label for="type">Tipo de fiesta:</label>
                <select className='btn-secondary' name="type" id="type">
                    <option value="birthday">Cumpleaños</option>
                    <option value="anniversary">Aniversario</option>
                    <option value="familiar">Fiesta familiar</option>
                    <option value="graduation">Graduacion</option>
                    <option value="communion">Primera comunión</option>
                    <option value="other">Otro</option>
                </select>
            </div>
            <div className='btn-container'>
                <button className='btn-secondary'>Reservar</button>
                <Link to='/' className='btn-secondary'>
                    Cancelar
                </Link>
            </div>
        </>

    )
}

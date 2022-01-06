import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'

export default function Calendar() {
    return (
        <Hero>
            <Banner title='Calendario'>
                <Link to='/' className='btn-primary'>
                    Regresar a inicio
                </Link>
            </Banner>
        </Hero>
    )
}

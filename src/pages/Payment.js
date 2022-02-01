import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';

export default function Payment() {
    return (
        <Hero>
            <Banner title='Confirmar reservacion' subtitle='wtf am i doing :c'>
                <button className="btn-primary">Pagar</button>
            </Banner>
        </Hero>
    )
}

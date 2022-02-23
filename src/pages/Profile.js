import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';

export default function Profile() {
    return (
        <Hero>
            <div>
                <Banner title='Nombre' subtitle='Email'>
                </Banner>
                <div className='btn-container'>
                    <ul>
                        <li>
                            status
                        </li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                    </ul>

                </div>
                <div className='btn-container'>
                    <button>Logout</button>
                </div>
            </div>

        </Hero>
    )
}

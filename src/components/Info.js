import React, { Component } from 'react'
import { FaMoneyBill } from 'react-icons/fa'
import { MdCleanHands } from 'react-icons/md'
import { GiPartyPopper } from 'react-icons/gi'
import Title from './Title'

export default class Info extends Component {
    state = {
        services: [
            {
                icon: <FaMoneyBill />,
                title: 'Precio',
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque delectus nesciunt voluptatem possimus ipsum, deleniti nobis reiciendis repudiandae molestias excepturi minus sapiente. Ipsum illum debitis officia tempora, ex illo labore.'
            },
            {
                icon: <MdCleanHands />,
                title: 'Limpieza',
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque delectus nesciunt voluptatem possimus ipsum, deleniti nobis reiciendis repudiandae molestias excepturi minus sapiente. Ipsum illum debitis officia tempora, ex illo labore.'
            },
            {
                icon: <GiPartyPopper />,
                title: 'Diversion',
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque delectus nesciunt voluptatem possimus ipsum, deleniti nobis reiciendis repudiandae molestias excepturi minus sapiente. Ipsum illum debitis officia tempora, ex illo labore.'
            }

        ]
    }
    render() {
        return (
            <section className='services'>
                <Title title='info' />
                <div class="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className='service'>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.desc}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}

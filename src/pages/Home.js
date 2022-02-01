import React from 'react'
// import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Info from '../components/Info';
// import tmp1 from '../assets/tmp1.jpg'
// import tmp2 from '../assets/tmp2.jpg'
// import tmp3 from '../assets/tmp3.jpg'

// const images = [
//     { original: tmp1 },
//     { original: tmp2 },
//     { original: tmp3 }
// ]

export default function Home() {
    return (
        <>
            {/* <Carousel className='single-room-images' showThumbs={false}>
                <div>
                    <img src={tmp1} />
                </div>
                <div>
                    <img src={tmp2} />
                </div>
                <div>
                    <img src={tmp3} />
                </div>
            </Carousel>  */}
            <Hero>
                <Banner title='Name or Logo' subtitle='Aparta con $500'>
                    <Link to='/calendar' className='btn-primary'>
                        Reservar
                    </Link>
                </Banner>
            </Hero>
            <Info />
        </>


    )
}

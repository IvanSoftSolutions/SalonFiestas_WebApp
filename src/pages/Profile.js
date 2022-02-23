import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { useNavigate } from 'react-router-dom';

export default function Profile({ onIsLoggedInChange }) {
    const navigate = useNavigate();

    function logout() {
        localStorage.setItem('isLoggedIn', false);
        onIsLoggedInChange(false);
        navigate('/');

    }

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
                    <button onClick={logout}>Logout</button>
                </div>
            </div>

        </Hero>
    )
}

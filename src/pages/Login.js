import React, { useState, useCallback, useEffect } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Modal from 'react-modal/lib/components/Modal';
import { useNavigate } from 'react-router-dom';

export default function Login({ onIsLoggedInChange }) {
    const [accOpen, setAccOpen] = useState(false);
    const [recOpen, setRecOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState(null);
    const [lastname, setLastName] = useState(null);
    const [phone, setPhone] = useState(null);
    const navigate = useNavigate();

    function openAcc() {
        setAccOpen(true);
    }

    function closeAcc() {
        setAccOpen(false);
    }

    function openRec() {
        setRecOpen(true);
    }

    function closeRec() {
        setRecOpen(false);
    }

    function handleSubmit() {
        const user = {
            email: email,
            password: password
        }
        if (user.email !== '' && user.password !== '') {
            onIsLoggedInChange(true);
            localStorage.setItem('isLoggedIn', true);
            navigate('/profile');
        }
        console.log(localStorage.getItem('isLoggedIn'));
    }

    function handleNewUser() {
        const userNew = {
            name: name,
            lastname: lastname,
            phone: phone,
            email: email,
            password: password
        }
        setAccOpen(false);
        console.log(userNew);
    }

    return (
        <>
            <Hero>
                <div>
                    <Banner title='Iniciar sesión'>
                    </Banner>
                    <div className="btn-container" style={{ flexDirection: 'column', paddingTop: '0px' }}>
                        <div>
                            <input type="text" placeholder='Email' className="btn-secondary" onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <input type="text" placeholder='Contraseña' className="btn-secondary" onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div>
                            <button className="btn-secondary" onClick={() => { handleSubmit() }}>Iniciar</button>
                        </div>
                        <div>
                            <button className='btn-secondary' onClick={openAcc}>Crear cuenta</button>
                            <button className='btn-secondary' onClick={openRec}>Recuperar Contraseña</button>
                        </div>
                    </div>
                </div>
            </Hero>
            <Modal
                className='room-info'
                isOpen={accOpen}
                onRequestClose={closeAcc}
                contentLabel="Account Modal"
            >
                <div style={{ marginTop: '5rem', }}>
                    <div>
                        <div>
                            <label htmlFor="name">Nombre <input type="text" onChange={e => setName(e.target.value)} /></label>
                        </div>
                        <div>
                            <label htmlFor="lname">Apellido <input type="text" onChange={e => setLastName(e.target.value)} /></label>
                        </div>
                        <div>
                            <label htmlFor="phone">Telefono <input type="text" onChange={e => setPhone(e.target.value)} /></label>
                        </div>
                        <div>
                            <label htmlFor="email">Email <input type="text" onChange={e => setEmail(e.target.value)} /></label>
                        </div>
                        <div>
                            <label htmlFor="password">Contraseña <input type="text" onChange={e => setPassword(e.target.value)} /></label>
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={handleNewUser}>Crear</button>
                    <button onClick={closeAcc}>Cancelar</button>
                </div>
                <div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae provident eligendi repudiandae! Harum quisquam totam tempore quas neque, obcaecati soluta, rerum incidunt aperiam magnam perspiciatis rem amet exercitationem quam reprehenderit?</p>
                </div>
            </Modal>
            <Modal
                className='room-info'
                isOpen={recOpen}
                onRequestClose={closeRec}
                contentLabel="Recovery Modal"
            >
                <div style={{ marginTop: '5rem' }}>
                    <div>
                        <div>
                            <label htmlFor="email">Email <input type="text" /></label>
                        </div>
                    </div>
                </div>
                <div>
                    <button >Recuperar</button>
                    <button onClick={closeRec}>Cancelar</button>
                </div>
            </Modal>
        </>
    )
}

import React, { useState } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Modal from 'react-modal/lib/components/Modal';

export default function Login() {
    const [accOpen, setAccOpen] = useState(false);
    const [recOpen, setRecOpen] = useState(false);

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

    return (
        <>
            <Hero>
                <div>
                    <Banner title='Iniciar sesión'>
                    </Banner>
                    <div className="btn-container" style={{ flexDirection: 'column', paddingTop: '0px' }}>
                        <div>
                            <input type="text" placeholder='Email' className="btn-secondary" />
                        </div>
                        <div>
                            <input type="text" placeholder='Contraseña' className="btn-secondary" />
                        </div>
                        <div>
                            <button className="btn-secondary">Iniciar</button>
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
                            <label htmlFor="name">Nombre <input type="text" /></label>
                        </div>
                        <div>
                            <label htmlFor="lname">Apellido <input type="text" /></label>
                        </div>
                        <div>
                            <label htmlFor="phone">Telefono <input type="text" /></label>
                        </div>
                        <div>
                            <label htmlFor="email">Email <input type="text" /></label>
                        </div>
                        <div>
                            <label htmlFor="password">Contraseña <input type="text" /></label>
                        </div>
                    </div>
                </div>
                <div>
                    <button >Crear</button>
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

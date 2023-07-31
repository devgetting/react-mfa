import { TextField } from 'components/TextField';
import './signup.css';
import React from 'react';
import { Button } from 'components/Button';
import { SignUpController } from 'controllers/SignUpController';
import { observer } from '@devgetting/react-init';
import { useNavigate } from 'react-router-dom';

const controller = new SignUpController();

export default observer(controller, function() {
    const navigate = useNavigate();

    return (
        <main>
            <div className="d-flex justify-content-between">
                <div className="sign-up-left-panel">
                    <div className="d-flex align-items-center justify-content-center form-content">
                        <div className="col-md-4">
                            <div className="row mb-4">
                                <div className="col-12 mb-3">
                                    <h1>Sign Up</h1>
                                </div>
                                <div className="col-12">
                                    <p>Registrate con nosotros</p>
                                </div>
                            </div>

                            <form method="POST">
                                <div className="row">
                                    <div className="col-12">
                                        <label htmlFor="username" className="mb-2 d-block">Username</label>
                                        <TextField placeholder="Ingresa tu usuario" id='username' />
                                    </div>
                                    <div className="col-12 mb-2">
                                        <label htmlFor="password" className="mb-2 d-block">Password</label>
                                        <TextField placeholder="Ingresa tu contraseña" type="password" id='password' />
                                    </div>
                                    <div className="col-12 mb-2">
                                        <label htmlFor="confirm" className="mb-2 d-block">Confirm</label>
                                        <TextField placeholder="Confirmar contraseña" type="password" id='confirm' />
                                    </div>
                                    <div className="col-12 mb-3">
                                        <Button type="submit">Registrarse</Button>
                                    </div>

                                    <div className="col-12 text-center">
                                        <small className="d-block">¿Ya tienes cuenta? - <strong className="link" onClick={() => navigate('/login')}>inicia sesión aquí</strong></small>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="sign-up-right-panel d-flex justify-content-center align-items-center">
                    <img src="https://assets.api.uizard.io/api/cdn/stream/fe7dba6b-6777-44a9-bf51-b24c1a6e6e53.png" alt="" />
                    <h3>Autenticación MFA</h3>
                    <p>Realizado con Django y Websockets</p>
                </div>
                
            </div>
        </main>
    )
})
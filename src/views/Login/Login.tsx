import { TextField } from 'components/TextField';
import './login.css';
import React from 'react';
import { Button } from 'components/Button';
import { LoginController } from 'controllers/LoginController';
import { observer } from '@devgetting/react-init';
import { useNavigate } from 'react-router-dom';

const controller = new LoginController();

export default observer(controller, function() {
    const navigate = useNavigate();

    return (
        <main>
            <div className="d-flex justify-content-between">
                <div className="left-panel d-flex justify-content-center align-items-center">
                    <img src="https://assets.api.uizard.io/api/cdn/stream/fe7dba6b-6777-44a9-bf51-b24c1a6e6e53.png" alt="" />
                    <h3>Autenticación MFA</h3>
                    <p>Realizado con Django y Websockets</p>
                </div>
                <div className="right-panel">
                    <div className="d-flex align-items-center justify-content-center form-content">
                        <div className="col-md-4">
                            <div className="row mb-4">
                                <div className="col-12 mb-3">
                                    <h1>Log In</h1>
                                </div>
                                <div className="col-12">
                                    <p>Autenticate con nosotros</p>
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
                                    <div className="col-12 mb-3">
                                        <Button type="submit">Iniciar Sesion</Button>
                                    </div>
                                    <div className="col-12 text-center">
                                        <small className="d-block">¿No tienes cuenta? - <strong className="link" onClick={() => navigate('/sign-up')}>Registrate aqui</strong></small>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}) 
import './header.css';
import React from "react";
import { observer } from "@devgetting/react-init";
import { HeaderController } from "controllers/HeaderController";
import { BellIcon } from "icons";
import { Dropdown } from 'components/Dropdown';
import { useNavigate } from 'react-router-dom';


export const Header = observer(HeaderController, ({ controller }) => {
const navigate = useNavigate();

    const actions = {
        handleShowNotifications: () => {
            controller.setShowNotification(!controller.showNotification);
        },
        handleGoToNotification: (e: React.MouseEvent<HTMLLIElement>) => {
            e.stopPropagation();

            controller.goToNotification('');
            navigate('/notification')
        }
    }

    const { handleShowNotifications, handleGoToNotification } = actions;

    return (
        <>
            <div className="top-banner">Bienvenidos a nuestro dashboard en tiempo real</div>
            <header>
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <h3>
                            <span className="icon">W</span>
                            Websocket Dashboard
                        </h3>
                        <ul className="d-flex">
                            <li 
                                className="notif-bell d-flex align-items-center justify-content-center"
                                onClick={handleShowNotifications}
                            >
                                <BellIcon width={15} />
                                { controller.serverNotifications.length > 0 && <span className="warning" /> }
                                { controller.showNotification && (<Dropdown>
                                    <li onClick={handleGoToNotification}>
                                        <h4>Welcome back</h4>
                                        <small>un nuevo dispositivo</small>
                                    </li>

                                    <li onClick={handleGoToNotification}>
                                        <h4>Welcome back</h4>
                                        <small>un nuevo dispositivo</small>
                                    </li>
                                </Dropdown>) }
                            </li>
                            <li className="d-flex user-icon justify-content-center align-items-center">
                                <span>U</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
});
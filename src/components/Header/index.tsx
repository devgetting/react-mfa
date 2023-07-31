import { observer } from '@devgetting/react-init';
import './header.css';
import { HeaderController } from "controllers/HeaderController";
import { BellIcon } from "icons";
import React from "react";
import { Dropdown } from 'components/Dropdown';

const controller = new HeaderController();

console.log(controller);

const Component = () => {
    const actions = {
        handleShowNotifications: () => {
            controller.setShowNotification(!controller.showNotification);
        },
        handleGoToNotification: (e: React.MouseEvent<HTMLLIElement>) => {
            e.stopPropagation();

            controller.goToNotification('');
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
};

export const Header = observer(controller, Component);
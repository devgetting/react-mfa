import './header.css';
import React from "react";
import { observer } from "@devgetting/react-init";
import { HeaderController } from "controllers/HeaderController";
import { BellIcon } from "icons";
import { Dropdown } from 'components/Dropdown';
import { useNavigate } from 'react-router-dom';
import { Card } from 'components/Card';
import { Button } from 'components/Button';


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

    const footerCard = (
        <div className="row">
            <div className="col-md-6">
                <Button>Permitir</Button>
            </div>
            <div className="col-md-6">
                <Button buttonType="outline-dark">Bloquear</Button>
            </div>
        </div>
    ) 

    const notificationCard = controller.notifications.map((notification, index) => {
        const header = <h3>{ notification.title }</h3>
        const body = <p>{ notification.body }</p>

        return (
            <li key={index}>
                <Card 
                    cardType="light"
                    header={header}
                    footer={footerCard}
                    body={body} />
            </li>
        )
    });

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
                                { controller.notifications.length > 0 && <span className="warning" /> }
                                { controller.showNotification && (<Dropdown>
                                    { notificationCard }
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
import { observer } from '@devgetting/react-init';
import React from 'react';
import { Card } from 'components/Card';
import { Toast } from 'components/Toast';
import { Button } from 'components/Button';
import { DashboardContentController } from 'controllers/DashboardContentController';


const controller = new DashboardContentController();

const Component = () => {
    const actions = {
        addNotification: () => controller.addNotification()
    }

    const { addNotification } = actions;

    const bodyCard = (
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, explicabo?</p>
    );

    const headerCard = (
        <h3>New feed</h3>
    );

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
            <div className="mb-3" key={index}>
                <Card 
                    cardType="light"
                    header={header}
                    footer={footerCard}
                    body={body} />
            </div>
        )
    });

    return (
        <>
            <section className="dashboard-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-3">
                            <Card 
                                cardType="light"
                                header={headerCard}
                                body={bodyCard}
                            />
                        </div>

                        <div className="col-lg-3 col-md-6 mb-3">
                            <Card 
                                cardType="light"
                                header={headerCard}
                                body={bodyCard}
                            />
                        </div>

                        <div className="col-lg-3 col-md-6 mb-3">
                            <Card 
                                cardType="light"
                                header={headerCard}
                                body={bodyCard}
                            />
                        </div>

                        <div className="col-lg-3 col-md-6 mb-3">
                            <Card 
                                cardType="light"
                                header={headerCard}
                                body={bodyCard}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Button onClick={addNotification}>Add notification</Button>
                    </div>
                </div>
            </div>
            <Toast>{ notificationCard }</Toast>
        </>
    )
}

export const DashboardContent = observer(controller, Component);
import { observer } from '@devgetting/react-init';
import { Button } from 'components/Button';
import { Card } from 'components/Card';
import { NotificationController } from 'controllers/NotificationController';
import React from 'react';

export default observer(NotificationController, () => {
    const header = <h3>Nueva Notificación</h3>
    const renderBody = () => {
        const MESSAGE = 'El usuario {{ usuario }} está intentando iniciar sesión';

        return (
            <p>{ MESSAGE }</p>
        )
    };

    const footer = (
        <div className="row">
            <div className="col-md-6"><Button>Confiar</Button></div>
            <div className="col-md-6"><Button buttonType="outline-dark">No confiar</Button></div>
        </div>
    )

    const body = renderBody();

    return (
        <main>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-md-6">
                        <Card 
                            footer={footer}
                            cardType="light"
                            header={header}
                            body={body}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
})
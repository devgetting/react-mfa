import { observer } from '@devgetting/react-init';
import { Button } from 'components/Button';
import { Card } from 'components/Card';
import { TextField } from 'components/TextField';
import { RegisterDeviceController } from 'controllers/RegisterDeviceController';
import React from 'react';

export default observer(RegisterDeviceController, function({ controller }) {
    const actions = {
        onToggleRegisterDeviceCard: (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            return controller.onToggleRegisterDeviceCard();
        },
        onChangeDeviceName: (e: React.ChangeEvent<HTMLInputElement>) => {
            controller.onChangeDeviceName(e.target.value);
        },
        onNotConfirm: (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            controller.onNotConfirm();
        },
        onConfirm: (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            controller.onConfirm();
        }
    }

    const { 
        onToggleRegisterDeviceCard, 
        onChangeDeviceName, 
        onNotConfirm,
        onConfirm
    } = actions;

    const cardHeader = (
        <h3>Unrecognized Device</h3>
    )

    const cardBody = (
        <p>Esta es la primera vez que inicia sesión con este dispositivo, ¿desea confiar en el?</p>
    )

    const cardFooter = (
        <div className="row">
            <div className="col-6">
                <Button 
                    buttonType="outline-light"
                    onClick={onToggleRegisterDeviceCard}
                >Confiar</Button>
            </div>
            <div className="col-6">
                <Button 
                    buttonType="outline-light"
                    onClick={onNotConfirm}
                >
                    No confiar
                </Button>
            </div>
        </div>
    )

    const cardHeaderDevice = (
        <h3>Register Device</h3>
    );

    const cardBodyDevice = (
        <div className="row">
            <div className="col-12">
                <TextField 
                    inputType="outline-light"
                    placeholder="Ingrese un nombre a su dispositivo"  
                    ref={controller.deviceName}
                    onChange={onChangeDeviceName}
                />
            </div>
        </div>
    )

    const cardFooterDevice = (
        <div className="row">
            <div className="col-12 mb-3">
                <Button 
                    buttonType="outline-light"
                    onClick={onConfirm}
                >Guardar dispositivo</Button>
            </div>
            <div className="col-12">
                <Button 
                    buttonType="outline-light"
                    onClick={onToggleRegisterDeviceCard}
                >Cancelar</Button>
            </div>
        </div>
    )

    const unrecognizedCard = !controller.showRegisterDeviceCard && (
        <div className="row justify-content-center mb-4">
            <div className="col-md-6">
                <Card 
                    header={cardHeader}
                    body={cardBody}
                    footer={cardFooter}
                />
            </div>
        </div>
    )

    const saveDeviceCard = controller.showRegisterDeviceCard && (
        <div className="row justify-content-center">
            <div className="col-md-6">
                <Card
                    header={cardHeaderDevice}
                    body={cardBodyDevice}
                    footer={cardFooterDevice}
                />
            </div>
        </div>
    )

    return (
        <main>
            <div className="container mt-5">
                { unrecognizedCard }        
                { saveDeviceCard }
            </div>
        </main>
    )
})
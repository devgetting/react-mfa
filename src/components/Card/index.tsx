import './card.css';
import React, { ReactNode } from "react"

interface Props {
    header?: ReactNode;
    body: ReactNode;
    footer?: ReactNode;
    cardType?: 'default' | 'light'
}

export const Card: React.FC<Props> = ({ body, cardType = 'default', footer, header }) => {
    const headerComponent = header && (
        <div className="card-header">
            { header }
        </div>
    )

    const bodyComponent = (
        <div className="card-body">
            { body }
        </div>
    )

    const footerComponent = footer && (
        <div className="card-footer">
            { footer }
        </div>
    )

    const classNames = [
        'card',
        cardType
    ].join(' ');

    return (
        <div className={classNames}>
            { headerComponent }
            { bodyComponent }
            { footerComponent }
        </div>
    )
}
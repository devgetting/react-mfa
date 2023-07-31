import React from 'react';

interface Props {
    width?: number;
}

export default ({ width }: Props) => {
    const widthSize = width || 82;
    const heightSize = (widthSize * 95) / 82;

    return (
        <svg width={`${widthSize}`} height={`${heightSize}`} viewBox="0 0 82 95" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 39C7 20.2223 22.2223 5 41 5V5C59.7777 5 75 20.2223 75 39V73H7V39Z" fill="#141414"/>
            <rect y="75" width="82" height="10" fill="#141414"/>
            <path d="M56 80C56 81.9698 55.612 83.9204 54.8582 85.7403C54.1044 87.5601 52.9995 89.2137 51.6066 90.6066C50.2137 91.9995 48.5601 93.1044 46.7403 93.8582C44.9204 94.612 42.9698 95 41 95C39.0302 95 37.0796 94.612 35.2597 93.8582C33.4399 93.1044 31.7863 91.9995 30.3934 90.6066C29.0005 89.2137 27.8956 87.5601 27.1418 85.7403C26.388 83.9204 26 81.9698 26 80L41 80H56Z" fill="#141414"/>
            <circle cx="41" cy="7" r="7" fill="#141414"/>
        </svg>
    )
}
import React, { useState } from 'react';
// import "./Link.css"

const STATUS = {
    HOVERED: 'hovered',
    NORMAL: 'normal',
};

const Link = ({ page, children }) => {
    const [status, setStatus] = useState(STATUS.NORMAL);

    const onMouseEnter = () => {
        setStatus(STATUS.HOVERED);
        console.log(STATUS.HOVERED);
    };

    const onMouseLeave = () => {
        setStatus(STATUS.NORMAL);
        console.log(STATUS.NORMAL);
    };

    return (
        <a
            className={status}
            href={page || '#'}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </a>
    );
};

export default Link;
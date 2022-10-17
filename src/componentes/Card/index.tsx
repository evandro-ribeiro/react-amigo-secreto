import React from "react";
import style from './Card.module.scss';

const Card: React.FC = ({ children }) => {
    return (
        <div className={style.card}>
            {children}
        </div>
    )
}

export default Card
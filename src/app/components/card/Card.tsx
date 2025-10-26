import React from 'react';
import Styles from './Card.module.css';

interface CardProps {
    image: string;
    title: string;
    description: string;
    price: number;
    inv: { [key: string]: number };
}

const Card: React.FC<CardProps> = ({ image, title, description, price }) => {
    return (
        <div className={Styles.card}>
            <img src={image} alt={title} className={Styles.Image} />
            <h3 className={Styles.Title}>{title}</h3>
            <p className={Styles.Description}>{description}</p>
            <p className={Styles.Price}>${price.toFixed(2)}</p>
        </div>

    );
};

export default Card;
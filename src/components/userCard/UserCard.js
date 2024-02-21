import React from 'react';
import './UserCard.css'

const UserCard = ({cardInfo}) => {
    console.log(cardInfo, "data")
    return (
        <div className="cardUserContent">
            <img  src={cardInfo.avatar} alt={cardInfo.first_name} />
            <h1>{ cardInfo.last_name }</h1>
            <p>Email: { cardInfo.email }</p>
        </div>
    );
};

export default UserCard;
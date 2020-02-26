import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png';

export default function TextContainer({users}) {
    return (
        <div className="textContainer">
            {
                users
                ? (
                    <div>
                        <h1>People currentlt chatting:</h1>
                        <div className="activeContainer">
                            <h2>
                                {users.map(({name}) => (
                                    <div key={name} className="activeItem">
                                        {name}
                                        <img alt="Online" src={onlineIcon} />
                                        </div>
                                ))}
                            </h2>
                        </div>
                    </div>
                )
                : null
            }
        </div>
    )
}

import React, { useState } from 'react'

export default function Player({ intialName, symbol, isActive }) {
    const [playerName, setPlayerName] = useState(intialName)
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = (e) => {
        setIsEditing((editing) => !editing);
    }

    const handleChange = (e) => {
        console.log(e);
        setPlayerName(e.target.value);
    }

    let editablePlayerName = <span className='player-name'>{playerName}</span>;
    // let btnCaption = "Edit";
    if (isEditing) {
        editablePlayerName = <input type="text" required
            defaultValue={playerName} onChange={handleChange} />;
        // btnCaption = "Save";
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
                <button onClick={handleEditClick}>
                    {isEditing ? 'Save' : 'Edit'}
                </button>
            </span>
        </li>
    )
}

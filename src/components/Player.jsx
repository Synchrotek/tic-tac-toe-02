import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName)

    const handleEditClick = () => {
        setIsEditing(editing => !editing);
    }
    const handleChange = (event) => {
        setPlayerName(event.target.value);
    }

    let editableplayerName = <span className="player-name">{playerName}</span>;
    if (isEditing) {
        editableplayerName = <input type="text" required
            value={playerName} onChange={handleChange}
        />
    }

    return (<li className={isActive ? 'active' : undefined}>
        <span className="player">
            {editableplayerName}
            <span className="player-symbol">{symbol}</span>

        </span>
        <button onClick={handleEditClick}>
            {isEditing ? "Save" : "Edit"}
        </button>
    </li >
    );
}
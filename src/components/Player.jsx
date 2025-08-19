import { useState } from 'react';

const Player = ({ initialName, symbol, isActive }) => {
  let [playerName, setPlayerName] = useState(initialName);
  let [isEditing, setIsEditing] = useState(false);

  let handleEditClick = () => {
    // setIsEditing(!isEditing); // wrong
    setIsEditing((previousState) => !previousState);
  };

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let buttonCaption = 'Edit';

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handlePlayerNameChange} />
    );
    buttonCaption = 'Save';
  }

  function handlePlayerNameChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? 'active' : ''}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol"> {symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonCaption}</button>
    </li>
  );
};

export default Player;

// ❌ Wrong way (can cause bugs):
// React schedules state updates, not instant updates.
// Multiple calls like setIsEditing(!isEditing) in the same render
// will use the same old state value → unexpected results.
// setIsEditing(!isEditing);

// ✅ Correct way (best practice):
// Use functional updater form when new state depends on old state.
// React guarantees `prevState` will always be the latest value.
// This avoids stale state issues when multiple updates are scheduled.
// setIsEditing((prevEditing) => !prevEditing);

// 👉 Rule to remember:
// When updating state based on its previous value,
// always use the function updater form.

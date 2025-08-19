const Log = ({ turns }) => {
  return (
    <ol id="log">
      {turns.map((turn, idx) => (
        <li key={`${turn.square.row}-${turn.square.col}-${idx}`}>
          {turn.player} selected {turn.square.row}, {turn.square.col}
        </li>
      ))}
    </ol>
  );
};

export default Log;

import React from "react";
import gameLogo from "../../public/game-logo.png";

const Header = () => {
  return (
    <header>
      <img src={gameLogo} alt="Game Logo" />
      <h1>React Tic-Tac-Toe</h1>
    </header>
  );
};

export default Header;

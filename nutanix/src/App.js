import React from 'react';
import './App.css';
import GameBoard from './GameBoard';

class App extends React.Component {
  state = {
    height: 7,
    width: 7,
    mines: 10,
  };

  render() {
    const { height, width, mines } = this.state;
    return (
      <div className="game">
        <GameBoard height={height} width={width} mines={mines} />
      </div>
    );
  }
}
export default App;

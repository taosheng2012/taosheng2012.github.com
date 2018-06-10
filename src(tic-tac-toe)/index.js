import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// ========================================
function calcWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let line of lines) {
    const [a, b, c] = line;

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

// ========================================
class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={this.props.handleClick}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        handleClick={() => this.props.handleClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [Array(9).fill(null)],
      step: 0,
    };
  }

  handleClick(i) {
    let squares_cur_copy=this.state.history[this.state.step].slice();

    if (calcWinner(squares_cur_copy) || squares_cur_copy[i]) {
      return;
    }

    let step_copy = this.state.step;
    step_copy++;

    squares_cur_copy[i] = step_copy % 2 === 1 ? "X" : "O";

    let history_copy = this.state.history.slice();
    history_copy[step_copy]=squares_cur_copy;

    this.setState({
      history: history_copy,
      step: step_copy
    });
  }

  moveTo(i) {
    this.setState({ step: i });
  }

  render() {
    const squares_cur=this.state.history[this.state.step];

    const winner = calcWinner(squares_cur);
    const status = winner
      ? "Winner: " + winner
      : "Next Player: " + (this.state.step % 2 === 0 ? "X" : "O");

    let moves = [];
    for (let i of Array(this.state.step+1).keys()) {
      const btn_txt = i ? "Go Back to Step # " + i : "Go to Start";
      moves.push(
        <li key={i}>
          <button onClick={() => this.moveTo(i)}>{btn_txt}</button>
        </li>
      );
    }

    return (
      <div className="game">
        <h2 className="game-heading">A Tic-Tac-Toe Game</h2>
        <div className="game-section">
          <div className="game-board">
            <Board
              squares={squares_cur}
              handleClick={i => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <p>{status}</p>
            <ol>{moves}</ol>
          </div>
        </div>
      </div>
    );
  }
}

// ========================================
ReactDOM.render(<Game />, document.getElementById("root"));

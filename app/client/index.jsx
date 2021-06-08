// Third-party imports
import React from 'react';
import ReactDOM from 'react-dom';

// Component
class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">EMPTY</div>
                <div className="game-info">
                    <div>STATUS</div>
                    <ol>TODO</ol>
                </div>
            </div>
        );
    }
}

// Render
ReactDOM.render(<Game />, document.getElementById('root'));

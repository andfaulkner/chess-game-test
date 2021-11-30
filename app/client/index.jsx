// Third-party imports
import React from 'react';
import ReactDOM from 'react-dom';
import {BoardContainer} from './components/board/board-container';

/**
 * Actual application - root component
 */
class Game extends React.Component {
    /**
     * Whatever is returned by this method, gets rendered in the HTML page.
     */
    render() {
        return <BoardContainer />;
    }
}

// Render
ReactDOM.render(<Game />, document.getElementById('root'));

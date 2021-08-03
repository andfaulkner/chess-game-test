// Third-party imports
import React from 'react';
import {BoardView} from './board-view';
import {inject} from 'mobx-react';

/**
 * Logic for component containing the checkers board.
 * (React class component).
 */
export class BoardContainer extends React.Component {
    state = {
        /**
         * 0 = nothing
         * 1 = black
         * 2 = white
         *
         * @type {(0 | 1 | 2)[][]}
         * @memberof BoardContainer
         */
        piecePositions: [
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [2, 0, 2, 0, 2, 0, 2, 0],
            [0, 2, 0, 2, 0, 2, 0, 2],
            [2, 0, 2, 0, 2, 0, 2, 0],
        ],
    };

    /**
     * @param {number[][]} newPiecePositions New layout of board
     */
    updatePiecePositions = newPiecePositions => {
        this.setState({piecePositions: newPiecePositions});
    };

    /**
     * Temporary method - swaps black and white on board.
     *
     * @memberof BoardContainer
     */
    swapSides = () => {
        this.updatePiecePositions([
            [0, 2, 0, 2, 0, 2, 0, 2],
            [2, 0, 2, 0, 2, 0, 2, 0],
            [0, 2, 0, 2, 0, 2, 0, 2],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
        ]);
    };

    /**
     * Define behaviour on clicking cell.
     *
     * @param {number} row Which row was clicked (0-indexed)
     * @param {number} col Which column was clicked (0-indexed)
     */
    clickCell = (row, col) => {
        console.log('ran clickCell with row:', row, 'col:', col);
    };

    render() {
        return (
            <BoardView
                headerName={`Checkers board`}
                piecePositions={this.state.piecePositions}
                swapSides={this.swapSides}
                clickCell={this.clickCell}
            >
                HEY!
            </BoardView>
        );
    }
}

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
        /**
         * @type {'red'|'blue'}
         */
        currentPlayer: 'red',

        /**
         * Contents of from and to boxes
         */
        boxContents: {
            from: {
                /** Value of first box (x-coordinate) */
                x: 5,
                /** Value of second box (y-coordinate) */
                y: 0,
            },
            to: {
                /** Value of first box (x-coordinate) */
                x: 4,
                /** Value of second box (y-coordinate) */
                y: 1,
            },   
        }
    };

    /**
     * Change the content of one of the input coordinate boxes.
     * @param {'from'|'to'} boxType Which of the box types the change occurred in.
     * @param {'x'|'y'} coordinate Which of the 2 coordinate boxes has been changed.
     * @param {number} value Content of the changed box.
     */
    changeCoordinateBoxContents = (boxType, coordinate, value) => {
        if (coordinate === 'x') {
            this.setState({
                boxContents: {
                    [boxType]: {x: value, y: this.state[boxType].y}
                }
            });
        } else {
            this.setState({
                boxContents: {
                    [boxType]: {x: this.state[boxType].x, y: value}
                }
            });
        }
        console.log('changeValue :: this.state:', this.state);
    };

    /**
     * Sets complete new board layout from mutated board.
     *
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
        console.log(this.state.piecePositions[row][col]);
    };

    /**
     * Submits a move.
     *
     * @param {{from: {x: number, y: number}, to: {x: number, y: number}}} props.moveValues
     *        Object containing coordinates required to move a piece.
     */
    submitMove = (moveValues) => {
        console.log("submitMove :: moveValues:", moveValues);

        const isRed = this.state.currentPlayer === 'red';
        const isBlue = !isRed;

        const fromX = moveValues.from.x;
        const fromY = moveValues.from.y;
        const toX = moveValues.to.x;
        const toY = moveValues.to.y;

        const piecePositions = this.state.piecePositions;

        // Correct up to here

        // Selection failure conditions

        // Get content of selected "from" location (i.e. whether the piece is 1 or 2 i.e. red or blue)
        // NOTE: change when adding kings
        const selCellContent = piecePositions[fromX][fromY];
        console.log("selCellContent:", selCellContent);

        // If true, a valid piece is selected based on the current player and cell content
        const isValidPieceSelected = isRed ? selCellContent === 2 : selCellContent === 1;
        console.log("isValidPieceSelected:", isValidPieceSelected);

        // Define allowed move position here (basic - with basic piece).
        /** @type [number, number][] newCoordsAllowed */
        let newCoordsAllowed = [];
        if (isRed) {
            newCoordsAllowed = [[fromX - 1, fromY - 1], [fromX - 1, fromY + 1]].filter(coord => {
                if (coord[0] < 0 || coord[0] >= 8) return false;
                if (coord[1] < 0 || coord[1] >= 8) return false;
                return true;
            })
        } else if (isBlue) {
            // TODO Confirm this is correct
            newCoordsAllowed = [[fromX + 1, fromY + 1], [fromX + 1, fromY - 1]].filter(coord => {
                if (coord[0] < 0 || coord[0] >= 8) return false;
                if (coord[1] < 0 || coord[1] >= 8) return false;
                return true;
            })
        }

        console.log("newCoordsAllowed:", newCoordsAllowed);

        // If the requested location for the piece to move to is allowed by the rules of 
        // checkers.
        const isMoveValid = newCoordsAllowed.some(coord => {
            if (coord[0] === toX && coord[1] === toY) return true;
        });
        console.log("isMoveValid:", isMoveValid);

        // Check if the requested move location is allowed:
        //    1. ! Check that there's a piece present of the right colour. [isValidPieceSelected]
        //    2. ! Check the "to" location is valid. [isMoveValid]
        //
        // If allowed:
        //      ! Update coordinates accordingly
        // If not allowed:
        //      Reject move (TODO figure out details after)

        // Check if allowed, erase original piece, then draw at new location
        if (isValidPieceSelected && isMoveValid) {
            piecePositions[fromX][fromY] = 0;
            piecePositions[toX][toY] = isRed ? 2 : 1;
        }
        
        // Invalid move handling
        else {
            // Make this reason specific
            if (!isValidPieceSelected) {
                alert(`You must select a cell containing one of your own pieces`);
            }
            else if (!isMoveValid) {
                // [0, 1], [3, 4], [5, 2]
                const allowedMoves = newCoordsAllowed.reduce((acc, coord, idx) => {
                    acc = acc +
                        ((idx !== 0) ? ', ' : '') +
                        `(${coord[0] + 1},${coord[1] + 1})`;
                    return acc;
                }, ``);
                alert(`Invalid move. Available options: ${allowedMoves}`);
            }
            return;
        }
        
        // If the rest of submitMove is successful, swap player
        // 
        this.setState({
            currentPlayer: isRed ? 'blue' : 'red',
            piecePositions: piecePositions,
        });
    };

    render() {
        return (
            <BoardView
                headerName={`Checkers board`}
                piecePositions={this.state.piecePositions}
                swapSides={this.swapSides}
                clickCell={this.clickCell}
                submitMove={this.submitMove}
                currentPlayer={this.state.currentPlayer}
                from={this.state.boxContents.from}
                to={this.state.boxContents.to}
                changeCoordinateBoxContents={this.changeCoordinateBoxContents}
            />
        );
    }
}

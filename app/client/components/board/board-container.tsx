/*------------------------------------- THIRD-PARTY IMPORTS --------------------------------------*/
import React from 'react';
import {inject, observer} from 'mobx-react';

/*--------------------------------------- PROJECT MODULES ----------------------------------------*/
import {BoardView} from './board-view';
import {StoreProps} from '../../store/root-store';

/*--------------------------------------- TYPE DEFINITIONS ---------------------------------------*/
/**
 * Coordinate on the checkers board.
 * Represents a "board position," e.g. for:
 * -  a piece
 * -  a possible location a piece is allowed to move to
 * -  etc.
 */
type Coordinate = [number, number];

type PlayerColour = 'red' | 'blue';

interface BoardContainerProps extends StoreProps {}

interface BoardSharedProps {}
interface BoardContainerProps extends BoardSharedProps {}

/**
 * Typings for board UI component (BoardView).
 */
export interface BoardViewProps extends OmitReactProperties<BoardContainer>, BoardSharedProps {
    headerName: string;
    currentPlayer: PlayerColour;
    from: {x: number; y: number};
    to: {x: number; y: number};
    piecePositions: number[][];
}

export const someRandomShit = 'Eric eats poop';


/*-------------------------------------------- EXPORT --------------------------------------------*/
/**
 * Logic for component containing the checkers board
 * (React class component).
 */
@inject('appState')
@observer
export class BoardContainer extends React.Component<BoardContainerProps> {
    /*------------------------------------------ STATE -------------------------------------------*/
    /**
     * TEMP [CONVERT TO MOBX]
     * Store the current state of the board.
     */
    public state = {
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
        },
    };

    /*---------------------------------------- SWAP TEAMS ----------------------------------------*/
    /**
     * Sets complete new board layout from mutated board.
     *
     * @param {number[][]} newPiecePositions New layout of board
     */
    private updatePiecePositions = newPiecePositions => {
        this.setState({piecePositions: newPiecePositions});
    };

    /**
     * Temporary method - swaps red and blue on board.
     * Only works once.
     * Purpose: test that the board responds at
     *
     * @memberof BoardContainer
     */
    public swapSides = () => {
        this.props.appState.setCurrentPlayer('blue');
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
     * Update the board with new board layout [piecePositions], and switch
     * currently active player.
     */
    private endTurn = (piecePositions: number[][]) => {
        const {appState} = this.props;
        appState.setCurrentPlayer(appState.currentPlayer === 'red' ? 'blue' : 'red');

        // If the rest of submitMove is successful, swap player (i.e. end player's turn).
        this.setState({
            piecePositions,
        });
    };
    /*-------------------------------------- EVENT HANDLERS --------------------------------------*/
    /**
     * Change the content of one of the input coordinate boxes.
     * @param {'from'|'to'} boxType Which of the box types the change occurred in.
     * @param {'x'|'y'} coordinate Which of the 2 coordinate boxes has been changed.
     * @param {number} value Content of the changed box.
     */
    public changeCoordinateBoxContents = (
        boxType: 'from' | 'to',
        coordinate: 'x' | 'y',
        value: number
    ) => {
        // x-coordinate handling
        if (coordinate === 'x') {
            if (boxType === 'from') {
                this.setState({
                    boxContents: {
                        from: {x: value, y: this.state.boxContents.from.y},
                        to: {x: this.state.boxContents.to.x, y: this.state.boxContents.to.y},
                    },
                });
            } else {
                this.setState({
                    boxContents: {
                        from: {x: this.state.boxContents.from.x, y: this.state.boxContents.from.y},
                        to: {x: value, y: this.state.boxContents.to.y},
                    },
                });
            }
        }

        // y-coordinate handling
        else {
            if (boxType === 'from') {
                this.setState({
                    boxContents: {
                        from: {x: this.state.boxContents.from.x, y: value},
                        to: {x: this.state.boxContents.to.x, y: this.state.boxContents.to.y},
                    },
                });
            } else {
                this.setState({
                    boxContents: {
                        from: {x: this.state.boxContents.from.x, y: this.state.boxContents.from.y},
                        to: {x: this.state.boxContents.to.x, y: value},
                    },
                });
            }
        }
        console.log('changeValue :: this.state:', this.state);
    };

    /**
     * Define behaviour on clicking cell.
     *
     * @param {number} row Which row was clicked (0-indexed)
     * @param {number} col Which column was clicked (0-indexed)
     */
    public clickCell = (row: number, col: number) => {
        console.log('Ran clickCell with row:', row, 'col:', col);
        console.log(this.state.piecePositions[row][col]);
        this.changeCoordinateBoxContents('from', 'x', row);
        this.changeCoordinateBoxContents('from', 'y', col);
    };

    /**
     * Submits a move from values in coordinate boxes.
     * @param {{from: {x: number, y: number}, to: {x: number, y: number}}} props.moveValues
     *        Object containing coordinates required to move a piece.
     */
    public submitMove = (moveValues: {
        from: {x: number; y: number};
        to: {x: number; y: number};
    }) => {
        const isRed = this.props.appState.currentPlayer === 'red';
        const isBlue = !isRed;

        const fromX = moveValues.from.x;
        const fromY = moveValues.from.y;
        const toX = moveValues.to.x;
        const toY = moveValues.to.y;

        const piecePositions = this.state.piecePositions;

        /*
         * Get content of selected "from" (as in place the piece is from) location - i.e.
         * whether the piece is 1 or 2 i.e. red or blue).
         * @TODO: change this behaviour when "kinging" pieces behaviour is added.
         */
        const selCellContent = piecePositions[fromX][fromY];

        // If true, a valid piece is selected based on the current player and cell content
        const isValidPieceSelected = isRed ? selCellContent === 2 : selCellContent === 1;

        /**
         * Set of coordinate locations a piece can be moved to (basic).
         * Note that it further filters this below.
         *
         * Collects coordinates solely based on location relative to the selected piece
         * (i.e. no context is accounted for, nor is behaviour for non-standard scenarios).
         */
        let newCoordsAllowed: Coordinate[] = [];

        if (isRed) {
            newCoordsAllowed = [
                [fromX - 1, fromY - 1] as Coordinate,
                [fromX - 1, fromY + 1] as Coordinate,
            ].filter(coord => {
                if (coord[0] < 0 || coord[0] >= 8) return false;
                if (coord[1] < 0 || coord[1] >= 8) return false;
                return true;
            });
        } else if (isBlue) {
            newCoordsAllowed = [
                [fromX + 1, fromY + 1] as Coordinate,
                [fromX + 1, fromY - 1] as Coordinate,
            ].filter(coord => {
                if (coord[0] < 0 || coord[0] >= 8) return false;
                if (coord[1] < 0 || coord[1] >= 8) return false;
                return true;
            });
        }

        /**
         * True if checkers rules allow piece to move to requested location.
         */
        const isMoveValid = newCoordsAllowed.some(coord => {
            if (coord[0] === toX && coord[1] === toY) return true;
        });

        // Check if allowed, erase original piece, then draw at new location
        if (isValidPieceSelected && isMoveValid) {
            piecePositions[fromX][fromY] = 0;
            piecePositions[toX][toY] = isRed ? 2 : 1;
        }

        // Invalid move handling
        else {
            // @TODO Make this reason specific
            if (!isValidPieceSelected) {
                alert(`You must select a cell containing one of your own pieces`);
            } else if (!isMoveValid) {
                const allowedMoves = newCoordsAllowed.reduce((acc, coord, idx) => {
                    const commaMaybe = idx !== 0 ? ', ' : '';
                    const coordinates = `(${coord[0] + 1},${coord[1] + 1})`;
                    acc = `${acc}${commaMaybe}${coordinates}`;
                    return acc;
                }, ``);
                alert(`Invalid move. Available options: ${allowedMoves}`);
            }
            return;
        }

        this.endTurn(piecePositions);
    };

    /*---------------------------------------- LIFECYCLE -----------------------------------------*/
    render() {
        return (
            <BoardView
                headerName={`Checkers board`}
                piecePositions={this.state.piecePositions}
                swapSides={this.swapSides}
                clickCell={this.clickCell}
                submitMove={this.submitMove}
                currentPlayer={this.props.appState.currentPlayer}
                from={this.state.boxContents.from}
                to={this.state.boxContents.to}
                changeCoordinateBoxContents={this.changeCoordinateBoxContents}
            />
        );
    }
}

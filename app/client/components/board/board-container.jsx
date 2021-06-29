// Third-party imports
import React from 'react';
import {BoardView} from './board-view';
import {inject} from 'mobx-react'

/**
 * Logic for component containing the checkers board.
 * (React class component).
 */
export class BoardContainer extends React.Component {

    /**
     * 0 = nothing
     * 1 = black
     * 2 = white
     *
     * @type {(0 | 1 | 2)[][]}
     * @memberof BoardContainer
     */
    piecePositions = [
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [2, 0, 2, 0, 2, 0, 2, 0],
        [0, 2, 0, 2, 0, 2, 0, 2],
        [2, 0, 2, 0, 2, 0, 2, 0]
    ];

    render() {
        return (
            <BoardView headerName={`Checkers board`} piecePositions={this.piecePositions}>
                HEY!
            </BoardView>
        );
    }
}

// export const BoardContainer = inject('appState')(BoardContainerRaw);

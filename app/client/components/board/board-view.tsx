/*-------------------------------------------- ASSETS --------------------------------------------*/
import s from './board.scss';

/*------------------------------------- THIRD-PARTY IMPORTS --------------------------------------*/
import React from 'react';
import cn from 'classnames';

/*--------------------------------------- PROJECT IMPORTS ----------------------------------------*/
import {CoordinatesBar} from '../coordinates-bar';
import type {BoardViewProps} from './board-container';

/*------------------------------------------- HELPERS --------------------------------------------*/
/**
 * Render a chessboard cell of the given colour.
 * @param {'black' | 'white'} props.color Colour of the cell being rendered
 * @param {0 | 1 | 2} props.children Type of piece (or not) to render
 * @param {Function} props.clickCell Method to run on clicking cell
 */
const Cell = props => {
    return (
        <div className={cn(s['cell'], s[props.color])} onClick={props.clickCell}>
            {props.children}
        </div>
    );
};

/**
 * Render a piece if present in a cell.
 * @param {0 | 1 | 2} children If 0, no piece, if 1, blue piece, if 2, red piece.
 */
const CellContent = props => {
    const {children} = props;
    return (
        <div
            className={cn(
                children === 0
                    ? ''
                    : children === 1
                    ? s['piece'] + ' ' + s['blue']
                    : s['piece'] + ' ' + s['red']
            )}
        >
            {children}
        </div>
    );
};

/**
 * Render a single row of the board.
 * @param {boolean} [props.offset] If true, offset the colour order by one.
 * @param {(0 | 1 | 2)[]} props.rowPositions
 * @param {number} props.row The current row's index
 */
const Row = (props: {
    offset?: boolean;
    row: number;
    rowPositions: number[];
    clickCell: BoardViewProps['clickCell'];
}) => {
    const {row} = props;
    if (props.offset) {
        return (
            <div className={cn(s['row'])}>
                <Cell color="white" clickCell={() => props.clickCell(row, 0)}>
                    <CellContent>{props.rowPositions[0]}</CellContent>
                </Cell>
                <Cell color="black" clickCell={() => props.clickCell(row, 1)}>
                    <CellContent>{props.rowPositions[1]}</CellContent>
                </Cell>
                <Cell color="white" clickCell={() => props.clickCell(row, 2)}>
                    <CellContent>{props.rowPositions[2]}</CellContent>
                </Cell>
                <Cell color="black" clickCell={() => props.clickCell(row, 3)}>
                    <CellContent>{props.rowPositions[3]}</CellContent>
                </Cell>
                <Cell color="white" clickCell={() => props.clickCell(row, 4)}>
                    <CellContent>{props.rowPositions[4]}</CellContent>
                </Cell>
                <Cell color="black" clickCell={() => props.clickCell(row, 5)}>
                    <CellContent>{props.rowPositions[5]}</CellContent>
                </Cell>
                <Cell color="white" clickCell={() => props.clickCell(row, 6)}>
                    <CellContent>{props.rowPositions[6]}</CellContent>
                </Cell>
                <Cell color="black" clickCell={() => props.clickCell(row, 7)}>
                    <CellContent>{props.rowPositions[7]}</CellContent>
                </Cell>
            </div>
        );
    } else {
        return (
            <div className={cn(s['row'])}>
                <Cell color="black" clickCell={() => props.clickCell(row, 0)}>
                    <CellContent>{props.rowPositions[0]}</CellContent>
                </Cell>
                <Cell color="white" clickCell={() => props.clickCell(row, 1)}>
                    <CellContent>{props.rowPositions[1]}</CellContent>
                </Cell>
                <Cell color="black" clickCell={() => props.clickCell(row, 2)}>
                    <CellContent>{props.rowPositions[2]}</CellContent>
                </Cell>
                <Cell color="white" clickCell={() => props.clickCell(row, 3)}>
                    <CellContent>{props.rowPositions[3]}</CellContent>
                </Cell>
                <Cell color="black" clickCell={() => props.clickCell(row, 4)}>
                    <CellContent>{props.rowPositions[4]}</CellContent>
                </Cell>
                <Cell color="white" clickCell={() => props.clickCell(row, 5)}>
                    <CellContent>{props.rowPositions[5]}</CellContent>
                </Cell>
                <Cell color="black" clickCell={() => props.clickCell(row, 6)}>
                    <CellContent>{props.rowPositions[6]}</CellContent>
                </Cell>
                <Cell color="white" clickCell={() => props.clickCell(row, 7)}>
                    <CellContent>{props.rowPositions[7]}</CellContent>
                </Cell>
            </div>
        );
    }
};

/**
 * Button to swap which side is red and which is blue
 * Example: <SwapSidesButton onClick={swapSides} />
 */
const SwapSidesButton = (props: {onClick: () => any}) => (
    <button onClick={_ev => props.onClick()}>Swap sides</button>
);

/**
 * Board view UI component.
 * (React stateless functional component).
 *
 * @param {string} props.headerName name of the board.
 * @param {(0 | 1 | 2)[][]} props.piecePositions Positions of players' checkers pieces.
 * @param {(row: number, col: number) => any} props.clickCell Click handler for clicking any cell
 * @param {Function} props.setInputBoxValue Sets the values of the from & to coordinates.
 * @param {() => any} props.submitMove Move piece based on the content of the coordinates bar.
 */
export const BoardView = (props: BoardViewProps) => {
    const {swapSides, headerName, piecePositions, clickCell} = props;

    return (
        <div style={{width: 'fit-content'}}>
            <h1 className={cn(s['board-header'])}>{headerName}</h1>
            <h2>Current player: {props.currentPlayer}</h2>

            {/* ACTUAL ROWS OF CHECKERS BOARD */}
            <Row rowPositions={piecePositions[0]} clickCell={clickCell} row={0} />
            <Row offset rowPositions={piecePositions[1]} clickCell={clickCell} row={1} />
            <Row rowPositions={piecePositions[2]} clickCell={clickCell} row={2} />
            <Row offset rowPositions={piecePositions[3]} clickCell={clickCell} row={3} />
            <Row rowPositions={piecePositions[4]} clickCell={clickCell} row={4} />
            <Row offset rowPositions={piecePositions[5]} clickCell={clickCell} row={5} />
            <Row rowPositions={piecePositions[6]} clickCell={clickCell} row={6} />
            <Row offset rowPositions={piecePositions[7]} clickCell={clickCell} row={7} />

            {/* BUTTON FOR SWAPPING WHICH SIDE IS WHICH */}
            <SwapSidesButton onClick={swapSides} />

            {/* INPUT BOXES */}
            <CoordinatesBar
                submitMove={props.submitMove}
                from={props.from}
                to={props.to}
                changeCoordinateBoxContents={props.changeCoordinateBoxContents}
            />
        </div>
    );
};

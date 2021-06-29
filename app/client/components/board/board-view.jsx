// Third-party imports
import React from 'react';

// Assets
import s from './board.scss';
import cn from 'classnames';

/**
 * Render a chessboard cell of the given colour.
 * @param {'black' | 'white'} props.color Colour of the cell being rendered
 * @param {0 | 1 | 2} props.children Type of piece (or not) to render
 */
const Cell = props => {
    return <div className={cn(s['cell'], s[props.color])}>{props.children}</div>;
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
        />
    );
};

/**
 * Render a single row of the board.
 * @param {boolean} [props.offset] If true, offset the colour order by one.
 * @param {(0 | 1 | 2)[]} props.rowPositions
 */
const Row = props => {
    console.log(`Row props:`, props);
    if (props.offset) {
        return (
            <div className={cn(s['row'])}>
                <Cell color="white">
                    <CellContent>{props.rowPositions[0]}</CellContent>
                </Cell>
                <Cell color="black">
                    <CellContent>{props.rowPositions[1]}</CellContent>
                </Cell>
                <Cell color="white">
                    <CellContent>{props.rowPositions[2]}</CellContent>
                </Cell>
                <Cell color="black">
                    <CellContent>{props.rowPositions[3]}</CellContent>
                </Cell>
                <Cell color="white">
                    <CellContent>{props.rowPositions[4]}</CellContent>
                </Cell>
                <Cell color="black">
                    <CellContent>{props.rowPositions[5]}</CellContent>
                </Cell>
                <Cell color="white">
                    <CellContent>{props.rowPositions[6]}</CellContent>
                </Cell>
                <Cell color="black">
                    <CellContent>{props.rowPositions[7]}</CellContent>
                </Cell>
            </div>
        );
    } else {
        return (
            <div className={cn(s['row'])}>
                <Cell color="black">
                    <CellContent>{props.rowPositions[0]}</CellContent>
                </Cell>
                <Cell color="white">
                    <CellContent>{props.rowPositions[1]}</CellContent>
                </Cell>
                <Cell color="black">
                    <CellContent>{props.rowPositions[2]}</CellContent>
                </Cell>
                <Cell color="white">
                    <CellContent>{props.rowPositions[3]}</CellContent>
                </Cell>
                <Cell color="black">
                    <CellContent>{props.rowPositions[4]}</CellContent>
                </Cell>
                <Cell color="white">
                    <CellContent>{props.rowPositions[5]}</CellContent>
                </Cell>
                <Cell color="black">
                    <CellContent>{props.rowPositions[6]}</CellContent>
                </Cell>
                <Cell color="white">
                    <CellContent>{props.rowPositions[7]}</CellContent>
                </Cell>
            </div>
        );
    }
};

/**
 * Board view UI component.
 * (React stateless functional component).
 *
 * @param {string} props.headerName name of the board.
 * @param {(0 | 1 | 2)[][]} props.piecePositions Positions of players' checkers pieces.
 */
export const BoardView = props => {
    const {swapSides, headerName, piecePositions, children} = props;

    return (
        <div>
            <h1 className={cn(s['board-header'])}>{headerName}</h1>
            <h2>{children}</h2>
            <div className={cn(s['board'])}>
                <Row rowPositions={piecePositions[0]} />
                <Row offset rowPositions={piecePositions[1]} />
                <Row rowPositions={piecePositions[2]} />
                <Row offset rowPositions={piecePositions[3]} />
                <Row rowPositions={piecePositions[4]} />
                <Row offset rowPositions={piecePositions[5]} />
                <Row rowPositions={piecePositions[6]} />
                <Row offset rowPositions={piecePositions[7]} />
            </div>
            <button
                onClick={ev => {
                    swapSides();
                }}
            >
                Swap sides
            </button>
        </div>
    );
};

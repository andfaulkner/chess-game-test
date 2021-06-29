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
const Cell = (props) => {
    return (
        <div className={cn(s['cell'], s[props.color])}>
            {props.children}
        </div>
    );
}

/**
 * Render a single row of the board.
 * @param {boolean} [props.offset] If true, offset the colour order by one.
 * @param {(0 | 1 | 2)[]} props.rowPositions
 */
const Row = (props) => {
    console.log(`Row props:`, props);
    if (props.offset) {
        return (
            <div className={cn(s["row"])}>
                <Cell color="white">
                    {props.rowPositions[0]}
                </Cell>
                <Cell color="black">
                    {props.rowPositions[1]}
                </Cell>
                <Cell color="white">
                    {props.rowPositions[2]}
                </Cell>
                <Cell color="black">
                    {props.rowPositions[3]}
                </Cell>
                <Cell color="white">
                    {props.rowPositions[4]}
                </Cell>
                <Cell color="black">
                    {props.rowPositions[5]}
                </Cell>
                <Cell color="white">
                    {props.rowPositions[6]}
                </Cell>
                <Cell color="black">
                    {props.rowPositions[7]}
                </Cell>
            </div>
        )
    } else {
        return (
            <div className={cn(s["row"])}>
                <Cell color="black">
                    {props.rowPositions[0]}
                </Cell>
                <Cell color="white">
                    {props.rowPositions[1]}
                </Cell>
                <Cell color="black">
                    {props.rowPositions[2]}
                </Cell>
                <Cell color="white">
                    {props.rowPositions[3]}
                </Cell>
                <Cell color="black">
                    {props.rowPositions[4]}
                </Cell>
                <Cell color="white">
                    {props.rowPositions[5]}
                </Cell>
                <Cell color="black">
                    {props.rowPositions[6]}
                </Cell>
                <Cell color="white">
                    {props.rowPositions[7]}
                </Cell>
            </div>
        )
    }
};

/**
 * Board view UI component.
 * (React stateless functional component).
 *
 * @param {string} props.headerName name of the board.
 * @param {(0 | 1 | 2)[][]} props.piecePositions Positions of players' checkers pieces.
 */
export const BoardView = (props) => {
    return (
        <div>
            <h1 className={cn(s['board-header'])}>{props.headerName}</h1>
            <h2>{props.children}</h2>
            <div className={cn(s["board"])}>
                <Row rowPositions={props.piecePositions[0]}/>
                <Row offset rowPositions={props.piecePositions[1]}/>
                <Row rowPositions={props.piecePositions[2]}/>
                <Row offset rowPositions={props.piecePositions[3]}/>
                <Row rowPositions={props.piecePositions[4]}/>
                <Row offset rowPositions={props.piecePositions[5]}/>
                <Row rowPositions={props.piecePositions[6]}/>
                <Row offset rowPositions={props.piecePositions[7]}/>
            </div>
        </div>
    );
};

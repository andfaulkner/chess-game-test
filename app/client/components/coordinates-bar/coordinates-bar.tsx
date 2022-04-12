/*-------------------------------------------- ASSETS --------------------------------------------*/
import s from './coordinates-bar.scss';

/*------------------------------------- THIRD-PARTY IMPORTS --------------------------------------*/
import React from 'react';
import cn from 'classnames';

/*--------------------------------------- PROJECT IMPORTS ----------------------------------------*/
import {MoveInputBox} from './move-input-box/move-input-box';

/*--------------------------------------- TYPE DEFINITIONS ---------------------------------------*/
interface CoordinatesBarProps {
    /**
     * TODO don't make this any type.
     */
    submitMove: (arg: any) => any;
    from: {x: number; y: number};
    to: {x: number; y: number};
    changeCoordinateBoxContents: (boxType: 'from' | 'to', axis: 'x' | 'y', value: number) => any;
}

/*-------------------------------------------- EXPORT --------------------------------------------*/
/**
 * Render an input box for accepting coordinates relating to a move.
 *
 * @property {Function} props.setInputBoxValue Sets value of one of the coordinate boxes.
 * @property {(): any} props.submitMove Move piece based on the content of the coordinates bar.
 * @property {{x: number, y: number}} props.from Content of the coordinates bar "from" boxes.
 * @property {{x: number, y: number}} props.to Content of the coordinates bar "to" boxes.
 *
 */
export class CoordinatesBar extends React.Component<CoordinatesBarProps> {
    /**
     * Submit the current coordinates in the fields to the submitMove callback.
     */
    public submitMove = () => {
        this.props.submitMove(this.state);
        console.log('submitMove (CoordinateBar) :: this.state:', this.state);
    };

    render() {
        return (
            <div
                style={{
                    display: `flex`,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                    marginTop: 8,
                }}
            >
                <MoveInputBox
                    id="move-input-box--from"
                    label="From"
                    onChangeX={value => this.props.changeCoordinateBoxContents('from', 'x', value)}
                    onChangeY={value => this.props.changeCoordinateBoxContents('from', 'y', value)}
                    value={this.props.from}
                />
                <MoveInputBox
                    id="move-input-box--to"
                    label="To"
                    onChangeX={value => this.props.changeCoordinateBoxContents('to', 'x', value)}
                    onChangeY={value => this.props.changeCoordinateBoxContents('to', 'y', value)}
                    value={this.props.to}
                />
                <button type="submit" onClick={this.submitMove}>
                    Submit
                </button>
            </div>
        );
    }
}

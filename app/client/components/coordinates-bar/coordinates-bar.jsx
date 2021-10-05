// Third-party imports
import React from 'react';
import cn from 'classnames';

// Project imports
import {MoveInputBox} from './move-input-box/move-input-box';

// Assets
import s from './coordinates-bar.scss';

/**
 * Render an input box for accepting coordinates relating to a move.
 *
 * @property {Function} props.setInputBoxValue Sets value of one of the coordinate boxes.
 * @property {() => any} props.submitMove Move piece based on the content of the coordinates bar.
 *
 */
export class CoordinatesBar extends React.Component {
    state = {
        from: {
            /**
             * Value of first box (x-coordinate).
             */
            x: 1,
            /**
             * Value of second box (y-coordinate).
             */
            y: 1,
        },
        to: {
            /**
             * Value of first box (x-coordinate).
             */
            x: 1,
            /**
             * Value of second box (y-coordinate).
             */
            y: 1,
        },
    };

    /**
     * Change the content of one of the input coordinate boxes.
     * @param {'from'|'to'} boxType Which of the box types the change occurred in.
     * @param {'x'|'y'} coordinate Which of the 2 coordinate boxes has been changed.
     * @param {number} value Content of the changed box.
     */
    changeValue = (boxType, coordinate, value) => {
        if (coordinate === 'x') {
            this.setState({
                [boxType]: {x: value, y: this.state[boxType].y}
            });
        } else {
            this.setState({
                [boxType]: {x: this.state[boxType].x, y: value}
            });
        }
        console.log('changeValue :: this.state:', this.state);
    };

    submitMove = () => {
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
                    onChangeX={value => this.changeValue('from', 'x', value)}
                    onChangeY={value => this.changeValue('from', 'y', value)}
                    value={this.state.from}
                />
                <MoveInputBox
                    id="move-input-box--to"
                    label="To"
                    onChangeX={value => this.changeValue('to', 'x', value)}
                    onChangeY={value => this.changeValue('to', 'y', value)}
                    value={this.state.to}
                />
                <button type="submit" onClick={this.submitMove}>
                    Submit
                </button>
            </div>
        );
    }
}

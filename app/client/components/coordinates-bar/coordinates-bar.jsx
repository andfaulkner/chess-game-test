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
 * @property {Function} setInputBoxValue Sets value of one of the coordinate boxes.
 */
export class CoordinatesBar extends React.Component {
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
                    onChangeX={value => this.props.setInputBoxValue('from', 'x', value)}
                    onChangeY={value => this.props.setInputBoxValue('from', 'y', value)}
                />
                <MoveInputBox
                    id="move-input-box--to"
                    label="To"
                    onChangeX={value => this.props.setInputBoxValue('to', 'x', value)}
                    onChangeY={value => this.props.setInputBoxValue('to', 'y', value)}
                />
                <button type="submit">Submit</button>
            </div>
        );
    }
}

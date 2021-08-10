// Third-party imports
import React from 'react';
import cn from 'classnames';

// Assets
import s from './move-input-box.scss';

/**
 * Render an input box for accepting coordinates relating to a move
 */
 export class MoveInputBox extends React.Component {
    render() {
        return (
            <div>
                <label style={{marginRight: 2}}>{this.props.label}</label>
                <input id={this.props.id}></input>
            </div>
        );
    }
 }

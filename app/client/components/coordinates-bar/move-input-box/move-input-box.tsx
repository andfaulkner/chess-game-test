/*-------------------------------------------- ASSETS --------------------------------------------*/
import s from './move-input-box.scss';

/*------------------------------------- THIRD-PARTY IMPORTS --------------------------------------*/
import React from 'react';
import cn from 'classnames';

/*--------------------------------------- TYPE DEFINITIONS ---------------------------------------*/
interface MoveInputBoxProps {
    id: string;
    label: string;
    onChangeX: (numValue: number) => any;
    onChangeY: (numValue: number) => any;
    value: {x: number; y: number};
}

/*-------------------------------------------- EXPORT --------------------------------------------*/
/**
 * Render an input box for accepting coordinates relating to a move.
 *
 * @property {string} id DOM id for the input box
 * @property {string} label Label attached to the component
 */
export class MoveInputBox extends React.Component<MoveInputBoxProps> {
    /**
     * Change value of first box (x-coordinate).
     */
    private onChangeX = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const value = ev.target.value;
        const numValue = parseInt(value);
        this.props.onChangeX(numValue);
    };

    /**
     * Change value of second box (y-coordinate).
     */
    private onChangeY = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const value = ev.target.value;
        const numValue = parseInt(value);
        this.props.onChangeY(numValue);
    };

    render() {
        return (
            <div>
                <label style={{marginRight: 4, fontSize: 16, fontWeight: 'bold'}}>
                    {this.props.label} (x,y):
                </label>
                <input
                    type="number"
                    id={this.props.id + '_x'}
                    onChange={ev => this.onChangeX(ev)}
                    value={this.props.value.x}
                    min={1}
                    max={8}
                ></input>
                <input
                    type="number"
                    id={this.props.id + '_y'}
                    onChange={ev => this.onChangeY(ev)}
                    value={this.props.value.y}
                    min={1}
                    max={8}
                ></input>
            </div>
        );
    }
}

// Third-party imports
import React from 'react';

// Assets
import s from './board.scss';
import cn from 'classnames';

/**
 * Board view UI component.
 * (React stateless functional component).
 */
export const BoardView = (props) => {
    return (
        <div>
            <div className={cn(s['test-board-header'])}>Board view here</div>
        </div>
    );
};

/*------------------------------------- THIRD-PARTY MODULES --------------------------------------*/
import {observable, action} from 'mobx';
// import {rootStore} from '../../store/root-store';

/*------------------------------------------- LOGGING --------------------------------------------*/
import {logFactory, Styles} from 'mad-logs/lib/shared';
const log = logFactory(__filename.replace(`${__dirname}/`, ``), Styles.probeArcade);

/*-------------------------------------------- EXPORT --------------------------------------------*/
/**
 * MobX store containing data about the board.
 */
export class BoardStore {

    /**
     * Factory method (true constructor)
     */
    static new = () => {
        log.verbose(`BoardStore#new :: Creating new BoardStore`);
        return new BoardStore();
    }

    constructor() {}
}

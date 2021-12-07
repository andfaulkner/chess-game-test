/*------------------------------------- THIRD-PARTY MODULES --------------------------------------*/
import {observable, action} from 'mobx';

/*------------------------------------------- LOGGING --------------------------------------------*/
import {logFactory, Styles} from 'mad-logs/lib/shared';
const log = logFactory(__filename.replace(`${__dirname}/`, ``), Styles.hatBlock);

/*-------------------------------------------- EXPORT --------------------------------------------*/
/**
 * MobX store containing root data about application.
 */
export class RootStore {
    public static Instance: RootStore | null = null;

    /**
     * Factory method (true constructor)
     */
    public static new = (rootStore: RootStore): RootStore => {
        if (!RootStore.Instance) {
            RootStore.Instance = new RootStore(rootStore);
            log.verbose(`RootStore created: `, RootStore.Instance);
        }
        return RootStore.Instance;
    }

    private constructor(public rootStore: RootStore) {}
}

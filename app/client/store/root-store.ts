/*------------------------------------- THIRD-PARTY MODULES --------------------------------------*/
import {observable, action} from 'mobx';

/*--------------------------------------- TYPE DEFINITIONS ---------------------------------------*/
export interface StoreProps {
    appState?: Injection<RootStore>;
}

/*-------------------------------------------- EXPORT --------------------------------------------*/
/**
 * MobX store containing root data about application.
 */
export class RootStore {
    public static Instance: RootStore | null = null;

    /**
     * Currently active player.
     */
    @observable
    public currentPlayer: 'red' | 'blue' = 'red';

    /**
     * Sets current player by colour.
     * @param {'red' | 'blue'} newCurrentPlayer New value of currentPlayer property
     */
    @action
    public setCurrentPlayer = (newCurrentPlayer: 'red' | 'blue') => {
        this.currentPlayer = newCurrentPlayer;
    };

    /*---------------------------------------- LIFECYCLE -----------------------------------------*/
    /**
     * Factory method (true constructor)
     */
    public static new = (): RootStore => {
        if (!RootStore.Instance) {
            RootStore.Instance = new RootStore();
            console.log(`RootStore created: `, RootStore.Instance);
        }
        return RootStore.Instance;
    };

    private constructor() {}
}

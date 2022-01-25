Providers
=========
-   Component that makes any prop given to it available to "descendent" props
    -   As in, to children, grandchildren, great-grandchildren, and so on
-   This prop is made available to any descendent component with the
    @inject('nameOfProp') decorator attached to it
    -   Doing this makes this.props.nameOfProp contain the value passed to the
        Provider prop with that name.
-   You're thus able to access data passed into the provider at the top of the
    React component tree, in ALL components descending from the provider.

-   Shorter explanation: Provider makes data available to the entire render tree below the provider component. The injector actually gives the data to the specific component it wraps.

What does a Provider actually do?
---------------------------------
Pseudocode:

/**
 * Data stored in the provider
 * Each key corresponds to a prop name given to the Provider component
 * Each value corresponds to the data given to the prop with that name.
 */
const mobxStores = {appState: rootState};

/**
 * Pseudocode provider component.
 *
 * Constructor stores all key-value pairs of props and corresponding values into the
 * internal "mobxStores" object above.
 *
 * Example
 *    <MobxProvider appState={rootStore} />
 *    ...would store mobxStores['appState'] = rootStore.
 */
class MobxProvider extends React.Component<any> {
    constructor(props) {
        Object.keys(props).forEach(propKey => {
            this.mobxStores[propKey] = props[propKey];
        });
    }

    render() {
        return <>{this.props.children}</>
    }
}

/**
 * Pseudocode Injector component.
 * This wraps any React component class that an @inject decorator is applied to,
 * with a string passed to it.
 *
 * Example
 *      @inject('appState')
 *      class SomeComponent extends React.Component {...etc...}
 *
 * A wrapped component then gets data for whatever prop was passed into the
 * provider with a name corresponding to the string passed to @inject.
 * This becomes available at this.props. In the above example, it's available at
 * this.props.appState. e.g.:
 *
 *      @inject('appState')
 *      class SomeComponent extends React.Component {
 *          constructor(props) {
 *              props.appState; // <<< this is now available
 *          }
 *          render() {
 *              // Available here too (available in the entire class)
 *              this.props.appState;
 *
 *              return <>{this.props.children}</>
 *          }
 *      }
 */
class BoardContainerInjector extends React.Component<any> {
    render() {
        return <BoardContainer appState={mobxStores['appState']} />
    }
}

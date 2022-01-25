/**
 * React-specific methods & properties
 */
declare type ReactComponentMethodsProperties =
    | 'render'
    | 'componentWillMount'
    | 'componentDidMount'
    | 'forceUpdate'
    | 'props'
    | 'state'
    | 'setState'
    | 'refs'
    | 'context'
    | 'shouldComponentUpdate'
    | 'componentWillReceiveProps'
    | 'componentWillUpdate'
    | 'componentWillUnmount'
    | 'componentDidCatch'
    | 'componentDidUpdate'
    | 'getSnapshotBeforeUpdate'
    | 'UNSAFE_componentWillMount'
    | 'UNSAFE_componentWillReceiveProps'
    | 'UNSAFE_componentWillUpdate';

/**
 * Get type of Class, omitting react-specific props
 */
declare type OmitReactProperties<T, O = 'render'> = Omit<T, ReactComponentMethodsProperties | O>;

/**
 * Informational type identifying that something is an "injection."
 */
declare type Injection<T> = T;

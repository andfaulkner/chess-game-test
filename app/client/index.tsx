/*------------------------------------- THIRD-PARTY IMPORTS --------------------------------------*/
import React from 'react';
import ReactDOM from 'react-dom';
import {BoardContainer} from './components/board/board-container';
import {Provider as MobxProvider} from 'mobx-react';
import {RootStore} from './store/root-store';

/*-------------------------------------------- STORE ---------------------------------------------*/
const rootStore = RootStore.new();

/*-------------------------------------------- EXPORT --------------------------------------------*/
class WrapperClass extends React.Component<{}> {
    render() {
        return (
            <div>
                <h1>I'm in ur React tree, adding ur headings</h1>
                {this.props.children}
            </div>
        );
    }
}

/**
 * A simple text component
 */
const TextComponent = () => {
    return (
        <div>A text component TWO</div>
    );
};

TextComponent.displayName = `TextComponent`;

/**
* Say hello to someone!
 */
const HelloNameComponent = (props: {firstName: string, lastName: string}) => (
    <div>
        Hello {props.firstName} {props.lastName}!
    </div>
);

HelloNameComponent.displayName = `HelloNameComponent`;


/**
 * Actual application - root component
 */
class Game extends React.Component {
    /**
     * Whatever is returned by this method, gets rendered in the HTML page.
     */
    render() {
        return (
            <MobxProvider appState={rootStore}>
                <WrapperClass>
                    <div>
                        <TextComponent />
                        <HelloNameComponent firstName="Eric" lastName="EatsPoop" />
                        <HelloNameComponent firstName="Eric" lastName="DrinksPee" />
                        <BoardContainer />
                    </div>
                </WrapperClass>
            </MobxProvider>
        );
    }
}

/*-------------------------------------------- RENDER --------------------------------------------*/
ReactDOM.render(<Game />, document.getElementById('root'));

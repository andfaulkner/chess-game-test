import React from 'react';
import ReactDOM from 'react-dom';

class HelloMessage extends React.Component<{name: string}> {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

const root = document.getElementById('root');

ReactDOM.render(<HelloMessage name="Taylor" />, root);

import React from 'react';

class ClassCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
        this.increment = this.increment.bind(this);
        this.dicriment = this.dicriment.bind(this);
    }

    increment() {
        this.setState({ count: this.state.count + 1 });
    }

    dicriment() {
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        return (
            <div>
                <h1> {this.state.count}</h1 >
                <button onClick={this.increment}>Incremant</button>
                <button onClick={this.dicriment}>Dincremant</button>
            </div>
        )
    }
}


export default ClassCounter;
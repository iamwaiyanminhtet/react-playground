import React, { useState, Component } from 'react'

const FunctionalComponent = () => {

    const [count, setCount] = useState(0);

    const increase = () => setCount(count + 1);
    const decrease = () => setCount(count - 1);

    return (
        <div style={{display:'flex', gap : '20px'}}>
            <button onClick={decrease}>Decrease</button>
            <p>Functional Component | {count}</p>
            <button onClick={increase}>Increase</button>
        </div>
    )
}

class ClassComponent extends Component {
    constructor({props}) {
        super({props})

        this.state = {
            count : 0
        }

        this.increase = this.increase.bind(this)
        this.decrease = this.decrease.bind(this)
    }

    increase() {
        this.setState((state) => ({
            ...state,
            count : state.count + 1
        }));
    }

    decrease() {
        this.setState((state) => ({
            ...state,
            count : state.count - 1
        }));
    }

    render() {
        const {name} = this.props;
        return (
            <div style={{display:'flex', gap : '20px', margin:'1rem'}}>
                <button onClick={this.decrease}>Decrease</button>
                <p>{name} | {this.state.count}</p>
                <button onClick={this.increase}>Increase</button>
            </div>
        )
    }
}

export {ClassComponent};

export default FunctionalComponent;
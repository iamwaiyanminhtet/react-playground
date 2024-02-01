import React, {Component} from "react";

export const ErorrComponent = () => <div>{hello}</div>

class ClassComponentMethods extends Component {
    constructor(props) {
        super(props);

        console.log('inside constructor')
        this.state = {count : 0, error : false };

        this.increment = () => this.setState({count : this.state.count + 1});
        this.decrement = () => this.setState({count : this.state.count - 1});
    }

    componentDidMount() {
        console.log('inside componentDidMount')
    }

    render() {
        console.log('inside render');
        return(
            <>
            {
                this.state.error ?
                <div>{this.state.error.message}</div> :
                <div>
                    <button onClick={this.increment}>Increment</button>
                    <p>count ---- {this.state.count}</p>
                    <button onClick={this.decrement}>Decrement</button>
                    <ErorrComponent/>
                </div>
            }
            </>
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(snapshot)
        console.log('inside componentDidUpdate')
    }
    
    componentWillUnmount() {
        console.log('inside componentWillUnmount')
    }

    componentDidCatch(error, info) {
        this.setState(state => ({
            ...state,
            error : error
        }))
    }

} 

export default ClassComponentMethods;
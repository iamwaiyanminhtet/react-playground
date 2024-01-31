import { Component, useState } from 'react';

class ToDOCount extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        if(this.props) {
            const {count} = this.props;
            return (
                <p>Todos | {count.length}</p>
            )
        }
    }
}

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ['Just some demo tasks', 'As an example'],
      inputVal: '',
      currentTask : '',
      currentTaskIndex : null,
      editInputVal : ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.saveEditTask = this.saveEditTask.bind(this);
  }

  handleInputChange(e, property) {
    this.setState((state) => ({
      ...state,
      [property]: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: '',
    }));
  }

  deleteTask(index,todo) {
   if(this.state.todos.includes(todo)) {
    let todos = [...this.state.todos];
    todos.splice(index,1)
    this.setState((state) => ({
        ...state,
        todos : todos
    }))
   }
  }

  editTask(todo, index) {
    this.setState(state => ({
        ...state,
        currentTask : todo,
        currentTaskIndex : index,
        editInputVal: todo,
    }))
  }

  saveEditTask() {
    let newTodos = [...this.state.todos];
    newTodos[this.state.currentTaskIndex] = this.state.editInputVal;
    this.setState(state => ({
      ...state,
      todos : newTodos,
      currentTask : '',
      currentTaskIndex : null,
      editInputVal : ''
    }))
  }

  render() {
    return (
      <section>
        {/* eslint-disable-next-line react/prop-types */}
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={(e) => this.handleInputChange(e, 'inputVal')}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        <ToDOCount count={this.state.todos}/>
        {/* The list of all the To-Do's, displayed */}
        <ul>
            {/*I know the code is becoming messy, it's just exercise so :) */}
          {this.state.todos.map((todo,index) =>  (
            <li key={todo} style={{margin:"1rem"}}>
            {
            index === this.state.currentTaskIndex ? 
            <>
            <input type="text" value={this.state.editInputVal}  onChange={(e) => this.handleInputChange(e, 'editInputVal')}/>
            <button onClick={() => this.saveEditTask()}>Save</button>
            </>  : 
            <>
            {todo} 
            <button style={{backgroundColor : 'brown', padding : '0.2rem 0.5rem'}} onClick={() => this.deleteTask(index, todo)}>X</button> 
            <button style={{backgroundColor : 'cadetblue', padding : '0.2rem 0.5rem', color : 'black'}} onClick={(e) => this.editTask(todo, index)} >Edit</button>
            </>
            }
          </li> 
          ))}
        </ul>
      </section>
    );
  }
}



// eslint-disable-next-line react/function-component-definition, react/prop-types
const FunctionalInput = ({ name }) => {
    /*
      We declare two state variables and their setters,
      one to store the To-Do's
      and the other to store the value of the input field
    */
    const [todos, setTodos] = useState(['Just some demo tasks', 'As an example']);
    const [inputVal, setInputVal] = useState('');
  
    const handleInputChange = (e) => {
      setInputVal(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setTodos((todo) => [...todo, inputVal]);
      setInputVal('');
    };
  
    return (
      <section>
        <h3>{name}</h3>
        {/* The input field to enter To-Do's */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={inputVal}
            onChange={handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {todos.map((todo) => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
      </section>
    );
};

export {FunctionalInput, ToDOCount}

export default ClassInput;
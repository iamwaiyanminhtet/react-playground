import {useState} from 'react'

const UseState = () => {
    let colors = ['black', 'lightblue', 'lightpink'];
    let [backgroundColor, setBackgroundColor] = useState(colors[0]);
    let [count, setCount] = useState(0);
    let [color, setColor] = useState('white');
  
    function changeColor(event,color) {
      setBackgroundColor(color);
      setCount(++count)
  
      color !== "black" ? setColor('black') : setColor('white');
    }
    return (
      <div style={{backgroundColor, padding:'5rem'}}>
        <h2 style={{color}}>Background Color Change Count : {count}</h2>
        {
        colors.map(color => <button onClick={(event) => changeColor(event, color)}  key={color}>{color}</button>)
        }
      </div>
    );
}

export default UseState;
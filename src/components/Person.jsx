import { useState } from "react";

function Person() {
    const [person, setPerson] = useState({ name: 'John', age: 100 });
  
    let [inputValue, setInputValue] = useState('');
    const handleIncreaseAge = () => {
        setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
        setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
        
      };
  
    // this console.log runs every time the component renders
    // what do you think this will print?
    console.log("during render: ", person);
  
    return (
      <>
        <h1>{person.name}</h1>
        <h2>{person.age}</h2>
        <button onClick={handleIncreaseAge}>Increase age</button>
        <div>
        <input type="text" onChange={(event) => setInputValue(event.target.value)}/>
        <span>{inputValue}</span>
        </div>
      </>
    );
}

export default Person;
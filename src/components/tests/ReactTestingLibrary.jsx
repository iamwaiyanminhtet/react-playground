import {useState} from 'react'

const FirstTest = () => <h1>First Test</h1>

const UserEvent = () => {
    const [heading, setHeading] = useState("Magnificent Monkeys");
  
    return (
      <>
        <button type="button" onClick={() => setHeading('Radical Rhinos')}>
          Click Me
        </button>
        <main>{heading}</main>
      </>
    );
}
export default FirstTest;
export {UserEvent};
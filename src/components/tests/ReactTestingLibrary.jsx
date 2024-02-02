import  {useState} from 'react'

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

const ListComponent = () => {
  return(
    <>
    <ul className='list'>
      <li>Apple</li>
      <li>Orange</li>
      <li>Banana</li>
    </ul>
    </>
  )
}

const Mock = ({onClick}) => {
  return (
    <button onClick={onClick}>Button</button>
  )
}


export default FirstTest;
export {UserEvent, ListComponent, Mock};
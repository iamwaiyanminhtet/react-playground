import { useState } from 'react';
import './App.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { useState } from 'react';
// import ClassComponentMethods from './components/ClassComponentMethods';
// import PropType from './components/PropType';

function App() {
  // const [unmount, setUnmount] = useState(false);

  const [navigate, setNavigate] = useState(false);
  const navigateHook = useNavigate()
  return (
    // <>
    // <div>
    // <button onClick={() => setUnmount(true)}>Unmount</button>
    // <button onClick={() => setUnmount(false)}>Mount</button>
    // </div>
    // {
    //   unmount === false ? <ClassComponentMethods/> : null
    // } 
    // </>
    <>
    {/* <PropType name="Arthur" email='arthur@gmail.com' phone={Number('11111111111')}></PropType> */}
    {navigate && <Navigate to='navigate' replace='true'></Navigate>}

    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            <Link to="profile">Profile page</Link>
          </li>
        </ul>
      </nav>
    </div>
    <h1>This is Homepage</h1>
    <Link to='/userlist'>Back to Userlist page</Link>

    <button onClick={() => setNavigate(true)}>Navigate</button>
    <button onClick={() => navigateHook('/navigate')}>Use Navigate</button>
    </>
  );
}

export default App;

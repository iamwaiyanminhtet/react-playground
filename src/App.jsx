// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css'
import ClassComponentMethods from './components/ClassComponentMethods';

function App() {
  const [unmount, setUnmount] = useState(false);

  return (
    <>
    <div>
    <button onClick={() => setUnmount(true)}>Unmount</button>
    <button onClick={() => setUnmount(false)}>Mount</button>
    </div>
    {
      unmount === false ? <ClassComponentMethods/> : null
    } 
    </>
  );
}

export default App;

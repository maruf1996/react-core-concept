import { createContext, useState } from 'react';
import './App.css';
import AllGuns from './component/AllGuns/AllGuns';
import Footer from './component/Footer/Footer';
import Navbar from './component/Navbar/Navbar';

export const CountContext=createContext();

function App() {
  const [count,setCount]=useState(0);

  return (
    <CountContext.Provider value={[count,setCount]}>
      <Navbar></Navbar>
      <AllGuns></AllGuns>
      <Footer></Footer>
    </CountContext.Provider>
  );
}

export default App;

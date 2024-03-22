import { Route, Routes } from 'react-router-dom';

import './App.css';
import Chat from "./view/chat/Chat";
import Register from './view/register/Register';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Register/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/chat" element={<Chat/>} />
      </Routes>
    </>
  )
}

export default App

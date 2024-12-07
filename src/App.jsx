

import Header from './Componenets/header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryCityselector from './Domain/State-Country-Selector';
import ToDo from './Domain/Todo';
import Postselector from './Domain/Post-Selector';
import Home from './Componenets/home';
import './variable.css'
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={<Home/>}></Route>
          <Route path="/todo" element={<ToDo/>}></Route>
          <Route path="/countrystateselector" element={<CountryCityselector/>}></Route>
          <Route path="/postselector" element={<Postselector/>}></Route>

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;

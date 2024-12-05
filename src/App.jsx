
import './App.css';
import Header from './Componenets/header';
import { BrowserRouter as Router } from 'react-router-dom';
import Country_City_selector from './Domain/State-Country-Selector';
// import Country_City_selector from './Domain/State-Country-Selector';
import ToDo from './Domain/Todo';

function App() {
  return (
    <>
     <Router>
      <Header />
      {/* Your other components or Routes */}
    </Router>
    {/* <Country_City_selector/> */}
   

    {/* <ToDo/> */}

    </>
  );
}

export default App;

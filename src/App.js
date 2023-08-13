import './App.css';
import { BrowserRouter as Router  , Route,Routes } from 'react-router-dom';
import Header from './container/Header';
import Productcomponent from './container/Productcomponent';
import Productdetail from './container/Productdetail';
import Productlisting from './container/Productlisting';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Productlisting/>}/>
          <Route path='/product/:productId' element={<Productdetail/>}/>
          <Route>404 Not found!</Route>
        </Routes>
      </Router>
     

    </div>
  );
}

export default App;

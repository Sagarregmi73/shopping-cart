
import './App.css';
import Home from './components/home';
import About from './components/about';
import {Switch,Route } from 'react-router-dom';
import Checkout from './components/checkout';
function App() {
  
  return (
    <div>
     
      
<Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/checkout" component={Checkout} />
    </Switch>
    
    </div>
    
  );
}

export default App;

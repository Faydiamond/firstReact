
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Contact from './Contact';
//la home s ecarga al final del todo
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/contacto">
            <Contact></Contact>
          </Route>
          
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    
   
      <Footer></Footer>
    </div>
  );
}

export default App;

import About from './components/About/About';
import Contact from './components/Contacts/Contact';
import Home  from './components/Home/Home';
import { Route } from "react-router"
import './App.css';

function App() {
  return (
    <div className="App">
      <a href="home">Home</a>
      <a href="about">About</a>
      <a href="contact">Contact</a>

      <Route path="/about" component={About} />
      
      <Contact />
      <Home />
    </div>
  );
}

export default App;

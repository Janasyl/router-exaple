import About from './components/About/About';
import Contact from './components/Contacts/Contact';
import Home  from './components/Home/Home';
import { Route } from "react-router"
import './App.css';

function App() {
  return (
<div>
{/* start navigation */}
<div className="nav">
      <a  className="href" href="home">Home</a>
      <a  className="href" href="about">About</a>
      <a  className="href" href="contact">Contact</a>
</div>
{/* end navigation */}
     
      <Route path="/about" component={About} exact />
      <Route path="/home" component={Home} />
      <Route path="/contact" component={Contact} />
      
     
    </div>
  );
}

export default App;

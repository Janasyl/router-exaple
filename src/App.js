// import About from './components/About/About';
// import Contact from './components/Contacts/Contact';
// import Home  from './components/Home/Home';
import Welcome from './components/Welcome/Welcome';
import Billie from './Billie/Billie';
import Ulukmanapo from './Ulukmanapo/Ulukmanapo';
import Sam from './Sam/Sam';
import Sheeran from './Sheeran/Sheeran';
import { Route } from "react-router"
import './App.css';

function App() {
  return (
<div>
{/* start navigation */}
<div className="nav">
 
      {/* <a  className="href" href="home">Home</a> */}
      {/* <a  className="href" href="about">About</a>
      <a  className="href" href="contact">Contact</a> */}

</div>

{/* end navigation */}

<div className="nav">
  <ul>
    
           <a className="Veryhref" href="welcome">Welcome</a>
          <li><a className="singer" href="billie">Billie</a></li>
          <li> <a  className="singer" href="sam">SamSmith</a></li>
          <li> <a  className="singer" href="ulukmanapo">Ulukmanapo</a></li>
          <li><a  className="singer" href="sheeran">EdSheeran</a></li>
    
    {/* <li></li>
    <li></li>
    <li></li> */}
  </ul>

</div>


      <Route path="/welcome" component={Welcome} exact />
      {/* <Route path="/about" component={About} exact />
      <Route path="/home" component={Home} />
      <Route path="/contact" component={Contact} /> */}
      <Route path="/billie" component={Billie} />
      <Route path="/ulukmanapo" component={Ulukmanapo} />
      <Route path="/sam" component={Sam} />
      <Route path="/sheeran" component={Sheeran} />

      
     
    </div>
  );
}

export default App;

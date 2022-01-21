import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './component/Navbar/Navbar';
import Home from './component/pages/Home';
import Footer from './component/Footer/Footer';
import Team from './component/pages/Team/Team';
import Gallery from './component/pages/Gallery/Gallery';
import Work from './component/pages/Work/Work';
import Careers from './component/pages/Career/Careers';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/team' component={Team}/>
          <Route path='/gallery' component={Gallery}/>
          <Route path='/work' component={Work}/>
          <Route path='/careers' component={Careers}/>
        </Switch>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;

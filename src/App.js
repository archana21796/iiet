import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Institution from './Institution';
import History from './History';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Motto from './Motto';
import Member from './Member';
import Infrastructure from './Infrastructure';
import SocialMedia from './SocialMedia';



function App() {
  return (
    <>
        <Nav />
        <History />
        <Motto />
        <Institution />
        <Member />
        <Infrastructure />
        <SocialMedia/>

    </>

  );
}

export default App;

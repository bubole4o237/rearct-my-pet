import {Route, Switch} from 'react-router-dom';

import Header from './components/Header/Header';
import Example from './components/Example/Example';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Categories from './components/Categories/Categories';
import PetDetails from './components/PetDetails/PetDetails';
import CreatePet from './components/CreatePet/CreatePet';

import './App.css';

function App() {
  return (
    <div className="container">
      <Header />

      {/* <Example><h1>HI EVERYBODY!!!</h1></Example> */}

      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/' exact component={Categories} />
        <Route path='/categories/:category' component={Categories} />
        <Route path='/pet/details/:petId' component={PetDetails} />
        <Route path='/pet/create' component={CreatePet} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;

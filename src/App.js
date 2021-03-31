import {Route, Switch} from 'react-router-dom';

import Header from './components/Header/Header';
import Example from './components/Example/Example';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Categories from './components/Categories/Categories';
import PetDetails from './components/PetDetails/PetDetails';
import EditPetDetails from './components/EditPetDetails/EditPetDetails'; 
import CreatePet from './components/CreatePet/CreatePet';
import DeletePet from './components/DeletePet/DeletePet';

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
        <Route path='/pet/details/:petId' exact component={PetDetails} />
        <Route path='/pet/details/:petId/edit' component={EditPetDetails} />
        <Route path='/pet/create' component={CreatePet} />
        <Route path='/pet/:petId/delete' component={DeletePet} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;

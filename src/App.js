import React from 'react';
import './styles/App.scss';
import Navbar from './components/Elements/Navbar';
import Contacts from './components/Contacts/Contacts';
import { Provider } from 'react-redux';
import store from './store'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './components/Contacts/Contact';
import AddContact from './components/Contacts/AddContact';
import EditContact from './components/Contacts/EditContact';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container my-5">
            <div className="py-5">
              <Switch>
                <Route exact path='/' component={Contacts} />
                <Route exact path='/contacts/add' component={AddContact} />
                <Route exact path='/contacts/edit/:id' component={EditContact} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

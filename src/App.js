import React from 'react';
import GlobalStyle from './assets/global';
import Navbar from './components/Navbar/Navbar'
import { store } from './store'
import { Provider } from 'react-redux'
import { HomeContainer } from './pages/Home/HomeContainer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllBooks from './pages/AllBooks/AllBooks';
import Book from './pages/Book/Book';

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/allbook" component={AllBooks} />
          <Route path="/book/:id" component={Book} />
        </Switch>
      </Router>
    </Provider>)
};

export default App;



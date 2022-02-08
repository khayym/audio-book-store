import React from 'react';
import GlobalStyle from './assets/global';
import Navbar from './components/Navbar/Navbar'
import { store } from './store'
import { Provider } from 'react-redux'

const App = () => {

  console.log('appdan-store', store);
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Navbar />
      <h1>app js</h1>
    </Provider>)
};

export default App;


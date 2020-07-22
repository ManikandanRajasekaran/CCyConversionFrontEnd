import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CustomerForm from './Crosspay/CustomerForm';
import CustTransaction from './Crosspay/CustTransaction';
import { Provider } from 'react-redux';
import store from './Crosspay/store';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path='/custtransaction' component={CustTransaction} />
            <Route exactpath='/' component={CustomerForm} />

          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

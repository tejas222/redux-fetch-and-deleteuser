import React from 'react';
import { Provider } from 'react-redux';
import UserContainer from './components/UserContainer';
import store from './user/store';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <UserContainer />
      </div>
    </Provider>
  );
};

export default App;

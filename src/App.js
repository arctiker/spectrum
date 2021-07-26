import React from 'react';
import { Switch, Route } from 'react-router';

import './App.css';
import Homepage from './pages/homepage/homepage.component';
import About from './pages/about/about.component';
import Services from './pages/services/services.component';
import Header from './components/header/header.component';
import Internet from './pages/internet/internet.component';
import LoginForm from './pages/signin-out/LoginForm';


function App() {
  
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path ='/' component={Homepage} />
        <Route path='/About' component={About} />
        <Route path='/Services' component={Services} />
        <Route path='/internet' component={Internet} />
        <Route path='/LoginForm' component={LoginForm} />
      </Switch>
    </div>
    
  );
}

export default App;

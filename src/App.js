import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './Home';
import Header from './Component/Header';
import Footer from './Component/Footer'
import SignIn from './SignIn';
import Video from './Video';

function App() {
  return (
    <>
    <Header/>
     <Switch>
       <Route exact path='/Home' component={Home} />
       <Route exact path='/SignIn' component={SignIn} />
       <Route exact path='/Video' component={Video} />
     </Switch>
     <Footer/>
    </>
  );
}
export default App;

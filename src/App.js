import React from 'react'

import { Redirect, Route, Switch } from "react-router-dom";
import Auth from './components/Auth/Auth';
import { useSelector } from "react-redux";


const App = () => {
    const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (

        <Route path="/auth" >
          <Auth />
        </Route>
   
    
  )
}

export default App
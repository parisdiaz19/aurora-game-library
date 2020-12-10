import React, { useEffect } from 'react';
//Components and Pages
import Home from './pages/Home';
import GlobalStyles from "./components/GlobalStyles";
import {Route} from 'react-router-dom';
import GameDetail from './components/GameDetail';
import Nav from './components/Nav';


function App() {
   return (
    <div className="App">
      <GlobalStyles/>
      <Nav />
      <Route path={['/game/:id', "/"]}>  
        <Home />
      </Route>
    </div>
  );
}

export default App;

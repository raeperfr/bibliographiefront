import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Accueil from './pages/accueil'
import './style.css'


export default class App extends React.Component{
  render(){
    return(
      <Router>
        <div>
          <div className="header">
            <div className="logo">
              <h1>Bibliographie</h1>
            </div>
              <nav className="navigation">
              <ul>
                <li>
                  <Link to="/">Accueil</Link>
                </li>
                <li>
                  <Link to="/">Selection par Auteur</Link>
                </li>
                <li>
                  <Link to="/">Selection par Thématique</Link>
                </li>
                <li>
                  <Link to="/">Ajout</Link>
                </li>
              </ul>
            </nav>
          </div>
          
          <div className="corps">
            <Switch>
              <Route path="/">
                <Accueil />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}
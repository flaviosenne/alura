import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import './index.css';

import CadastroVideo from './pages/cadastro/Videos';
import Home from './pages/home/App';
import CadastroCategoria from './pages/categoria/categoria';

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path = '/cadastro/video' component = {CadastroVideo}/>
    <Route path = '/cadastro/categoria' component = {CadastroCategoria}/>
    <Route path = '/' exact component = {Home}/>
    <Route component = {() => (<div>Pagina 404</div>)}/>
  </Switch>  
  </BrowserRouter>,
  
  
  // <React.StrictMode>
  // </React.StrictMode>,
  document.getElementById('root')
);
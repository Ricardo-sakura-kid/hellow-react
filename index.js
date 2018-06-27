import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './modules/App';
//引入About和Repos组件
import About from './modules/About';
import Repos from './modules/Repos';

//增加两个路由
ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/about" component={About}/>
            <Route path="/repos" component={Repos}/>
        </Route>
    </Router>
),document.getElementById('app'));
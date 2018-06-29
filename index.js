import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from './modules/App';
//引入About和Repos组件
import About from './modules/About';
import Repos from './modules/Repos'
import Home from './modules/Home';

//增加两个路由
ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>

            <IndexRoute component={Home}/>

            <Route path="/about" component={About}/>
            <Route path="/repos" component={Repos}>
                <Route path="/repos/:userName/:repoName" component={Repos}/>
            </Route>
            {/*Repo Route*/}
            {/*path属性指定了路由的匹配规则*/}

        </Route>
    </Router>
),document.getElementById('app'));
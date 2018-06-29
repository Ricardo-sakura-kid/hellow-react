import React from 'react';

//导入Link组件
//import { Link } from 'react-router';
import NavLink from './NavLink';
import Home from "./Home";
import { IndexLink } from 'react-router';

//定义App组件
export default class App extends React.Component {
    constructor(props) {
        super(props);

    }
    render(){
        return (
            <div>
                <h1>React Router Tutorial</h1>
                <ul role="nav">
                    {/*<li><NavLink to="/">Home</NavLink></li>*/}

                    {/* add here*/}
                    <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>

                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/repos">Repos</NavLink></li>
                </ul>
                <div>{this.props.children}</div>
            </div>
        );
    }
}
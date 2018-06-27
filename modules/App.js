import React from 'react';

//导入Link组件
import { Link } from 'react-router';

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
                    <li><Link to="/about" activeStyle={{color:'red'}}>About</Link></li>
                    <li><Link to="/repos" activeStyle={{color:'red'}}>Repos</Link></li>
                </ul>
                <div>{this.props.children}</div>
            </div>
        );
    }
}
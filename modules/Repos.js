import React from 'react';
import { Link } from 'react-router';
import NavLink from "./NavLink";
import { browserHistory } from 'react-router';

export default class Repos extends React.Component{
    constructor(props){
        super(props);
        this.handlSubmin = this.handlSubmin.bind(this);
    }
    handlSubmin(event){
        event.preventDefault();
        const userName = event.target.elements[0].value;
        const repo = event.target.elements[1].value;
        const path = `/repos/${userName}/${repo}`;
        browserHistory.push(path);
    }
    render(){
        return(
            <div>
                <h2>Repos</h2>
                <ul>
                    <li><NavLink to="repos/reactjs/react-router">React Router</NavLink></li>
                    <li><NavLink to="repos/facebook/react">React</NavLink></li>

                    {/* 表单 */}
                    <li>
                        <form onSubmit={this.handlSubmin}>
                            <input type="text" placeholder="userName"/>/{' '}
                            <input type="text" placeholder="repos"/>{' '}
                            <button type="submit">Go</button>
                        </form>
                    </li>
                </ul>
                { this.props.params.repoName }
            </div>
        );
    }
}
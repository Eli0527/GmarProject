import React, { Component, Fragment } from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import authService from './AuthorizeService';
import { ApplicationPaths } from './ApiAuthorizationConstants';
import './navBar.css';
export class LoginMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false,
            userName: null
        };
    }

    componentDidMount() {
        this._subscription = authService.subscribe(() => this.populateState());
        this.populateState();
    }

    componentWillUnmount() {
        authService.unsubscribe(this._subscription);
    }

    async populateState() {
        const [isAuthenticated, user] = await Promise.all([authService.isAuthenticated(), authService.getUser()])
        this.setState({
            isAuthenticated,
            userName: user && user.name

        });
    }

    render() {
        const { isAuthenticated, userName } = this.state;
        if (!isAuthenticated) {
            const registerPath = `${ApplicationPaths.Register}`;
            const loginPath = `${ApplicationPaths.Login}`;
            return this.anonymousView(registerPath, loginPath);
        } else {
            const profilePath = `${ApplicationPaths.Profile}`;
            const logoutPath = { pathname: `${ApplicationPaths.LogOut}`, state: { local: true } };
            return this.authenticatedView(userName, profilePath, logoutPath);
        }
    }

    authenticatedView(userName, profilePath, logoutPath) {
        return (<Fragment className="navbar">

            <NavItem>
                <NavLink tag={Link} className="text-dark" to={logoutPath}>יציאה מהמערכת</NavLink>
            </NavItem>
            <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/goals">יעדים</NavLink>
            </NavItem>
            <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/queries">שאילתות</NavLink>
            </NavItem>
            <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/mealData">נתוני ארוחות</NavLink>
            </NavItem>
            <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/homePage">דף הבית</NavLink>
            </NavItem>
            <NavItem>
                <NavLink id="user" tag={Link} className="text-dark" to={profilePath}>{userName} ברוכים הבאים </NavLink>
            </NavItem>
        </Fragment>);

    }

    anonymousView(registerPath, loginPath) {
        return (<Fragment>
            <NavItem>
                <NavLink tag={Link} className="text-dark" to={registerPath}>הרשמה</NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} className="text-dark" to={loginPath}>כניסה למערכת</NavLink>
            </NavItem>
        </Fragment>);
    }
}

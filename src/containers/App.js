/**
 * Created by Busarov Ivan Spaider629@gmail.com on 11/22/2016.
 */
import React from 'react'
import '../css/main.css'
import { connect } from 'react-redux'
import Header from '../components/Header'
import LoginForm from './LoginForm'

const mapStateToProps = (state) => {
    const user = state.user;
    return {
        user
    }
};

let Main = ({ user }) => {
    if( user.displayName ) {
        return(
            <div>
                <Header/>
                <div className="login">
                    <h1>Hello {user.displayName}</h1>
                </div>
            </div>
        );
    } else {
        return(
            <div>
                <Header/>
                <div className="login">
                    <LoginForm/>
                </div>
            </div>
        );
    }

};

Main = connect(
    mapStateToProps,
)(Main);


export default Main;
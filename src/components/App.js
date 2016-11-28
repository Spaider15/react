/**
 * Created by Busarov Ivan Spaider629@gmail.com on 11/22/2016.
 */
import React from 'react'
import '../css/main.css'
import Header from './Header'
import LoginForm from '../containers/LoginForm'

const Main = (props) => {
        return(
            <div>
                <Header user={props.user}/>
                <div className="login">
                    <LoginForm />
                </div>
            </div>
        );
};

export default Main;
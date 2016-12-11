/**
 * Created by Busarov Ivan Spaider629@gmail.com on 11/22/2016.
 */
import React from 'react';
import '../css/main.css';
import { connect } from 'react-redux';
import Header from '../components/Header';
import LoginForm from './LoginForm';
import TablePage from './TablePage';
import ModalCreateWindow from './ModalCreateWindow';
import ModalEditWindow from './ModalEditWindow';

const mapStateToProps = ({user}) => { return { user } };

let Main = ({ user }) => {
    if( user.displayName ) {
        return(
            <div>
                <Header/>
                <TablePage/>
                <ModalCreateWindow/>
                <ModalEditWindow/>
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
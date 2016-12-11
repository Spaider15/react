/**
 * Created by Busarov Ivan Spaider629@gmail.com on 12/9/2016.
 */
import React from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { actionOnModalWindow } from '../actions';
import Form from '../components/Form'

const ModalWindow = ({ show, close }) => {
    const submit = (e, options) => {
        e.preventDefault();
        console.log(options.reduce( (acc,item) => Object.assign(acc, { [item.id] : item.value }), {} ))
    };
    return(
        <Modal show={show} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>Создание новой записи</Modal.Title>
                <br/>
                <Form submit={submit}/>
            </Modal.Header>
        </Modal>
    )
};

const mapStateToProps = ({table}) => {
    return { show : table.createModalWindow }
};

const mapDispatchToProps = (dispatch) => {
    return {
        close : () => {
            dispatch(actionOnModalWindow('createModalWindow', false))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);
/**
 * Created by Busarov Ivan Spaider629@gmail.com on 12/9/2016.
 */
import React from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { actionOnModalWindow } from '../../actions';
import AssemblyForm from '../../components/AssemblyForm'

const ModalWindow = ({ show, data, close }) => {
    const submit = (e, options) => {
        e.preventDefault();
        console.log(options.reduce( (acc,item) => Object.assign(acc, { [item.id] : item.value }), {} ))
    };
    return(
        <Modal show={show} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>Создание новой записи</Modal.Title>
                <br/>
                <AssemblyForm submit={submit} defaults={data}/>
            </Modal.Header>
        </Modal>
    )
};

const mapStateToProps = ({table}) => {
    return {
        show : table.editModalWindow,
        data : table.assembly[table.activeRow]
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        close : () => {
            dispatch(actionOnModalWindow('editModalWindow', false))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);
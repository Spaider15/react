/**
 * Created by Busarov Ivan Spaider629@gmail.com on 12/9/2016.
 */
import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { actionOnModalWindow } from '../actions';

const TableButtons = ({ editable, open }) => {
  const modalAction = (modal) => {
      open(modal)
    };
  return(
      <div>
          <Button
              bsStyle="primary"
              onClick={() => modalAction('createModalWindow')}
          >
              Создать
          </Button>
          {'  '}
          <Button
              bsStyle="primary"
              onClick={() => modalAction('editModalWindow')}
              disabled={!editable}
          >
              Изменить
          </Button>
          {'  '}
          <Button
              bsStyle="primary"
              onClick={modalAction}
              disabled={!editable}
          >
              Удалить
          </Button>
      </div>
  )
};

const mapStateToProps = ({table}) => { return { editable : table.editable } };
const mapDispatchToProps = (dispatch) => {
    return {
        open : (modal) => {
            return dispatch(actionOnModalWindow(modal, true))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TableButtons);
import React from 'react'
import Table from '../components/Table'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchData, filterBy, activateTableRow } from '../actions/index';

const TablePage = (props) => {
    return (
        <div>
            <h2>Доставка мебели</h2>
            <Table {...props} />
        </div>
    )
};

const mapStateToProps = ({table}) => table;
const mapDispatchToProps = (dispatch) => bindActionCreators({fetchData, filterBy, activateTableRow}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TablePage)

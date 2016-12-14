import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchData, filterBy, activateTableRow } from '../actions/index';
import AssemblyTable from './assemblyTable';

const TablePage = (props) => {
    return (
        <div>
            <AssemblyTable {...props} />
        </div>
    )
};

const mapStateToProps = ({table, user}) => {
    return {
        table,
        user
    }
};
const mapDispatchToProps = (dispatch) => bindActionCreators({fetchData, filterBy, activateTableRow}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TablePage)

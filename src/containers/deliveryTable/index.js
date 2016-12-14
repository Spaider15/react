import React from 'react'
import {Column, Cell} from 'fixed-data-table';
import ResponsiveTableWrapper from '../../components/ResponsiveTableWrapper'
import TableButtons from '../TableButtons'
import ModalCreateWindow from './ModalCreateWindow';
import ModalEditWindow from './ModalEditWindow';

function DataCell ({data, rowIndex, columnKey, ...props}) {
    return <Cell {...props}> {data[rowIndex][columnKey]} </Cell>
}

class assemblyTable extends React.Component {
    constructor(props){
        super(props);
        this.handleFilterStringChange = this.handleFilterStringChange.bind(this);
        this.filterData = this.filterData.bind(this);
        this.isActiveRow = this.isActiveRow.bind(this);
        this.activateRow = this.activateRow.bind(this);
    }

    componentWillMount () {
        this.props.fetchData('delivery')
    }

    handleFilterStringChange (e) {
        e.preventDefault();
        this.props.filterBy(e.target.value)
    }

    doesMatch (str) {
        return (key) => (key + '').toLowerCase().indexOf(str) !== -1
    }

    filterData () {
        const {delivery, filterString} = this.props.table;
        const str = filterString.toLowerCase();
        return str !== ''
            ? delivery.filter((r) => Object.values(r).some(this.doesMatch(str)))
            : delivery
    }

    activateRow(e, index) {
        if ( this.props.table.activeRow === index ) return this.props.activateTableRow(null);
        this.props.activateTableRow(index);
    }

    isActiveRow(index) {
        if ( index === this.props.table.activeRow ) return 'selected';
        return '';
    }

    render () {
        const { isFetching } = this.props.table;
        const { filterBy, filterString } = this.props;
        const data = this.filterData();
        return (
            <div>
                <ModalCreateWindow/>
                <ModalEditWindow/>
                <h2>Сборка мебели</h2>
                <br />

                <input className='filter-input' value={filterString}
                       onChange={this.handleFilterStringChange}
                       type='text' placeholder='Фильтр'
                       autoCorrect='off' autoCapitalize='off' spellCheck='false' />
                <br />

                <TableButtons/>

                {isFetching && data.length === 0 &&
                <div className='loader-box'></div>}
                {!isFetching && data.length === 0 &&
                <h3 className='center'>No Matching Results :( </h3>}

                <ResponsiveTableWrapper
                rowHeight={50}
                headerHeight={50}
                onRowClick={this.activateRow}
                rowClassNameGetter={this.isActiveRow}
                rowsCount={data.length}>

                </ResponsiveTableWrapper>

            </div>
        )
    }
}

export default assemblyTable;

import React from 'react'
// import ResponsiveTableWrapper from '../../components/ResponsiveTableWrapper'
import TableButtons from '../TableButtons'
import {Cell} from 'fixed-data-table';
import ModalCreateWindow from './ModalCreateWindow';
import ModalEditWindow from './ModalEditWindow';
import AssemblyTable from '../../components/Tables/AssemblyTable';
import DeliveryTable from '../../components/Tables/DeliveryTable';

function DataCell ({data, rowIndex, columnKey, ...props}) {
    return <Cell {...props}> {data[rowIndex][columnKey]} </Cell>
}

class assemblyTable extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          table : this.props.user.table
        };
        this.handleFilterStringChange = this.handleFilterStringChange.bind(this);
        this.filterData = this.filterData.bind(this);
        this.isActiveRow = this.isActiveRow.bind(this);
        this.activateRow = this.activateRow.bind(this);
    }

    componentWillMount () {
        this.props.fetchData(this.state.table)
    }

    handleFilterStringChange (e) {
        e.preventDefault();
        this.props.filterBy(e.target.value)
    }

    doesMatch (str) {
        return (key) => (key + '').toLowerCase().indexOf(str) !== -1
    }

    filterData () {
        const table = this.props.table[this.state.table]; // assembly or delivery
        const { filterString } = this.props.table;
        const str = filterString.toLowerCase();
        return str !== ''
            ? table.filter((r) => Object.values(r).some(this.doesMatch(str)))
            : table
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
        const isAssembly = this.state.table === 'assembly';
        const Table = isAssembly ? AssemblyTable : DeliveryTable;
        const { isFetching } = this.props.table;
        const { filterBy, filterString } = this.props;
        const data = this.filterData();
        const props = { data, activateRow : this.activateRow, DataCell, isActiveRow : this.isActiveRow };
        return (
            <div>
                <ModalCreateWindow/>
                <ModalEditWindow/>
                <h2 style={{padding : "5px"}}>Доставка мебели</h2>

                <input className='filter-input' value={filterString}
                       onChange={this.handleFilterStringChange}
                       type='text' placeholder='Фильтр'
                       autoCorrect='off' autoCapitalize='off' spellCheck='false' />
                <br />

                <TableButtons style={{ padding : "20px" }}/>

                {isFetching && data.length === 0 &&
                <div className='loader-box'></div>}
                {!isFetching && data.length === 0 &&
                <h3 className='center'>No Matching Results :( </h3>}

                <AssemblyTable {...props}/>

            </div>
        )
    }
}

export default assemblyTable;

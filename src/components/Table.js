import React from 'react'
import {Column, Cell} from 'fixed-data-table';
import ResponsiveTableWrapper from './ResponsiveTableWrapper'
import TableButtons from '../containers/TableButtons'

function DataCell ({data, rowIndex, columnKey, ...props}) {
    return <Cell {...props}> {data[rowIndex][columnKey]} </Cell>
}



class TableStk extends React.Component {
    constructor(props){
        super(props);
        this.handleFilterStringChange = this.handleFilterStringChange.bind(this);
        this.filterData = this.filterData.bind(this);
        this.isActiveRow = this.isActiveRow.bind(this);
        this.activateRow = this.activateRow.bind(this);
    }

    componentWillMount () {
        this.props.fetchData()
    }

    handleFilterStringChange (e) {
        e.preventDefault();
        this.props.filterBy(e.target.value)
    }

    doesMatch (str) {
        return (key) => (key + '').toLowerCase().indexOf(str) !== -1
    }

    filterData () {
        const {data, filterString} = this.props;
        const str = filterString.toLowerCase();
        return str !== ''
            ? data.filter((r) => Object.values(r).some(this.doesMatch(str)))
            : data
    }

    activateRow(e, index) {
        if ( this.props.activeRow === index ) return this.props.activateTableRow(null);
        this.props.activateTableRow(index);
    }

    isActiveRow(index) {
        if ( index === this.props.activeRow ) return 'selected';
        return '';
    }

    render () {
        const { isFetching, filterBy, filterString } = this.props;
        const data = this.filterData();
        return (
            <div>

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
                <Column
                    header={<Cell>№</Cell>}
                    cell={props => (
                        <Cell {...props}>
                            {props.rowIndex + 1}
                        </Cell>
                    )}
                    flexGrow={0.1}
                    width={50} />
                <Column
                    columnKey='date'
                    header={<Cell>Дата</Cell>}
                    cell={<DataCell data={data}/>}
                    flexGrow={0.3}
                    width={50} />
                <Column
                    columnKey='route'
                    header={<Cell>Маршрутный номер</Cell>}
                    cell={<DataCell data={data}/>}
                    flexGrow={1}
                    width={50} />
                <Column
                    columnKey='stk'
                    header={<Cell>СТК</Cell>}
                    cell={<DataCell data={data}/>}
                    flexGrow={0.5}
                    width={50} />
                <Column
                    columnKey='city'
                    header={<Cell>Направление</Cell>}
                    cell={<DataCell data={data}/>}
                    flexGrow={1}
                    width={50} />
                <Column
                    columnKey='responsible'
                    header={<Cell>Отвественный</Cell>}
                    cell={<DataCell data={data}/>}
                    flexGrow={1}
                    width={50} />
                <Column
                    columnKey='price'
                    header={<Cell>Сумма</Cell>}
                    cell={<DataCell data={data}/>}
                    flexGrow={0.5}
                    width={50} />
                <Column
                    columnKey='stock'
                    header={<Cell>Акция</Cell>}
                    cell={<DataCell data={data}/>}
                    flexGrow={0.5}
                    width={50} />
                <Column
                    columnKey='percent'
                    header={<Cell>Проценты</Cell>}
                    cell={<DataCell data={data}/>}
                    flexGrow={1}
                    width={50} />
                <Column
                    columnKey='operator'
                    header={<Cell>Диспетчерские</Cell>}
                    cell={<DataCell data={data}/>}
                    flexGrow={1}
                    width={50} />
                <Column
                    columnKey='amount'
                    header={<Cell>Итого</Cell>}
                    cell={<DataCell data={data}/>}
                    flexGrow={0.5}
                    width={50} />
                <Column
                    columnKey='note'
                    header={<Cell>Комментарий</Cell>}
                    cell={<DataCell data={data}/>}
                    flexGrow={1}
                    width={50} />
                <Column
                    columnKey='closed'
                    header={<Cell>Долг</Cell>}
                    cell={<DataCell data={data}/>}
                    flexGrow={1}
                    width={50} />
                </ResponsiveTableWrapper>

            </div>
        )
    }
}

export default TableStk;

/**
 * Created by Spaider on 11.12.2016.
 */
import React from 'react';
import {Column, Cell} from 'fixed-data-table';
import ResponsiveTableWrapper from '../ResponsiveTableWrapper'
export default ({data, DataCell, activateRow, isActiveRow}) => {
    return(
        <ResponsiveTableWrapper
            rowHeight={50}
            headerHeight={50}
            onRowClick={activateRow}
            rowClassNameGetter={isActiveRow}
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
                header={<Cell>Маршрутный №</Cell>}
                cell={<DataCell data={data}/>}
                flexGrow={1}
                width={50} />
            <Column
                columnKey='stk'
                header={<Cell>СТК</Cell>}
                cell={<DataCell data={data}/>}
                flexGrow={1}
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
                flexGrow={1}
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
    )
}
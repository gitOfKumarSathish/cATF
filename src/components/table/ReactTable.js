import React, { useMemo } from 'react'
import { useTable, useGlobalFilter, useFilters, usePagination, useSortBy } from 'react-table'
import { GlobalFilter } from './GlobalFilter'
import { ColumnFilter } from './ColumnFilter'

const ReactTables = (props) => {
    let newChangeProps = props.tableData || [];
    const apiHeadersList = props.tableListAPIHandler
    let headerResponseList = [...new Set(newChangeProps.flatMap(x => Object.keys(x)))];
    let setupArray = [];
    let removeHeaders = [];
    switch (apiHeadersList) {
        case 'getConfiguredGroups':
            removeHeaders = ['ssid']
            break;
        case 'getDevices':
            removeHeaders = ["connectionStatus", "ipAddress", "ssid", "deviceId", "userName", "version", "networkParams", 'connectionControl', 'gpsParams','ssidDetails']
            break;
        default:
            console.log('No api Headers Found')
            break;
    }
    // * Removing unwanted Headers by comparing with removeHeaders Array
    headerResponseList = headerResponseList.filter(val => !removeHeaders.includes(val));
    headerResponseList.forEach(actualColumnHeader => {
        if ((actualColumnHeader !== 'networkParams')) {
            let myObj = {
                Header: actualColumnHeader,
                accessor: actualColumnHeader,
                Filter: ColumnFilter,
                disableFilters: true
            }
            setupArray.push(myObj)
            return setupArray;
        }
    })
    const columns = useMemo(() => setupArray, []);
    const data = useMemo(() => newChangeProps, []);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        prepareRow,
        state,
        pageOptions,
        setPageSize,
        setGlobalFilter,
    } = useTable({
        columns,
        data
    }, useFilters,
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    const { globalFilter, pageIndex, pageSize } = state;
    return (
        <div className='tableAlignStyle'>
            <div className='headSection'>
                <div className='PerPageCount'>
                    show{' '}
                    <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                        {[10, 20, 50, 100].map(pageSize => {
                            return <option key={pageSize} value={pageSize}>{pageSize}</option>
                        })}
                    </select>
                    {' '} entries
                </div>
                <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            </div>
            <table {...getTableProps()}>
                <thead>

                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps)}>{column.render('Header')}
                                        {column.isSorted ? (column.isSortedDesc ? <span><i className="fa fa-sort-amount-asc" aria-hidden="true"></i></span> : <span><i className="fa fa-sort-amount-desc" aria-hidden="true"></i></span>) : ''}
                                        <div>{column.canFilter ? column.render('Filter') : null}</div>
                                    </th>
                                )
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell, index) => {
                                    <td>{index}</td>
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className='footerSectionTable'>
                <div className='pageShowing'>
                    Showing{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>
                    {' '}entries
                </div>
                <div className='buttonSectionTable'>
                    <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
                    <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default ReactTables
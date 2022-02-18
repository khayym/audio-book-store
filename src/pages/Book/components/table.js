import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import styled from 'styled-components';

export const BookTable = ({ bookShortInfo }) => {
    return (
        <TableContainer>
            <Table sx={{ minWidth: 200 }} aria-label="caption table">
                <TableBody>
                    <TableRow>
                        <TableCellName component="th" scope="row">АВТОР</TableCellName>
                        <TableCellValue component="th" scope="row">{bookShortInfo.authors.map(e => e.name)}</TableCellValue>
                    </TableRow>
                    <TableRow>
                        <TableCellName component="th" scope="row">ЧИТЕЦЬ</TableCellName>
                        <TableCellValue component="th" scope="row">{bookShortInfo.narrators.map(e => e.name)}</TableCellValue>
                    </TableRow>
                    <TableRow>
                        <TableCellName component="th" scope="row">ЖАНР</TableCellName>
                        <TableCellValue component="th" scope="row">{bookShortInfo.genre.map(e => (e.name.charAt(0).toUpperCase() + e.name.slice(1)) + ',')}</TableCellValue>
                    </TableRow>
                    <TableRow>
                        <TableCellName component="th" scope="row">ТРИВАЛІСТЬ</TableCellName>
                        <TCdateAndDir component="th" scope="row">{Math.floor(bookShortInfo.duration / (60 * 60))} час</TCdateAndDir>
                    </TableRow>
                    <TableRow>
                        <TableCellName component="th" scope="row">ВИДАННЯ</TableCellName>
                        <TCdateAndDir component="th" scope="row">{bookShortInfo.year + '-' + bookShortInfo.second_year}</TCdateAndDir>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}


const TableCellName = styled(TableCell)`
    font-size: 11px !important;
    color: #90909e!important;
    text-transform: uppercase!important;
    padding: 5px 15px 5px 0!important;
    letter-spacing: .55px!important;
    border-bottom:0px transparent !important;
`

const TCdateAndDir = styled(TableCellName)`
    font-size:15px !important;
    vertical-align: baseline;
   
`

const TableCellValue = styled(TCdateAndDir)`
    color:#100f1d !important;
`
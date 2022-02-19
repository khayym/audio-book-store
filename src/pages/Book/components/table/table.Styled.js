import { TableCell } from "@mui/material"
import styled from "styled-components"

export const TableCellName = styled(TableCell)`
    font-size: 10px !important;
    color: #90909e!important;
    text-transform: uppercase!important;
    padding: 5px 15px 5px 0!important;
    letter-spacing: .55px!important;
    border-bottom:0px transparent !important;
`

export const TCdateAndDir = styled(TableCellName)`
    font-size:12px !important;
    vertical-align: baseline;
    font-weight:600 !important;
   
`

export const TableCellValue = styled(TCdateAndDir)`
    color:#100f1dd8 !important;
`
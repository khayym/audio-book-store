import styled from "styled-components";
import { Button } from '@mui/material'

export const Btn = styled(Button)`
    display: flex!important;
    justify-content: space-between!important;
    padding: 3px 17px!important;
    background-color: #fe7664!important;
    border-radius: 9px!important;
    width: 207px!important;
    color: #f2f2f2!important;
    font-size: 18px!important;
    align-items: center!important;
    margin-right: 10px!important;
    transition: box-shadow .3s ease-in-out !important;

    img{
    width: 94px;
    height: 24px;
    margin-top:3px;
    }
    &:hover{
        box-shadow:0 5px 7px 0 rgb(0 0 0 / 20%) !important;
    }
`


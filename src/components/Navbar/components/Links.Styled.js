import { Box, Modal } from '@mui/material';
import styled from 'styled-components';

export const Modals = styled(Modal)`
     .MuiBackdrop-root{
        background-color:transparent;
       
     }
`

export const LinkContainer = styled(Box)`
    height:auto;
    position:absolute;
    width:100%;
    transition: all 1s linear;
    z-index:999;
    background-color:#f8f8f8;
    top:6.65rem;
    box-shadow: 0px 500px 0px 500px #00000065 !important;
    -webkit-box-shadow: 0px 500px 0px 500px #00000065 !important;
    -moz-box-shadow: 0px 500px 0px 500px #00000065!important;
    /* transition:opacity 0.2s ; */

`

export const Ul = styled.ul`
    display:flex;
    flex-wrap: wrap;
    padding: 30px 165px 50px 165px;
    
    li{
        margin: 15px 50px 15px 0;
    }

    a{
    display: inline-block;
    font-size: 19px;
    padding-bottom: 5px;
    line-height: 1.05;
    text-decoration: none;
    color: #464650;
    border-bottom: 2px solid transparent;
    transition:all 0.3s;
    font-weight:600;

    &:hover{
            border-bottom: 2px solid #fe7664;
        }
    }
`
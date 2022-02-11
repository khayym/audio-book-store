import styled from 'styled-components';
import { css } from 'styled-components';


export const LinkContainer = styled.div`
    height:20rem;
    position:absolute;
    width:100%;
    transition:opacity 0.2s ;
    z-index:999;
    ${porps => porps.openStatus ?

        css`
        visibility:visible;
        box-shadow: 0px 500px 0px 500px #00000065;
        -webkit-box-shadow: 0px 500px 0px 500px #00000065;
        -moz-box-shadow: 0px 500px 0px 500px #00000065;;
        background-color:#f8f8f8; `
        :

        css`
        visibility:hidden;
        opacity:0%;
         `};
`

export const Ul = styled.ul`
    display:flex;
    flex-wrap: wrap;
    padding: 30px 165px;
    
    li{
        margin:10px;
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


    &:hover{
            border-bottom: 2px solid #fe7664;
        }
    }
`
import styled from "styled-components";
import { LazyLoadImage } from 'react-lazy-load-image-component';


export const Div = styled.div`
width: 22rem;
position: relative;
max-width: 380px;
padding: 0 0.8rem !important;
border-radius: 10px;
outline: 0;
-webkit-animation: 1s fadein;
animation: 1s fadein;




h2{
    bottom: 15px;
    position: absolute;
    left: 35px;
    right: 35px;
    color: #fff;
    font-size: 26px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
`

export const LentImg = styled(LazyLoadImage)`
        max-width: 100%;
    border-radius: 10px;
    vertical-align: middle;
    border-style: none;
`
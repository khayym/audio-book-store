import { BsFillPlayCircleFill } from "react-icons/bs"
import styled from "styled-components"

export const PlayButtonEW = styled(BsFillPlayCircleFill)`
    width: 42px;
    height: 42px;
    display: inline-block;
    text-align: center;
    line-height: 38px;
    font-size: 25px;
    color:#ff5740;
`


export const PlayButtonWrapper = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    margin-top:20px;
    cursor:pointer;

    span{
        color:#fe7664;
        line-height: 38px;
        font-size: 18px;
        margin-left:.7rem;
    }
`
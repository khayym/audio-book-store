import styled from "styled-components";
import { BsFillPauseCircleFill } from 'react-icons/bs';
import AudioPlayer from 'react-h5-audio-player';

export const PauseButtonCustom = styled(BsFillPauseCircleFill)`
    width: 42px;
    height: 42px;
    display: inline-block;
    text-align: center;
    line-height: 38px;
    font-size: 25px;
    color:#ff5740 !important;

`
export const AudioWrapper = styled.div`
   
`

export const CAudioPlayer = styled(AudioPlayer)`
    border:0px solid transparent !important;
    box-shadow:none;

    .rhap_progress-filled{
    background-color:#ff5740;
    }


    .rhap_current-time{
    position: absolute;
    left: 0;
    top: 24px;
    color:#9999;
    font-size:13px;
    margin-left:0.7rem;
    margin-top:0px
    }

    .rhap_total-time{
    position: absolute;
    right: 0;
    top: 24px;
    margin-right: 0.8rem;
    color:#9999;
    font-size:13px;
    margin-top:0px;
    }

    .rhap_progress-bar{
    height:4px;
    border-radius:5px;
    background-color:#dfe0ed;
    }

    .rhap_progress-indicator{
    box-sizing: border-box;
    position: absolute;
    z-index: 3;
    width: 10px;
    height: 10px;
    margin-left: -3px;
    top: -3.4px;
    background-color: #ff5740;
    border-radius: 50px;
    }

    .rhap_progress-section{
    display: flex;
    position: relative;
    flex-wrap: nowrap;
    align-items: center;
    margin-left: 0.3rem;
    width:14rem;
    border: 0px solid transparent;
    /* border:1px solid #000; */
    }

    .rhap_main-controls{
    button{
        margin:0px;
    }
    }
   


    .rhap_play-pause-button {
    font-size: 40px;
    width: 44px;
    height: 45px;
    }

    .rhap_additional-controls,.rhap_volume-controls{
    display: none;
    }

    .rhap_controls-section {
    margin-right: 0px;
    justify-content:flex-end !important;
    }


`
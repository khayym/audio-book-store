import React, { useEffect } from 'react'
import 'react-h5-audio-player/lib/styles.css';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { PlayButtonEW } from '../playButton/PlayButton.Styled';
import { CAudioPlayer, PauseButtonCustom } from './CustomAudioPlayer.Styled';


const CustomIcons = {
    play: <PlayButtonEW />,
    pause: <PauseButtonCustom />
}

const CustomAudioPlayer = () => {

    const { audioStatus } = useSelector(state => state.audio);

    useEffect(() => {
        console.log(audioStatus);

    }, [audioStatus])


    return (
        <AudioWrapper>
            <CAudioPlayer layout="horizontal-reverse" src={audioStatus}
                showJumpControls={false}
                customVolumeControls={[]}
                customAdditionalControls={[]}
                customIcons={CustomIcons}
                showDownloadProgress={false}
                autoPlay
            />
        </AudioWrapper>
    )
}

export default CustomAudioPlayer


const AudioWrapper = styled.div`
    background-color:#d49999;
`
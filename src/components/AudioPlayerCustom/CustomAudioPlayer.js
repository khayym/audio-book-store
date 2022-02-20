import React, { useEffect } from 'react'
import 'react-h5-audio-player/lib/styles.css';
import { useSelector } from 'react-redux';
import { PlayButtonEW } from '../playButton/PlayButton.Styled';
import { AudioWrapper, CAudioPlayer, PauseButtonCustom } from './CustomAudioPlayer.Styled';


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
            <CAudioPlayer layout="horizontal-reverse" src={audioStatus.sample.audio_url}
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



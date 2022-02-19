import React from 'react'
import { PlayButtonEW, PlayButtonWrapper } from './PlayButton.Styled'

const PlayButton = ({ children }) => {
    return (
        <PlayButtonWrapper>
            <PlayButtonEW />
            <span>{children}</span>
        </PlayButtonWrapper>
    )
}

export default PlayButton


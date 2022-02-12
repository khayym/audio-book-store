import React from 'react'
import styled from 'styled-components'

const Loading = () => {
    return (
        <LoadingContainer><h1>Loading...</h1></LoadingContainer>
    )
}

export default Loading

const LoadingContainer = styled.div`
    
    width: 100%;
    height: 100vh;
    background-color:#0f0f0f;
    display:flex;
    align-items: center;
    justify-content: center;
    color:#fff;
`
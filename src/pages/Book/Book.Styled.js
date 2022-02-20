import styled from "styled-components"

export const Section = styled.div`
padding-right: 15px;
padding-left: 15px;
margin-right: -15px;
margin-left: -15px;
margin: 0 0 200px;
-webkit-animation: 1s fadein;
animation: 1s fadein;
/* border: 1px solid #000; */
display: flex;

`

export const H1 = styled.h1`
color:#464650;
font-size: 36px;
margin-bottom: 20px;
`

export const ImgDiv = styled.div`
width:41.66%;
height:31.688rem;
flex: 0 0 41.66%;
max-width: 41.66%;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
img{
    width:96%;
}


`

export const Div = styled.div`
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
display:flex;
flex: 0 0 58.33%;
max-width: 58.33%;
padding-left:15px;
padding-right:15px;
/* width: 58.33%; */
flex-direction:row;
justify-content:space-between !important;
`

export const ButtonGroup = styled.div`
display:flex;
margin-top:50px;
`
export const ButtonPlayAudio = styled.button`
border:0px solid transparent;
background-color: transparent;
`
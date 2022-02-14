import styled, { css } from "styled-components"

export const SlicWrapper = styled.div`
    margin-bottom:40px;
`
export const LittleDiv = styled.div`
padding:0 0.938rem;
width:${props => props.optionstyle === 'STANDART' ? '255px' : ''};
height:${props => props.optionstyle === 'STANDART' ? '21.059rem' : '16.784rem'};;
display:flex;
flex-direction:column;
`

export const SampleNextArrow = styled.div`
color:#000;
top:40%;
right: -25px;
   &:hover{
   color: #000;
   outline: none;
   background-color:transparent;
   }

   &:before {
       content: '>';
       font-weight:900;
       font-size:20px;
       color:#000;
   }
`


export const SamplePrewArrow = styled(SampleNextArrow)`
left:-20px;
   &:before {
       content: '<';
   }
`


export const Img = styled.img`

    ${props => props.optionstyle === 'STANDART' ?
        css`
            max-width: 100%;
            margin-bottom: 10px;
            border-radius: 10px;
            background-color: #e5e5e8;
        `
        :
        css`
            max-width: 100%;
            margin-bottom: 10px;
            border-radius: 10px;
            width: 198px;
            `
    }

`

export const H2 = styled.h2`

${props => props.optionstyle === 'STANDART' ?
        css`
            color:#464650;
            font-size: 19px;
            line-height: 25px;
            text-overflow: ellipsis;
            font-weight:500;
            white-space: nowrap;
            overflow: hidden;
            margin-top: 0;
            margin-bottom: 0.5rem;
            font-weight:600;
            letter-spacing: 0.6px;
        `
        :
        css`
          color:#464650;
            font-size: 15px;
            margin-top: 0;
            margin-bottom: 0.5rem;
            font-weight:500;
            letter-spacing: 0.6px;
            line-height: 1.18;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            `
    }
  
`

export const P = styled.p`
        font-size: 15px;
    color: #9999a5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin-top: 0;
    margin-bottom: 1rem;
`

export const TextHeader = styled.h2`
    font-size: 32px;
    color: #100f1d;
    margin-bottom: 24px;
    margin-left:1rem;
    font-weight:600;
`


import styled from "styled-components"

export const LittleDiv = styled.div`
padding:0 10px;

`

export const SampleNextArrow = styled.div`
color:#000;
top:40%;
   &:hover{
   color: #000;
   outline: none;
   background-color:transparent;
   }

   &:before {
       content: '>';

       font-size:30px;
       color:#000;
   }
`


export const SamplePrewArrow = styled.div`
color:#000;
top:40%;
   &:hover{
   color: #000;
   outline: none;
   background-color:transparent;
   }

   &:before {
       content: '<';

       font-size:30px;
       color:#000;
   }
`


export const Imger = styled.img`
width:255px;
margin:0 5px;
height:255px;
border-radius:2rem;
`
import { CircularProgress } from "@mui/material"
import { Link } from "react-router-dom"
import styled from "styled-components"

export const BookListContainer = styled.div`
display:flex;
flex-wrap:wrap;
flex-direction:column;
overflow:hidden;

.MuiLoadingButton-root{
  width: 8rem;
  height: 3rem;
  background-color:#fe7664 !important;
  color:#fff !important;
  margin: 2rem auto;
  border-radius: 2rem !important;
}

.MuiLoadingButton-loading{
  width: 8rem;
  height: 3rem;
  background-color:transparent !important;
  display:flex;
}
`

export const BookSquare = styled(Link)`
display:flex;
flex-direction:column;
width: 200px;
padding: 0 10px;
outline: 0;
margin-bottom: 30px;
`

export const BookImg = styled.img`
max-width: 100%;
margin-bottom: 10px;
border-radius: 10px;
width: 198px;
background-color: #e5e5e8;

`

export const H1 = styled.h1`
font-size: 36px;
color: #100f1d;
margin: 30px 2rem 30px 0;
line-height: 1;
padding-bottom:2rem;
border-bottom:1px solid #e5e5e8;
`

export const Div = styled(BookListContainer)`
flex-direction:row;

`

export const LoaderIndicator = styled(CircularProgress)`
   color: #fe7664 !important;
`
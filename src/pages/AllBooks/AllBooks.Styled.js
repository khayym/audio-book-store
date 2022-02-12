import styled from "styled-components"

export const BookContainer = styled.div`
display: flex;
flex-wrap: wrap;
margin: 3rem 5rem 1rem 5rem;


img{
    width: 198px;
height:198px;
padding-bottom:10px;
border-radius:10px;
}

h1{
    flex-wrap: nowrap;
overflow: hidden;
text-overflow: ellipsis;
}

div{
    width:200px;
}
`

export const LoaderDiv = styled.img`
height:3rem;
background-color:transparent;
width:100%;
border:1px solid #000;
`

export const Spinner = styled.img`
width: 70px;
height: 70px;
margin: auto;
`

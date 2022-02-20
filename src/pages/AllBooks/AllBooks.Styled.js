import styled from "styled-components"
// import { LazyLoadImage } from 'react-lazy-load-image-component';


export const BookContainer = styled.div`
display: flex;
flex-wrap: wrap;
margin: 3rem 5rem 1rem 5rem;




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
width:100%;
`

export const Spinner = styled.img`
width: 70px;
height: 70px;
margin: 0 auto;
display:flex;
align-items: center;
`

// const AllBookImg = styled(LazyLoadImage)`
//     width: 198px;
// height:198px;
// padding-bottom:10px;
// border-radius:10px;
// `
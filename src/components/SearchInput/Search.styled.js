import styled from "styled-components";
import root from "../../assets/root";


export const SearchContainer = styled.span`

display: flex;
align-items: center;
width:19.875rem;
padding:0rem 1.9rem;
transition: box-shadow .3s ease-in-out;
box-shadow:0 3px 4px 0 rgb(0 0 0 / 10%);

&:hover{
        box-shadow:0 6px 6px 0 rgb(0 0 0 / 10%);
    }


input{
    border:1px solid transparent;
    color:${root.grey};
    padding: 0.75rem 2.625rem 0.75rem 0.2rem;
    width: 100%;
  

    &:focus{
        outline: none;
    }
}


@media (max-width: 1200px) {
    margin-right:5rem;
  }

  @media (max-width: 1000px) {
    margin-right:3rem;
  }

  @media (max-width: 955px) {
    width:70%;
    margin-right:1rem;
  }

`
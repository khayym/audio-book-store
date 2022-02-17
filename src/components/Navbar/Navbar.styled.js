import styled from "styled-components"
import root from "../../assets/root"
import { IoIosArrowDown } from 'react-icons/io'
import { css } from "styled-components"

export const NavbarContainer = styled.div`
/* height:5.092rem; */
border-bottom: 1px solid #47414122;
display:flex;
align-items: center;
padding:0.970rem 2.813rem;
justify-content: space-between;
`

export const LogoWrapper = styled.div`

display:flex;
align-items: center;
width:20%;

h2{
    padding-left:3.125rem;
    font-size:25px;
    color:${root.orange};
}

img{
    height:2.904rem;
    width:6.25rem;
}

`
export const Icon = styled(IoIosArrowDown)`
transition:all 0.3s;
    ${props => props.modeltype === 'true' ?
        css`
        transform:rotate(180deg);
    `:
        css`
         transform:rotate(0deg);
`}
   /* transform: ${props => props.modeltype = 'true' ? "rotate(45deg)" : "rotate(75deg)"} */
`


export const SearchAndAppContainer = styled.div`
display:flex;
align-items: center;
width:80%;
justify-content:space-between;
 

button{
    font-size:17px;
    font-weight:600;
    color:${root.boldGrey};
}


div,button{
    display:flex;
    align-items: center;
    background-color:transparent;
    border:1px solid transparent;

    &:hover{
        cursor:pointer;
    }
}

button{
    margin:0 4rem;
}

@media (max-width: 1200px) {
    width:auto;
    div{
        flex-direction: row-reverse;
        
    }
  }

`

export const IosAppIcon = styled.a`
    margin-right:1.25rem;

    @media (max-width: 1200px) {
    display: none;
  }


`

export const IosAppIcon2 = styled.a`
    @media (max-width: 1200px) {
    display: none;
  }


`
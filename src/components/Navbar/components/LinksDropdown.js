
import styled from 'styled-components';
import { css } from 'styled-components';
import { useSelector } from 'react-redux'


const LinksDropdown = () => {

    const { opener: { openStatus } } = useSelector((state) => state)

    return <LinkContainer openStatus={openStatus} >
        <h1>link</h1>

    </LinkContainer>;
};

export default LinksDropdown;

const LinkContainer = styled.div`
    height:20rem;
    position:absolute;
    width:100%;
    background-color:red;
    ${porps => porps.openStatus ? css`
        visibility:visible;
        background-color:#03c58b2f; `
        : css`
        visibility:hidden;
         `};
`
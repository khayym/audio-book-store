import { useSelector } from 'react-redux'
import { LinkContainer, Ul } from './Links.Styled'

const LinksDropdown = () => {

    const { opener: { openStatus } } = useSelector((state) => state)

    return <LinkContainer openStatus={openStatus} >
        <Ul>
            <li> <a href="">xeyyam</a> </li>
            <li> <a href="">xeyyam</a> </li>
            <li> <a href="">xeyyam</a> </li>
            <li> <a href="">xeyyam</a> </li>
            <li> <a href="">xeyyam</a> </li>
            <li> <a href="">xeyyam</a> </li>
            <li> <a href="">xeyyam</a> </li>
            <li> <a href="">xeyyam</a> </li>
            <li> <a href="">xeyyam</a> </li>
            <li> <a href="">xeyyam</a> </li>
            <li> <a href="">xeyyam</a> </li>
            <li> <a href="">xeyyam</a> </li>
            <li> <a href="">xeyyam</a> </li>

        </Ul>
    </LinkContainer>;
};

export default LinksDropdown;

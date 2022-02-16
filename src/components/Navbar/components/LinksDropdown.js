import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { linksGetting } from '../../../features/dropDown/genresSlice';
import { opener } from '../../../features/modal/modalSlice';
import { LinkContainer, Ul } from './Links.Styled'

const LinksDropdown = (props) => {
    const { opener: { openStatus } } = useSelector((state) => state)
    const { genres: { data } } = useSelector((state) => state)
    const dispatch = useDispatch();

    useEffect(() => {
        const getCatagory = async () => {
            const response = await axios('https://abuk.com.ua/api/web/genres');
            dispatch(linksGetting(response.data.genres))
        }
        getCatagory()

    }, [])


    return <LinkContainer openStatus={openStatus}  >
        <Ul>
            {
                data.map((links) => <li key={links.id + 'id'} onClick={() => dispatch(opener())}> <Link key={links.id} to={`/genre/id=${links.id}`}>{links.name}</Link></li>)
            }
        </Ul>
    </LinkContainer>;
};

export default LinksDropdown;

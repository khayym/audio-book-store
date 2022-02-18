import { Fade } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { linksGetting } from '../../../features/dropDown/genresSlice';
import { opener } from '../../../features/modal/modalSlice';
import { LinkContainer, Modals, Ul } from './Links.Styled'


const LinksDropdown = (props) => {
    const { opener: { openstatus } } = useSelector((state) => state)
    const { genres: { data } } = useSelector((state) => state)
    const dispatch = useDispatch();


    useEffect(() => {
        const getCatagory = async () => {
            const response = await axios('https://abuk.com.ua/api/web/genres');
            dispatch(linksGetting(response.data.genres))
        }
        getCatagory()

    }, [])


    return (

        <Modals
            open={openstatus}
            onClose={() => dispatch(opener())}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Fade in={openstatus}>
                <LinkContainer >
                    <Ul>
                        {
                            data.map((links) => <li key={links.id + 'id'} onClick={() => dispatch(opener())}> <Link key={links.id} to={`/genre/id=${links.id}`}>{links.name}</Link></li>)
                        }
                    </Ul>
                </LinkContainer>
            </Fade>
        </Modals>

    )
};

export default LinksDropdown;

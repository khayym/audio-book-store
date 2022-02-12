import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { LinkContainer, Ul } from './Links.Styled'

const LinksDropdown = () => {
    const [catagory, setCatagory] = useState([''])
    const { opener: { openStatus } } = useSelector((state) => state)

    useEffect(() => {
        const getCatagory = async () => {
            const response = await axios('https://abuk.com.ua/api/web/genres');
            setCatagory(response.data.genres)
        }
        getCatagory()
    }, [])


    return <LinkContainer openStatus={openStatus} >
        <Ul>
            {
                catagory.map((links) => <li key={links.id + 'id'}> <Link key={links.id} to={`/genre/${links.id}`}>{links.name}</Link></li>)
            }
        </Ul>
    </LinkContainer>;
};

export default LinksDropdown;

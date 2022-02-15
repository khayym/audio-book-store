import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'

const Book = ({ match: { params: { id } } }) => {
    console.log(id);

    const [data, setBook] = useState({});
    const aze = useSelector(state => state.book);


    useEffect(() => {

        const getBookByID = async (id) => {
            const { data: { book } } = await axios(`https://abuk.com.ua/api/web/books/${id}/`);
            setBook(book)
        }
        getBookByID(id);

        console.log(aze);
    }, [id])

    return (
        <Section>
            <h1>Name: {data.title}</h1>
            <i>Author : { }</i>
            <img src={data.picture_urls} alt="" />
        </Section>
    )
}

export default Book

const Section = styled.div`
    margin: 5rem 10rem;
    border: 1px solid #000;
    display: flex;
    align-items: center;
    justify-content:center;
`
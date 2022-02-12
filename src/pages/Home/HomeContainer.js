import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import Slick from '../../components/CustomSlick/Slick';
import { SliderContainer } from './Home.styled';

export const HomeContainer = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const axiosBooks = async () => {
            const response = await axios('https://abuk.com.ua/api/web/books?order=uploads_count%20desc&limit=15')
            setData(response.data.books)
        };
        axiosBooks();
    }, [])


    const { opener: { openStatus } } = useSelector((state) => state)



    return <div openStatus={openStatus}>
        <h1>Home</h1>
        <SliderContainer>
            <Slick child={data} />
        </SliderContainer>
    </div>;
};





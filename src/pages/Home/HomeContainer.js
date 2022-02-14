import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import Slick from '../../components/CustomSlick/Slick';

export const HomeContainer = () => {

    const [standartBooks, setStandartBooksn] = useState([]);
    const [newBooks, setNewBooks] = useState([]);


    useEffect(() => {
        const axiosBooks = async () => {
            const response = await axios('https://abuk.com.ua/api/web/books?order=uploads_count%20desc&limit=20')
            setStandartBooksn(response.data.books)
        };
        axiosBooks();
    }, [])


    useEffect(() => {
        const axiosBooks = async () => {
            const response = await axios('https://abuk.com.ua/api/web/books?order=created_at%20desc&limit=20')
            setNewBooks(response.data.books)
        };
        axiosBooks();
    }, [])



    const { opener: { openStatus } } = useSelector((state) => state)



    return <div openStatus={openStatus}>
        <div>
            <Slick child={standartBooks} option='STANDART' />
            <Slick child={newBooks} option='MINI' />
        </div>
    </div>;
};





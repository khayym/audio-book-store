import React, { useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slick from '../../components/CustomSlick/Slick';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getFetchingBooks } from '../../features/home/homeSlice';

export const HomeContainer = () => {

    const { genres: { data } } = useSelector((state) => state)
    const { home: { bookData: { catalog, new_books, books_by_upload_count } } } = useSelector((state) => state)
    const dispatch = useDispatch();

    const allApiTogetherCall = async () => {

        const requestOne = axios.get("https://abuk.com.ua/api/web/books/catalog");
        const requestTwo = axios.get("https://abuk.com.ua/api/web/books?order=created_at%20desc&limit=8");
        const requestFour = axios.get("https://abuk.com.ua/api/web/books?order=uploads_count%20desc&limit=8");

        await axios.all([requestOne, requestTwo, requestFour]).then(axios.spread((...responses) => {
            const datas = { catalog: responses[0].data.best_books, new_books: responses[1].data.books, books_by_upload_count: responses[2].data.books }
            dispatch(getFetchingBooks(datas))
        }))
    }


    useEffect(() => {
        allApiTogetherCall();
    }, [])


    const { opener: { openStatus } } = useSelector((state) => state)

    return <div openStatus={openStatus}>
        <div>
            <Slick child={catalog} option='STANDART' />
            <Slick child={new_books} option='MINI' header='Новi' />
            <Slick genre={data} option='LENT' />
            <Slick child={books_by_upload_count} option='MINI' header='Популярні' />
        </div>
    </div>;
};




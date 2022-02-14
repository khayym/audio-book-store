import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBooks } from '../../features/allBooks/allbooksSlice';
import { BookContainer, LoaderDiv, Spinner } from './AllBooks.Styled';


const AllBooks = () => {
    const bookRef = useRef()
    const [limit, setLimit] = useState(20);

    const dispatch = useDispatch();
    const { data, loading } = useSelector(state => state.allbooks);

    const getNewBooks = () => {
        setLimit(prev => prev += 5);
    }

    useEffect(() => {
        dispatch(fetchBooks(limit))
    }, [limit])


    useEffect(() => {
        const loadObserver = new IntersectionObserver(getNewBooks, { rootMargin: '10px' })
        loadObserver.observe(bookRef.current)
    }, [])



    return (
        <div>
            <BookContainer>
                {
                    data.map((e) => {
                        return (
                            <Link key={e.id} to={`/book/${e.id}`}>
                                <div key={e.id}>
                                    <img src={e.picture_urls.main} alt="" />
                                    <h1>{e.title}</h1>
                                    <i>{e.authors[0].name}</i>

                                </div>
                            </Link >
                        )
                    })
                }
            </BookContainer>
            {loading && <Spinner src={'https://abuk.com.ua/catalog/assets/img/spinner.gif'} />}
            <LoaderDiv ref={bookRef}></LoaderDiv>
        </div>
    )

}

export default AllBooks


import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { H2, P } from '../../components/CustomSlick/Slick.styled';
import { fetchBooks } from '../../features/allBooks/allbooksSlice';
import { BookImg, BookSquare, Div } from '../Genre/Genre.Styled';
import { LoaderDiv, Spinner } from './AllBooks.Styled';



const AllBooks = () => {
    const bookRef = useRef()
    const [limit, setLimit] = useState(20);
    const { data, loading } = useSelector(state => state.allbooks);
    const dispatch = useDispatch();



    const getNewBooks = () => {
        setLimit(prev => prev += 5);
    }

    useEffect(() => {
        dispatch(fetchBooks(limit))
    }, [limit, dispatch]);


    useEffect(() => {
        const loadObserver = new IntersectionObserver(getNewBooks, { rootMargin: '10px' })
        loadObserver.observe(bookRef.current)
    }, [])



    return (
        <div>
            <Div>
                {
                    data.map((e) => {
                        return (
                            <BookSquare key={e.id} to={`/book/${e.id}`}>
                                <div key={e.id}>
                                    <BookImg src={e.picture_urls.main} alt="" />
                                    <H2>{e.title}</H2>
                                    <P>
                                        <span>
                                            {e.authors[0].name}
                                        </span>
                                    </P>

                                </div>
                            </BookSquare >
                        )
                    })
                }
            </Div>
            {loading && <Spinner src={'https://abuk.com.ua/catalog/assets/img/spinner.gif'} />}
            <LoaderDiv ref={bookRef}></LoaderDiv>
        </div>
    )

}

export default AllBooks


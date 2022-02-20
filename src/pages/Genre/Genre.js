import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchBooksByGenre } from '../../features/genre/genreSlice';
import { Spinner } from '../AllBooks/AllBooks.Styled'
import { BookImg, BookListContainer, BookSquare, Div, H1 } from './Genre.Styled';


const Genre = ({ match: { params: { id } } }) => {
    const [limit, setLimit] = useState(10);
    const { data, loading, genreName } = useSelector(state => state.getBookByGenre);
    const dispatch = useDispatch();

    const getNewBooks = () => {
        setLimit(prev => prev += 10);
    }

    useEffect(() => {
        dispatch(fetchBooksByGenre({ limit, id }))
    }, [id, limit, dispatch])




    return (
        <div>
            <BookListContainer>
                <H1>{genreName}</H1>
                <Div>
                    {
                        data.map((e) => {
                            return (
                                <BookSquare key={e.id} to={`/book/${e.id}`}>
                                    <BookImg src={e.picture_urls.main} alt="" />
                                    <div>
                                        <h1>{e.title}</h1>
                                        <i>{e.authors[0].name}</i>
                                    </div>
                                </BookSquare >
                            )
                        })
                    }
                </Div>
                <button onClick={getNewBooks}>Get mode</button>
            </BookListContainer>
            {loading && <Spinner src={'https://abuk.com.ua/catalog/assets/img/spinner.gif'} />}
        </div>
    )

}

export default Genre


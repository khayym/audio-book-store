import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { H2, P } from '../../components/CustomSlick/Slick.styled';
import { fetchBooksByGenre } from '../../features/genre/genreSlice';
import { BookImg, BookListContainer, BookSquare, Div, H1, LoaderIndicator } from './Genre.Styled';
import LoadingButton from '@mui/lab/LoadingButton';

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
                <LoadingButton
                    onClick={getNewBooks}
                    loading={loading}
                    loadingIndicator={<LoaderIndicator />}
                >
                    More
                </LoadingButton>
            </BookListContainer>

        </div>
    )

}

export default Genre


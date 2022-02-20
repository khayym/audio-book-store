import { Rating } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import Buttons from '../../components/buttons/Button';
import PlayButton from '../../components/playButton/PlayButton';
import { setAudioUrl } from '../../features/audio/audioSlice';
import { Spinner } from '../AllBooks/AllBooks.Styled';
import { ButtonGroup, ButtonPlayAudio, Div, H1, ImgDiv, Section } from './Book.Styled';
import { BookTable } from './components/table/table';


const Book = ({ match: { params: { id } } }) => {

    const [data, setBook] = useState({ pending: true, value: undefined });
    const dispatch = useDispatch()
    useEffect(() => {


        const getBookByID = async (id) => {
            const { data: { book } } = await axios(`https://abuk.com.ua/api/web/books/${id}/`);
            setBook({ pending: false, value: book });
        }

        getBookByID(id);
    }, [id])



    return (

        data.pending ? <Spinner src={'https://abuk.com.ua/catalog/assets/img/spinner.gif'} /> :
            <Section>
                <ImgDiv>
                    <img src={data.value.picture_urls.main} alt="" />
                    <ButtonPlayAudio onClick={() => dispatch(setAudioUrl(data.value))}>
                        <PlayButton>Прослухати уривок</PlayButton>
                    </ButtonPlayAudio>
                </ImgDiv>
                <Div>
                    <div>
                        <div>
                            <H1>{data.value.title}</H1>
                            <BookTable bookShortInfo={data.value} />
                        </div>
                        <ButtonGroup>
                            <Buttons icontype='apple'>{data.value.price}</Buttons>
                            <Buttons icontype='google'>{data.value.price}</Buttons>
                        </ButtonGroup>
                    </div>
                    <Rating name="half-rating-read" size="small" defaultValue={5} precision={data.value.rating ? parseInt(data.value.rating) : 5} readOnly />
                </Div>

            </Section>
    )
}

export default Book

import { Rating } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import CustomAudioPlayer from '../../components/AudioPlayerCustom/CustomAudioPlayer';
import Buttons from '../../components/buttons/Button';
import PlayButton from '../../components/playButton/PlayButton';
import { setAudioUrl } from '../../features/audio/audioSlice';
import { BookTable } from './components/table/table';


const Book = ({ match: { params: { id } } }) => {
    console.log(id);

    const [data, setBook] = useState({ pending: true, value: undefined });


    const dispatch = useDispatch()
    useEffect(() => {


        const getBookByID = async (id) => {
            // setBook({ pending: true, value: undefined })
            const { data: { book } } = await axios(`https://abuk.com.ua/api/web/books/${id}/`);
            setBook({ pending: false, value: book });

        }

        getBookByID(id);
        // setBook(getBookByID);
    }, [id])

    console.log(data.value);

    return (

        data.pending ? <h1>Loading.....</h1> :
            <Section>
                <ImgDiv>
                    <img src={data.value.picture_urls.main} alt="" />
                    <ButtonPlayAudio onClick={() => dispatch(setAudioUrl(data.value.sample.audio_url))}>
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

const Section = styled.div`
    padding-right: 15px;
    padding-left: 15px;
    margin-right: -15px;
    margin-left: -15px;
    margin: 0 0 200px;
    -webkit-animation: 1s fadein;
    animation: 1s fadein;
    /* border: 1px solid #000; */
    display: flex;

`

const H1 = styled.h1`
    color:#464650;
    font-size: 36px;
    margin-bottom: 20px;
`

const ImgDiv = styled.div`
    width:41.66%;
    height:31.688rem;
    flex: 0 0 41.66%;
    max-width: 41.66%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
        width:96%;
    }

 
`

const Div = styled.div`
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    display:flex;
    flex: 0 0 58.33%;
    max-width: 58.33%;
    padding-left:15px;
    padding-right:15px;
    /* width: 58.33%; */
    flex-direction:row;
    justify-content:space-between !important;
`

const ButtonGroup = styled.div`
    display:flex;
    margin-top:50px;
`
const ButtonPlayAudio = styled.button`
    border:0px solid transparent;
    background-color: transparent;
`
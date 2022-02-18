import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BookTable } from './components/table';

const Book = ({ match: { params: { id } } }) => {
    console.log(id);

    const [data, setBook] = useState({ pending: true, value: undefined });
    // const aze = useSelector(state => state.book);


    useEffect(() => {


        const getBookByID = async (id) => {
            // setBook({ pending: true, value: undefined })
            const { data: { book } } = await axios(`https://abuk.com.ua/api/web/books/${id}/`);
            setBook({ pending: false, value: book });
            console.log(data.value);
        }

        getBookByID(id);
        // setBook(getBookByID);
    }, [id])


    return (

        data.pending ? <h1>Loading.....</h1> :
            <Section>
                <div>
                    <img src={data.value.picture_urls.main} alt="" />
                    <button>Play</button>
                </div>
                <div>

                    <BookTable bookShortInfo={data.value} />
                    {/* <TableContainer>
                        <Table sx={{ minWidth: 200 }} aria-label="caption table">
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">АВТОР</TableCell>
                                    <TableCell component="th" scope="row">{data.value.authors[0].name}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">ЧИТЕЦЬ</TableCell>
                                    <TableCell component="th" scope="row">{data.value.narrators[0].name}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">ЖАНР</TableCell>
                                    <TableCell component="th" scope="row">{data.value.genre[0].name}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">ТРИВАЛІСТЬ</TableCell>
                                    <TableCell component="th" scope="row">{data.value.duration}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">ВИДАННЯ</TableCell>
                                    <TableCell component="th" scope="row">{data.value.year}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer> */}
                </div>

            </Section>
    )
}

export default Book

const Section = styled.div`
    margin: 0 0 200px;
    -webkit-animation: 1s fadein;
    animation: 1s fadein;
    border: 1px solid #000;
    display: flex;
   
`
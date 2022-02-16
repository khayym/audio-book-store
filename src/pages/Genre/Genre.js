import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBooks } from '../../features/allBooks/allbooksSlice';


const Genre = (props) => {
    const bookRef = useRef()
    const [limit, setLimit] = useState(20);
    const [book_by_genre, setBook_by_genre] = useState([]);


    console.log('prop', props);

    const id = props.match.params.id;

    console.log(id);

    const getNewBooks = () => {
        setLimit(prev => prev += 5);
    }

    useEffect(() => {
        const axiosGetBookByGenre = async () => {
            const data = await axios(`https://abuk.com.ua/api/web/books?order=created_at%20desc&genre_${id}&limit=${limit}`)
            console.log(data);
        }
        axiosGetBookByGenre();
    }, [id])


    // useEffect(() => {
    //     const loadObserver = new IntersectionObserver(getNewBooks, { rootMargin: '10px' })
    //     loadObserver.observe(bookRef.current)
    // }, [])



    return (
        <div>
            {/* <BookContainer> */}
            {/* {
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
                } */}
            <h1>genre</h1>
            {/* </BookContainer> */}
            {/* {loading && <Spinner src={'https://abuk.com.ua/catalog/assets/img/spinner.gif'} />} */}
            {/* <LoaderDiv ref={bookRef}></LoaderDiv> */}
        </div>
    )

}

export default Genre


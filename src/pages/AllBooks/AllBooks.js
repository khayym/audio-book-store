import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { BookContainer, LoaderDiv, Spinner } from './AllBooks.Styled';

const AllBooks = () => {
    const bookRef = useRef()
    const [limit, setLimit] = useState(15);
    const [books, setBooks] = useState([])
    const [loader, setLoading] = useState(false);

    const getNewBooks = () => {
        setLimit(prev => prev += 15);
    }

    useEffect(() => {
        setLoading(true);

        const axiosBooks = async () => {
            const response = await axios(`https://abuk.com.ua/api/web/books?order=uploads_count%20desc&limit=${limit}`)
            setTimeout(() => {
                setBooks(response.data.books)
                setLoading(false);
            }, 1000)
        };
        axiosBooks();
    }, [limit]);


    useEffect(() => {
        console.log('bhhh');
        const loadObserver = new IntersectionObserver(getNewBooks, { rootMargin: '10px' })
        loadObserver.observe(bookRef.current)
    }, [])



    return (
        <div>
            <BookContainer>
                {
                    books.map((e) => {
                        return (
                            <div key={e.id}>
                                <img src={e.picture_urls.main} alt="" />
                                <h1>{e.title}</h1>
                                <i>{e.authors[0].name}</i>

                            </div>
                        )
                    })
                }
            </BookContainer>
            {loader && <Spinner src={'https://abuk.com.ua/catalog/assets/img/spinner.gif'} />}
            <LoaderDiv ref={bookRef}></LoaderDiv>
        </div>
    )

}

export default AllBooks


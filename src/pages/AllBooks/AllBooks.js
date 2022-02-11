import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import useLazyLoad from "../../hooks/useLazyLoad"

const AllBooks = () => {
    const bookRef = useRef()
    const [limit, setLimit] = useState(15);
    const [books, setBooks] = useState([])

    const getNewBooks = () => {
        setLimit(prev => prev += 10);
        // console.log(limit);
    }


    useEffect(() => {
        const axiosBooks = async () => {
            const response = await axios(`https://abuk.com.ua/api/web/books?order=uploads_count%20desc&limit=${limit}`)
            setBooks(response.data.books)
        };
        axiosBooks();
    }, [limit])

    // useEffect(() => {

    //     const loadObserver = new IntersectionObserver(() => console.log('isldeir'), { rootMargin: '2px' })
    //     loadObserver.observe(bookRef.current)

    // })


    // const triggerRef = useRef(null);
    // const onGrabData = (limit) => {
    //     // This would be where you'll call your API
    //     // setLimit(prev => prev += 10);
    // };
    // const { data, loading } = useLazyLoad({ triggerRef, onGrabData });



    console.log(data);

    return (
        <div>
            <BookContainer>
                {
                    data.map((e) => {
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
            <LoaderDiv ref={triggerRef}>
                <p>guncelleme gelir</p>
            </LoaderDiv>
            {/* <button onClick={getNewBooks}>daha cox goster</button> */}
        </div>
    )
}

export default AllBooks


const BookContainer = styled.div`
display: flex;
flex-wrap: wrap;
margin: 3rem 5rem 1rem 5rem;


    img{
        width: 198px;
        height:198px;
        padding-bottom:10px;
        border-radius:10px;
    }

    h1{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    div{
        width:200px;
    }
`

const LoaderDiv = styled.div`

    background-color:red;

`
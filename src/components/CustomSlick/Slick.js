import React from 'react'
import Slider from "react-slick"
import { settings } from "./setting"
import { Imger, LittleDiv } from "./Slick.styled"

const Slick = ({ child }) => {
    return (
        <Slider {...settings}>
            {
                child.map(e => {
                    return (
                        <LittleDiv key={e.id}>
                            <Imger src={e.picture_urls.main}></Imger>
                            <div>
                                <h2>{e.title}</h2>
                                <h2>{e.authors[0].name}</h2>
                                <h3>{e.uploads_count}</h3>
                            </div>

                        </LittleDiv>
                    )
                })
            }
        </Slider>

    )
}

export default Slick



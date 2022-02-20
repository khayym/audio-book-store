import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { settingLent } from '../setting'
import { SlicWrapper, TextHeader } from '../Slick.styled'
import { Div } from './LentSlick.Styled'

const LentSlick = ({ genre }) => {
    return (
        <SlicWrapper>
            <TextHeader>Жанри</TextHeader>
            <Slider {...settingLent}>
                {
                    genre.map(e => {
                        return (
                            <Link to={`/genre/id=${e.id}`} key={e.id}>
                                <Div>
                                    <img src={e.picture_urls.main} alt="" />
                                    <h2>{e.name}</h2>
                                </Div>
                            </Link>
                        )
                    })
                }
            </Slider>
        </SlicWrapper >
    )
}

export default LentSlick

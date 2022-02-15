import React from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick"
import { settings, settingsMini } from "./setting"
import { H2, Img, LittleDiv, P, TextHeader, SlicWrapper } from "./Slick.styled"
import LentSlick from './LentSlick/LentSlick'

const Slick = ({ child, option, genre, header }) => {

    switch (option) {
        case 'STANDART':
            return (
                <SlicWrapper>
                    <TextHeader>Вибір АБУК</TextHeader>
                    <Slider {...settings}>
                        {
                            child && child.map(({ id, picture: { main }, authors, title }) => {
                                return (
                                    <Link key={id} to={`/book/${id}`}>
                                        <LittleDiv optionstyle={option} key={id}>
                                            <Img src={main} optionstyle={option}></Img>
                                            <div>
                                                <H2 optionstyle={option} >{title}</H2>
                                                <P>
                                                    <span>
                                                        {authors[0].name}
                                                    </span>
                                                </P>
                                            </div>
                                        </LittleDiv>
                                    </ Link>
                                )
                            })
                        }
                    </Slider>
                </SlicWrapper>
            )

        case 'MINI':
            return (
                <SlicWrapper>
                    <TextHeader>{header}</TextHeader>
                    <Slider {...settingsMini}>
                        {
                            child && child.map(e => {
                                return (
                                    <Link key={e.id} to={`/book/${e.id}`}>
                                        <LittleDiv optionstyle={option} key={e.id}>
                                            <Img src={e.picture_urls.main} optionstyle={option}></Img>
                                            <div>
                                                <H2 optionstyle={option}>{e.title}</H2>
                                                <P>
                                                    <span>
                                                        {e.authors[0].name}
                                                    </span>
                                                </P>
                                            </div>
                                        </LittleDiv>
                                    </ Link>
                                )
                            })
                        }
                    </Slider>
                </SlicWrapper>
            )
        case 'LENT':
            return <LentSlick genre={genre} />

        default:
            return <h1>Xeyyammmmmmmm</h1>;

    }

}

export default Slick
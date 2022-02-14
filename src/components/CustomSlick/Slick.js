import React from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick"
import { settings, settingsMini } from "./setting"
import { H2, Img, LittleDiv, P, TextHeader, SlicWrapper } from "./Slick.styled"

const Slick = ({ child, option }) => {

    switch (option) {
        case 'STANDART':
            return (
                <SlicWrapper>
                    <TextHeader>Вибір АБУК</TextHeader>
                    <Slider {...settings}>
                        {
                            child.map(({ id, picture_urls: { main }, authors, title }) => {
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
                    <TextHeader>Новi</TextHeader>
                    <Slider {...settingsMini}>
                        {
                            child.map(e => {
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
            return (
                <h1>Xeyyammmmmmmm</h1>
            )

        default:
            return <h1>Xeyyammmmmmmm</h1>;

    }

}

export default Slick



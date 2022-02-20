import React, { useEffect } from 'react';
import { Search } from '../SearchInput/Search';
import { Icon, IosAppIcon, IosAppIcon2, LogoWrapper, NavbarContainer, SearchAndAppContainer } from './Navbar.styled';
import LinksDropdown from './components/LinksDropdown';
import { useDispatch, useSelector } from 'react-redux'
import { opener } from '../../features/modal/modalSlice';
import CustomAudioPlayer from '../AudioPlayerCustom/CustomAudioPlayer';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import root from '../../assets/root';


const Navbar = () => {

    const dispatch = useDispatch();
    const { opener: { openstatus } } = useSelector((state) => state)
    const { audioStatus } = useSelector(state => state.audio);

    return (
        <div>
            <NavbarContainer>
                <LogoWrapper>
                    <Link to='/'>
                        <img src="https://abuk.com.ua/catalog/assets/img/logo.svg" alt="" />
                    </Link>
                    <AllBookLogo to='/allbook'>Всі книжки</AllBookLogo>
                </LogoWrapper>

                <SearchAndAppContainer>
                    <div>
                        <button onClick={() => dispatch(opener())} >
                            Genres
                            <Icon modeltype={openstatus.toString()} />
                        </button>
                        <Search />
                    </div>

                    {
                        audioStatus ?
                            <LeftWrapper>
                                <div>
                                    <SmallImg src={audioStatus.picture_urls.small} alt="" />
                                    <SmallDiv>
                                        <SmallTitle>{audioStatus.title}</SmallTitle>
                                        <SmallAuthor>{audioStatus.authors[0].name}</SmallAuthor>
                                    </SmallDiv>
                                </div>
                                <CustomAudioPlayer />
                            </ LeftWrapper>
                            :
                            <LeftWrapper>
                                <IosAppIcon href="">
                                    <img src="https://abuk.com.ua/catalog/assets/img/app-store.svg" alt="" />
                                </IosAppIcon>
                                <IosAppIcon2 href="">
                                    <img src="https://abuk.com.ua/catalog/assets/img/googleplay_icon.svg" alt="" />
                                </IosAppIcon2>
                            </LeftWrapper >
                    }



                </SearchAndAppContainer>
            </NavbarContainer>
            <LinksDropdown />
        </div >
    )
};

export default Navbar;

const LeftWrapper = styled.div`
    display:flex;
    justify-content:end;
    width: 100%;
    transition: transform .3s,-webkit-transform .3s;
    .rhap_container{
        padding:0 1rem;
    }

`

const SmallImg = styled.img`
    width: 42px;
    height: 42px;
    border-radius: 8px;
`

const SmallTitle = styled.p`
    font-size: 12px;
    margin-bottom: 0!important;
    margin-left: 15px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 120px;
    font-weight: bold;
    color:#464650;
`

const SmallAuthor = styled(SmallTitle)`
    margin-top:.5rem;
`
const SmallDiv = styled.div`
    display:flex;
    flex-direction:column;
`

const AllBookLogo = styled(Link)`
  padding-left:3.125rem;
    font-size:25px;
    color:${root.orange};
`
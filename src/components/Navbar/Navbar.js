import React, { useEffect } from 'react';
import { Search } from '../SearchInput/Search';
import { Icon, IosAppIcon, IosAppIcon2, LogoWrapper, NavbarContainer, SearchAndAppContainer } from './Navbar.styled';
import LinksDropdown from './components/LinksDropdown';
import { useDispatch, useSelector } from 'react-redux'
import { opener } from '../../features/modal/modalSlice';
import CustomAudioPlayer from '../AudioPlayerCustom/CustomAudioPlayer';
import styled from 'styled-components';


const Navbar = () => {

    const dispatch = useDispatch();
    const { opener: { openstatus } } = useSelector((state) => state)

    return (
        <div>
            <NavbarContainer>
                <LogoWrapper>
                    <img src="https://abuk.com.ua/catalog/assets/img/logo.svg" alt="" />
                    <h2>All books</h2>
                </LogoWrapper>

                <SearchAndAppContainer>
                    <div>
                        <button onClick={() => dispatch(opener())} >
                            Genres
                            <Icon modeltype={openstatus.toString()} />
                        </button>
                        <Search />
                    </div>
                    <LeftWrapper>
                        <CustomAudioPlayer />
                        {/* <IosAppIcon href="">
                            <img src="https://abuk.com.ua/catalog/assets/img/app-store.svg" alt="" />
                        </IosAppIcon>
                        <IosAppIcon2 href="">
                            <img src="https://abuk.com.ua/catalog/assets/img/googleplay_icon.svg" alt="" />
                        </IosAppIcon2> */}
                    </LeftWrapper>
                </SearchAndAppContainer>
            </NavbarContainer>
            <LinksDropdown />
        </div >
    )
};

export default Navbar;

const LeftWrapper = styled.div`
    background-color:#917b7b;
    width: 100%;
`
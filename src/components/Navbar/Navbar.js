import React from 'react';
import { BsArrowDownShort } from 'react-icons/bs'
import { Search } from '../SearchInput/Search';
import { IosAppIcon, LogoWrapper, NavbarContainer, SearchAndAppContainer } from './Navbar.styled';
import LinksDropdown from './components/LinksDropdown';
import { useSelector, useDispatch } from 'react-redux'
import { opener } from '../../features/modal/modalSlice'


const Navbar = () => {



    const { opener: { openStatus } } = useSelector((state) => state)
    const dispatch = useDispatch()

    console.log(openStatus);

    return (
        <div>
            <NavbarContainer>
                <LogoWrapper>
                    <img src="https://abuk.com.ua/catalog/assets/img/logo.svg" alt="" />
                    <h2>All books</h2>
                </LogoWrapper>

                <SearchAndAppContainer>
                    <div>
                        <button onClick={() => dispatch(opener())}>
                            Janrs
                            <BsArrowDownShort />
                        </button>
                        <Search />
                    </div>

                    <div>
                        <IosAppIcon href="">
                            <img src="https://abuk.com.ua/catalog/assets/img/app-store.svg" alt="" />
                        </IosAppIcon>
                        <a href="">
                            <img src="https://abuk.com.ua/catalog/assets/img/googleplay_icon.svg" alt="" />
                        </a>
                    </div>
                </SearchAndAppContainer>
            </NavbarContainer>
            <LinksDropdown />
        </div >
    )
};

export default Navbar;

import React from 'react'
import AppleIcon from '../../assets/img/icons/apple.svg';
import GoogleIcon from '../../assets/img/icons/google.svg';
import { Btn } from './button.styled';

const Buttons = ({ children, icontype }) => {
    console.log(icontype);
    return (
        <div>
            <Btn variant="contained">
                {"$"}{children}
                <span>
                    {icontype === 'apple' ? <img src={AppleIcon} /> : <img src={GoogleIcon} />}
                </span>
            </Btn>
        </div>
    )
}

export default Buttons


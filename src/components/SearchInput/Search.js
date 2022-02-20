import React from 'react';
import { GrSearch } from "react-icons/gr";
import { SearchContainer } from './Search.styled';


export const Search = () => {


    return (
        <div>
            <SearchContainer >
                <GrSearch />
                <input type="text" placeholder="Search" />
            </SearchContainer >
        </div>

    )
};

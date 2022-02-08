import { css } from '@emotion/react';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

export const HomeContainer = () => {

    const { opener: { openStatus } } = useSelector((state) => state)


    return <div openStatus={openStatus}>
        <h1>Home</h1>
        <img src="https://abuk-public.s3.amazonaws.com/uploads/book/picture/658/small_annapurna_800.png" alt="" />
        <img src="https://abuk-public.s3.amazonaws.com/uploads/book/picture/658/small_annapurna_800.png" alt="" />
        <img src="https://abuk-public.s3.amazonaws.com/uploads/book/picture/658/small_annapurna_800.png" alt="" />
        <img src="https://abuk-public.s3.amazonaws.com/uploads/book/picture/658/small_annapurna_800.png" alt="" />
        <img src="https://abuk-public.s3.amazonaws.com/uploads/book/picture/658/small_annapurna_800.png" alt="" />
    </div>;
};

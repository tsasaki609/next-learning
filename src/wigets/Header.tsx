import React, { FC } from 'react';
import Head from 'next/head'

const Header: FC = () => {
    return(
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>header test</div>
        </>
    );
};

export default Header;

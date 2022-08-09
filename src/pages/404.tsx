// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { navigate } from 'gatsby';
import React, { useEffect } from 'react';
import { GlobalStyle } from '../components/theme/GlobalStyles';

const NotFoundPage = () => {
    useEffect(() => {
        navigate('/');
    }, []);
    return (
        <>
            <GlobalStyle />
            <div
                css={{
                    width: '100vw',
                    height: '100vh',
                    overflow: 'hidden',
                    padding: 0,
                    margin: 0,
                }}
            ></div>
        </>
    );
};

export default NotFoundPage;

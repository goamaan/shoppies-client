import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Main } from '../components/Main';
import { Navbar } from '../components/ui/Navbar';
import Head from 'next/head';

const Index = () => (
    // TODO: implement dark mode
    <>
        {/* <DarkModeSwitch /> */}
        <Head>
            <title>The Shoppies</title>
            <link
                rel="icon"
                // from the actual shopify website
                href="https://cdn.shopify.com/static/shopify-favicon.png"
            />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
        </Head>
        <Navbar />
        <Flex direction="column" mt="10vh">
            <Main />
        </Flex>
    </>
);

export default Index;

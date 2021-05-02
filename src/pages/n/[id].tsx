import { Flex } from '@chakra-ui/react';
import { Navbar } from '../../components/ui/Navbar';
import Head from 'next/head';
// import { useRouter } from 'next/router';
// import { useQuery } from 'react-query';
// import { fetchUsingId } from '../../api-fetch';
// import { useEffect, useState } from 'react';

const SharedNominations = () => (
    // const router = useRouter();
    // const { id } = router.query;
    // const [ids, setIds] = useState<string[]>([]);
    // const [invalid, setInvalid] = useState(false);
    // const [nominations, setNominations] = useState<any[]>([]);

    // useEffect(() => {
    //     if (!router.isReady) return;
    //     const paramIds = (id as string).split('tt');
    //     setIds(paramIds.map((e) => 'tt' + e));
    //     console.log(ids.length);
    //     if (ids.length < 6 || ids.length > 6) setInvalid(true);
    //     else refetch();
    // }, [router.isReady]);

    // const { data, isLoading, isPreviousData, isFetching, refetch } = useQuery(
    //     ['nominations'],
    //     () => fetchUsingId(ids.slice(1)),
    //     { enabled: false },
    // );

    <>
        <Head>
            <title>Shared Nominations</title>
            <link
                rel="icon"
                href="https://cdn.shopify.com/static/shopify-favicon.png"
            />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
        </Head>
        <Flex
            bgGradient="linear(to-b,shopify.900,bg.700,shopify.500)"
            flexDir="column"
            minHeight="100%"
            minWidth="100%"
            height={['110vh', '100vh']}
        >
            <Navbar />
            Not implemented yet
        </Flex>
    </>
);
export default SharedNominations;

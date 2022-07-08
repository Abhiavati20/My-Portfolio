import Head from 'next/head';
import Navbar from '../navbar';
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {
    return (
        <Box as='main' pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Portfolio" />
                <meta name="author" content="portfolio" />
                <meta name="author" content="Cyrus" />
                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <title>Abhishek Avati - Homepage</title>
            </Head>
            <Navbar path={router.asPath} />
            <Container maxW="container.md" pt={14}>
                <br/>
                {children}
            </Container>
        </Box>
    )
}

export default Main
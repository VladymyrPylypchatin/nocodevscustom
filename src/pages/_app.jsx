// import '../assets/styles/global.scss'
import { useEffect } from 'react';
import '../assets/styles/global.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';
import TagManager from 'react-gtm-module';
import { Router } from 'next/router';


function MyApp({ Component, pageProps }) {
    useEffect(() => {
        TagManager.initialize({
            gtmId: 'GTM-TPC96HX',
        })


        Router.events.on('routeChangeComplete', () => {
            TagManager.dataLayer({
                dataLayer: {
                    event: 'PageView',
                }
            })
        });
    }, []);
    return (
        <>
            <Head>
                <title>No-code vs custom development - Find out what you need </title>
                <meta name="description" content="Wondering what to chose, no-code tool, or hire a developer for launching your SaaS business? I can help you to make a decision." />
            </Head>
            <Component {...pageProps} />
            <ToastContainer />
        </>
    )
}

export default MyApp

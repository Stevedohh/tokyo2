import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import '../styles/globals.css';
import Layout from '@/components/layouts/Layout';

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>NinjaTech - Your Technology Partner</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="NinjaTech provides high-quality IT services to enhance business processes." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {!Component.toString().includes('NotFound') ?
                <Layout><Component {...pageProps} /></Layout> :
                (<Component {...pageProps} />)
            }
        </div>
    );
}

export default appWithTranslation(MyApp);

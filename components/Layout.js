import Head from 'next/head';

import Header from './Header';

export default function Layout({ children, pageTitle, description, ...props }) {
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>

            <div className='content'>{children}</div>
        </>
    );
}

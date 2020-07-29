import Head from 'next/head';
import Header from '@components/Header';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({
    Component,
    pageTitle,
    description,
    pageProps,
}) {
    return (
        <>
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <meta charSet='utf-8' />
                <meta name='Description' content={description}></meta>
                <title>{pageTitle}</title>

                <link
                    rel='stylesheet'
                    href='https://cdn.jsdelivr.net/npm/uikit@3.5.5/dist/css/uikit.min.css'
                />

                <script src='https://cdn.jsdelivr.net/npm/uikit@3.5.5/dist/js/uikit.min.js'></script>
                <script src='https://cdn.jsdelivr.net/npm/uikit@3.5.5/dist/js/uikit-icons.min.js'></script>
            </Head>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800;900&display=swap');

                html,
                body {
                    margin: 0;
                    padding: 0;
                    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont,
                        'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
                        'Open Sans', 'Helvetica Neue', sans-serif;
                    color: #636363;
                }

                h1,
                h2,
                h3,
                h4,
                h5,
                h6 {
                    font-weight: bold;
                }

                a {
                    color: #ffa395;
                }

                footer {
                    width: 100%;
                    height: 100px;
                    border-top: 1px solid #eaeaea;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }

                footer a {
                    margin: 5px;
                }
            `}</style>
            <Header />
            <div className='uk-container'>
                <Component {...pageProps} />
            </div>
            <footer>
                <div>Built with ❤️ and open-source</div>

                <div>
                    <a
                        target='_blank'
                        href='https://www.linkedin.com/in/bnmounir/'
                        uk-icon='icon: linkedin'
                        uk-icon='linkedin'
                    >
                        <span uk-icon='linkedin'></span>
                    </a>{' '}
                    <a
                        target='_blank'
                        href='https://github.com/bnmounir'
                        uk-icon='icon: github'
                        uk-icon='github'
                    >
                        <span uk-icon='github'></span>
                    </a>{' '}
                    <a
                        target='_blank'
                        href='https://twitter.com/bnmounir7'
                        uk-icon='icon: twitter'
                        uk-icon='twitter'
                    >
                        <span uk-icon='twitter'></span>
                    </a>
                </div>
            </footer>
        </>
    );
}

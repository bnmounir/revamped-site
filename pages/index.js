import Layout from '@components/Layout';

import getPosts from '@utils/getPosts';

const Index = ({ posts, title, description, ...props }) => {
    return (
        <>
            <Layout pageTitle={title} description={description}>
                <div className='landing-container'>
                    <div className='left'>
                        <h1 className='title'>
                            Hi there 👋! I’m a Software Developer{' '}
                        </h1>

                        <main>
                            <p>
                                I can help your team and business solve
                                challenges and reach your audience through
                                technology.
                            </p>
                        </main>
                        <p>
                            {' '}
                            <a
                                target='_blank'
                                href='https://calendly.com/bnmounir/30min'
                            >
                                <button>Lets Talk</button>
                            </a>
                        </p>
                    </div>
                    <div className='right'></div>
                </div>
            </Layout>
            <style jsx>{`
                button {
                    font-size: 22px;
                    letter-spacing: 1px;
                    font-weight: 600;
                    color: #f9f9f9;
                    background-color: #ff2e63;
                    box-shadow: 0px 0px 3px 2px rgba(227, 227, 227, 1);
                    width: 284px;
                    height: 62px;
                    border-radius: 5px;
                    border: none;
                }
                button:hover {
                    box-shadow: 0px 0px 21px -2px rgba(255, 61, 110, 1);
                    // background-color: #ff3d6e;
                    cursor: pointer;
                }
                .title {
                    margin: 1rem auto;
                    font-size: 3rem;
                }
                .landing-container {
                    min-height: 65vh;
                    display: flex;
                    flex: flex-grow;
                    flex-direction: row;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    align-items: center;
                }
                .left {
                    max-width: 375px;
                    margin: 10px;
                }
                .right {
                    margin: 10px;
                    min-width: 320px;
                    min-height: 350px;
                    background-image: url('/me.png');
                    background-repeat: no-repeat;
                    background-size: contain;
                }
                @media screen and (max-width: 775px) {
                    .landing-container {
                        flex-direction: column;
                    }
                }
            `}</style>
        </>
    );
};

export default Index;

export async function getStaticProps() {
    const configData = await import(`../siteconfig.json`);

    const posts = ((context) => {
        return getPosts(context);
    })(require.context('../posts', true, /\.md$/));

    return {
        props: {
            posts,
            title: configData.default.title,
            description: configData.default.description,
        },
    };
}

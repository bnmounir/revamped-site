import Link from 'next/link';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

import Layout from '@components/Layout';
import getSlugs from '@utils/getSlugs';

export default function BlogPost({ siteTitle, frontmatter, markdownBody }) {
    if (!frontmatter) return <></>;

    return (
        <>
            <Layout pageTitle={`${siteTitle} | ${frontmatter.title}`}>
                <div className='back'>
                    ←{' '}
                    <Link href='/blog'>
                        <a>Back to post list</a>
                    </Link>
                </div>
                <article class='uk-article'>
                    <h1 class='uk-article-title'>{frontmatter.title}</h1>
                    {frontmatter.hero_image && (
                        <img
                            src={frontmatter.hero_image}
                            className='hero'
                            alt={frontmatter.title}
                        />
                    )}
                    <div
                        class='uk-grid-small uk-child-width-auto'
                        uk-grid='true'
                    >
                        <div className=' some-margin'>
                            <ReactMarkdown source={markdownBody} />
                        </div>
                    </div>
                </article>
            </Layout>
            <style jsx>{`
                article {
                    width: 100%;
                    max-width: 1200px;
                }
                h1 {
                    font-size: 4rem;
                    text-align: center;
                    margin: 50px auto;
                }
                h3 {
                    font-size: 1.1rem;
                }
                .hero {
                    width: 100%;
                }
                .back {
                    width: 100%;
                    max-width: 1200px;
                    color: #00a395;
                }
                .some-margin {
                    margin: 50px auto;
                    padding: 50px;
                    width: 50vw;
                }
                @media screen and (max-width: 1055px) {
                    .some-margin {
                        margin: 25px auto;
                        padding: 25px;
                        width: 65vw;
                    }
                }
                @media screen and (max-width: 775px) {
                    .some-margin {
                        margin: 25px auto;
                        padding: 25px;
                        width: 75vw;
                    }
                    h1 {
                        font-size: 2rem;
                        text-align: center;
                        margin: 50px auto;
                    }
                }
            `}</style>
        </>
    );
}

export async function getStaticProps({ ...ctx }) {
    const { postname } = ctx.params;

    const content = await import(`../../posts/${postname}.md`);
    const config = await import(`../../siteconfig.json`);
    const data = matter(content.default);

    return {
        props: {
            siteTitle: config.title,
            frontmatter: data.data,
            markdownBody: data.content,
        },
    };
}

export async function getStaticPaths() {
    const blogSlugs = ((context) => {
        return getSlugs(context);
    })(require.context('../../posts', true, /\.md$/));

    const paths = blogSlugs.map((slug) => `/post/${slug}`);

    return {
        paths, // An array of path names, and any params
        fallback: false, // so that 404s properly appear if something's not matching
    };
}

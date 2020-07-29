import Link from 'next/link';

export default function PostList({ posts }) {
    if (posts === 'undefined') return null;

    return (
        <div>
            {!posts && <div>No posts!</div>}
            <ul className='uk-list'>
                {posts &&
                    posts.map((post) => {
                        return (
                            <Link href={{ pathname: `/post/${post.slug}` }}>
                                <li key={post.slug}>
                                    <a>
                                        <div className='uk-card uk-card-default uk-card-body '>
                                            <article className='uk-article'>
                                                <h4>
                                                    {post?.frontmatter?.title}
                                                </h4>
                                                <p className='uk-article-meta'>
                                                    {post.frontmatter.date}
                                                </p>
                                            </article>
                                        </div>
                                    </a>
                                </li>
                            </Link>
                        );
                    })}
            </ul>
        </div>
    );
}

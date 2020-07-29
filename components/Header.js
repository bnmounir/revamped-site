import Link from 'next/link';

export default function Header() {
    return (
        <>
            <header className='header'>
                <nav
                    className='nav'
                    role='navigation'
                    aria-label='main navigation'
                >
                    <div>
                        <Link href='/'>
                            <a>Mounir-Benabderrahmane</a>
                        </Link>
                    </div>
                    <div>
                        <Link href='/blog'>
                            <a>Blog</a>
                        </Link>
                        <Link href='/about'>
                            <a>About</a>
                        </Link>
                    </div>
                </nav>
            </header>
            <style jsx>{`
                header {
                    width: 100%;
                    height: 100px;
                    border-bottom: 1px solid #eaeaea;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                nav {
                    width: calc(100% - 40px);
                    max-width: 1200px;
                    display: flex;
                    justify-content: space-between;
                    font-weight: bold;
                    font-size: 1.3rem;
                }
                nav a {
                    margin-right: 20px;
                    color: #535353;
                    text-decoration: none;
                }
                nav a:hover {
                }
                @media screen and (max-width: 500px) {
                    nav {
                        font-size: 1rem;
                    }
                }
                @media screen and (max-width: 400px) {
                    nav {
                        font-size: 0.7rem;
                    }
                }
            `}</style>
        </>
    );
}

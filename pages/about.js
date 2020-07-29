import Layout from '@components/Layout';

const About = ({ title, description, ...props }) => {
    return (
        <>
            <Layout pageTitle={`${title} | About`} description={description}>
                <div className='uk-container top-container'>
                    <article className='uk-comment uk-comment-primary'>
                        <header className='uk-comment-header'>
                            <div
                                className='uk-grid-medium uk-flex-middle'
                                uk-grid='true'
                            >
                                <div className='uk-width-auto'>
                                    <img
                                        className='uk-comment-avatar'
                                        src='face.png'
                                        width='80'
                                        height='80'
                                        alt=''
                                    />
                                </div>
                                <div className='uk-width-expand'>
                                    <h4 className='uk-comment-title uk-margin-remove'>
                                        <a className='uk-link-reset' href='#'>
                                            Mounir Benabderrahmane
                                        </a>
                                    </h4>
                                </div>
                            </div>
                        </header>
                        <div className='uk-comment-body'>
                            <div className='uk-column-1-2'>
                                <p>
                                    Environmental engineer turned software
                                    engineer. I have spent the past three years
                                    learning and gaining experience. with my
                                    dual-background, I have an extensive skill
                                    set and unique perspective on technical
                                    adaptability and problem-solving techniques.{' '}
                                </p>
                                <p>
                                    {' '}
                                    I strive everyday to make the day better
                                    than the one before it. I like working on
                                    problem solving, data management and product
                                    development. I am an entrepreneur at heart;
                                    eager to find new opportunities for growth,
                                    collaboration, and community outreach.
                                </p>
                            </div>
                        </div>
                    </article>

                    <section>
                        <h3 className='uk-heading-bullet'>Skills</h3>
                        <div
                            className='uk-child-width-expand@s uk-text-center'
                            uk-grid='parallax: 150'
                        >
                            <div>
                                <div className='uk-card uk-card-default uk-card-body uk-grid-margin'>
                                    Javascript
                                </div>
                                <div className='uk-card uk-card-default uk-card-body uk-grid-margin'>
                                    Python
                                </div>
                                <div className='uk-card uk-card-default uk-card-body uk-grid-margin'>
                                    Typescript
                                </div>
                            </div>
                            <div>
                                <div className='uk-card uk-card-default uk-card-body uk-grid-margin'>
                                    React
                                </div>
                                <div className='uk-card uk-card-default uk-card-body uk-grid-margin'>
                                    React Native
                                </div>
                                <div className='uk-card uk-card-default uk-card-body uk-grid-margin'>
                                    Node.JS
                                </div>
                            </div>
                            <div>
                                <div className='uk-card uk-card-default uk-card-body uk-grid-margin'>
                                    AWS
                                </div>
                                <div className='uk-card uk-card-default uk-card-body uk-grid-margin'>
                                    Web Technology
                                </div>
                                <div className='uk-card uk-card-default uk-card-body uk-grid-margin'>
                                    Serverless
                                </div>
                            </div>
                            <div>
                                <div className='uk-card uk-card-default uk-card-body uk-grid-margin'>
                                    REST API/GraphQL
                                </div>
                                <div className='uk-card uk-card-default uk-card-body uk-grid-margin'>
                                    SQL
                                </div>
                                <div className='uk-card uk-card-default uk-card-body uk-grid-margin'>
                                    No-SQL
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h3 className='uk-heading-bullet'>Experience</h3>
                        <div class='uk-card uk-card-default uk-card-body margin-add'>
                            <a target='_blank' href='https://www.mounirb.com/'>
                                <h4 class='uk-card-title'>
                                    Freelance | Consulting
                                    <h6>MARCH 20 - PRESENT</h6>
                                </h4>
                            </a>
                            <div>
                                <p>
                                    consulting and building tech for small
                                    business through my network, Upwork and
                                    Fiverr.
                                </p>
                                <ul class='uk-list uk-list-square'>
                                    <li>
                                        Helping small business identify key
                                        aspect for online audience outreach
                                    </li>
                                    <li>
                                        build complex wireframes and designs
                                        using Figma.
                                    </li>
                                    <li>
                                        constructed low cost/low maintenance
                                        operations for busy professionals.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <br />
                        <div class='uk-card uk-card-default uk-card-body margin-add'>
                            <a href='https://errundsonline.com/'>
                                <h4 class='uk-card-title'>
                                    Errunds | Full Stack Developer
                                    <h6>SEPTEMBER 19 - JANUARY 20</h6>
                                </h4>
                            </a>
                            <div>
                                <p>
                                    Errunds is building a platform that connects
                                    local businesses to their communities.
                                </p>
                                <ul class='uk-list uk-list-square'>
                                    <li>
                                        Designed schemas and mapped out steps
                                        for the application’s architecture,
                                        performance, and scalability as a member
                                        of the brainstorming committee.{' '}
                                    </li>
                                    <li>
                                        Collaborated with the design team to
                                        move new designs into working code,
                                        using React with Redux.
                                    </li>
                                    <li>
                                        Constructed the back-end API (with
                                        Node.JS and Express.JS) which was
                                        deployed on AWS EC2 and used MongoDB
                                        Atlas as a cloud database.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <br />
                        <div class='uk-card uk-card-default uk-card-body margin-add'>
                            <a href='https://www.ole.org/'>
                                <h4 class='uk-card-title'>
                                    Open Learning Exchange | Software Developer
                                    <h6>FEBRUARY 19 - MAY 19</h6>
                                </h4>
                            </a>
                            <div>
                                <p>
                                    Open Learning Exchange provides a free
                                    educational tool for underserved children
                                    worldwide.
                                </p>
                                <ul class='uk-list uk-list-square'>
                                    <li>
                                        Identified and opened six GitHub issues
                                        on the website to improve functionality.
                                    </li>
                                    <li>
                                        Raised and merged six corresponding pull
                                        requests to resolve UI and copy edit
                                        errors.
                                    </li>
                                    <li>
                                        Practiced on a Production serverless app
                                        built with Angular and CouchDB, which
                                        handles data persistence and
                                        authentication. The app was hosted in a
                                        virtual machine using VirtualBox,
                                        Vagrant and Docker containers.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h3 className='uk-heading-bullet'>Projects</h3>

                        <div class='uk-card uk-card-default uk-card-body margin-add'>
                            <h3 class='uk-card-title'>
                                Wireframes & Flowcharts
                            </h3>
                            <div>
                                <p>
                                    I use{' '}
                                    <a href='https://whimsical.com/'>
                                        Whimsical
                                    </a>{' '}
                                    it an awesome tool to build and share plans
                                    with your team! here's an{' '}
                                    <a href='https://whimsical.com/P53PjXCBWEi2fdMjP2Hti@2Ux7TurymNFRPeUxQYV8'>
                                        exemple!
                                    </a>
                                </p>
                            </div>
                        </div>
                        <br />
                        <div class='uk-card uk-card-default uk-card-body margin-add'>
                            <h3 class='uk-card-title'>Design</h3>
                            <div>
                                <p>
                                    I use{' '}
                                    <a href='https://www.figma.com/'>Figma</a>,
                                    it's an awsome tool for building wireframes
                                    mockups, some SVG's and share it. here's an{' '}
                                    <a href='https://www.figma.com/file/IaINrFDBI69ti42kpgXtME/Wireframe-Kit?node-id=286%3A86'>
                                        exemple!
                                    </a>
                                </p>
                            </div>
                        </div>
                        <br />
                        <div class='uk-card uk-card-default uk-card-body margin-add'>
                            <h3 class='uk-card-title'>Coding</h3>
                            <div>
                                <p>
                                    I use{' '}
                                    <a href='code.visualstudio.com'>VS Code</a>{' '}
                                    a very light IDE. Most of the code I wrote
                                    is available on{' '}
                                    <a href='https://www.github.com/bnmounir'>
                                        GitHub!
                                    </a>
                                </p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h3 className='uk-heading-bullet'>Education</h3>
                        <div class='uk-card uk-card-default uk-card-body margin-add'>
                            <a href='https://www.codeimmersives.com/'>
                                <h4 class='uk-card-title'>
                                    Code Immersives | Web Development Program
                                    <h6>SEPTEMBER 18 - AUGUST 19</h6>
                                </h4>
                            </a>
                            <div>
                                <p>
                                    An intensive web development program built
                                    around Javascript programming.
                                </p>
                                <ul class='uk-list uk-list-square'>
                                    <li>
                                        Built feature rich full-stack web and
                                        mobile applications using best practices
                                        with instructor assistance.
                                    </li>
                                    <li>
                                        Completed and presented a final project
                                        on the inner workings of Blockchain
                                        Technology supported by extensive
                                        research on data-structures and
                                        algorithms.
                                    </li>
                                    <li>
                                        Harvested cloud technologies from AWS
                                        and GCP to build serverless apps and
                                        deploy servers, database servers, and
                                        static assets storage.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <br />
                        <div class='uk-card uk-card-default uk-card-body margin-add'>
                            <a href='https://www.nycenglishcenter.com/'>
                                <h4 class='uk-card-title'>
                                    New York English Center | ESL
                                    <h6>NOVEMBER 2015 - JUNE 2018</h6>
                                </h4>
                            </a>
                            <div>
                                <p>
                                    Studied English language and American
                                    culture and history.
                                </p>
                                <ul class='uk-list uk-list-square'>
                                    <li>
                                        Improved significantly the writing and
                                        speaking skills through a cultural
                                        immersion in new york city life.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <br />
                        <div class='uk-card uk-card-default uk-card-body margin-add'>
                            <a
                                target='_blank'
                                href='http://www.univ-batna2.dz/'
                            >
                                <h4 class='uk-card-title'>
                                    University of Batna | BS in Environmental
                                    Engineering
                                    <h6>SEPTEMBER 2011 - JUNE 2015</h6>
                                </h4>
                            </a>
                            <div>
                                <p>
                                    Majored in Environmental Health & Safety and
                                    Sustainable Development.
                                </p>
                                <ul class='uk-list uk-list-square'>
                                    <li>
                                        Learned the skills necessary to conduct
                                        environmental impact studies and
                                        scientific analysis.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h3 className='uk-heading-bullet'>Extra</h3>

                        <div class='uk-card uk-card-default uk-card-body margin-add'>
                            <a
                                target='_blank'
                                href='https://www.cityharvest.org/'
                            >
                                <h4 class='uk-card-title'>
                                    City Harvest | New York
                                    <h6>SEPTEMBER 2011 - JUNE 2015</h6>
                                </h4>
                            </a>
                            <div>
                                <p>
                                    From day one, City Harvest’s focus has been
                                    feeding hungry New Yorkers, neighbors
                                    helping neighbors.
                                </p>
                                <ul class='uk-list uk-list-square'>
                                    <li>
                                        I participate in the mobile markets that
                                        deliver food to low income
                                        neighborhoods.
                                    </li>
                                    <li>
                                        I'm part of the educator network of
                                        chef's that teach cooking skills.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
            <style jsx>{`
                section {
                    min-height: 75vh;
                    margin-top: 20px;
                }
                .top-container {
                    margin: 20px 0;
                }
                .margin-add {
                    margin: 10px;
                }
            `}</style>
        </>
    );
};

export default About;

export async function getStaticProps() {
    const configData = await import(`../siteconfig.json`);

    return {
        props: {
            title: configData.default.title,
            description: configData.default.description,
        },
    };
}

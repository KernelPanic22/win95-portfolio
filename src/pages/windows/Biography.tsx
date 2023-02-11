import { url } from 'inspector';
import biographyPic from '../../assets/index.jpg';
import './css/Biography.css';
function Biography() {
    return (
        <div>
            <img className="biography-pic" src={biographyPic} alt="biography-pic" />
            <h2 className='header'>Lautaro Vizzari</h2>
            <h4 className='subtitle'>Software Developer</h4>
            <h4 className='subtitle'>Buenos Aires, Argentina 📍</h4>
            <div className='badge-grid'>
                <img className="badge" alt="Java" src="https://img.shields.io/badge/-Java-yellow" />
                <img className="badge" alt="HTML/CSS" src="https://img.shields.io/badge/-HTML%2FCSS-yellowgreen" />
                <img className="badge" alt="SQL" src="https://img.shields.io/badge/-SQL-lightgrey" />
                <img className="badge" alt="Git" src="https://img.shields.io/badge/-Git-critical" />
                <img className="badge" alt="JavaScript" src="https://img.shields.io/badge/-JavaScript-yellow" />
                <img className="badge" alt="React" src="https://img.shields.io/badge/-React-blue" />
                <img className="badge" alt="NodeJS" src="https://img.shields.io/badge/-NodeJS-green" />
                <img className="badge" alt="C++" src="https://img.shields.io/badge/-C++-blue" />
            </div>
            <div className='inner-content'>
                <h3 className='heading'><b>About Me</b></h3>
                <p className='paragraph'>Hi there! I am Lautaro Vizzari, a 27 years old software developer from Buenos Aires, Argentina.
                    I'm a passionate self-taught developer my main area of expertise
                    is in the backend, but I also have experience  as a hobbist frontend development.
                </p>
                <p className='paragraph'>I've work in several companies:</p>
            </div>
            <div className='inner-content'>
                <h3 className='heading'><b>Mercado Libre</b></h3>
                <h4 className='subtitle'>Software Engineer 2021-2022</h4>
                <img className="badge" alt="Java" src="https://img.shields.io/badge/-Java-yellow" />
                <p className='paragraph'>Worked as Java Developer in the biggest ecommerse company
                    in Latin America.</p>
                <p className='paragraph'>I was working for the metrics team, developing APIS
                    that were implemented in all Mercado Libre sites.</p>
                <p className='paragraph'>My my time in Mercado Libre worked in several
                    developments from scratch until their implementation in all sites.</p>
            </div>
            <div className='inner-content'>
                <h3 className='heading'><b>Accenture</b></h3>
                <h4 className='subtitle'>Software Engineer 2020-2021</h4>
                <img className="badge" alt="Java" src="https://img.shields.io/badge/-Java-yellow" />
                <p className='paragraph'>Worked as Java Developer in Accenture a leading global professional services company.</p>
                <p className='paragraph'>I was working in a team that was in charge of the development
                    of new solutions for one the biggest transactional bank in Argentina.</p>
                <p className='paragraph'>In my time in Accenture our team thought and implemented
                    several new solutions that bringed old processes into new technologies.</p>
            </div>
            <div className='inner-content'>
                <h3 className='heading'><b>Colon Seguros</b></h3>
                <h4 className='subtitle'>Software Engineer 2019-2020</h4>
                <img className="badge" alt="Java" src="https://img.shields.io/badge/-Java-yellow" />
                <img className='badge' alt="Angular" src="https://img.shields.io/badge/-Angular-red" />
                <p className='paragraph'>Worked as Developer in a leading insurance company in Argentina.</p>
                <p className='paragraph'>I was working in the development of the new web application
                    for the company, that was implemented in all the company's branches.</p>
            </div>
            <div className='inner-content'>
                <h3 className='heading'><b>Neotel</b></h3>
                <h4 className='subtitle'>Sysadmin 2017-2019</h4>
                <img className="badge" alt="Linux" src="https://img.shields.io/badge/-Linux-orange" />
                <img className='badge' alt='Asterisk' src="https://img.shields.io/badge/-Asterisk-blue" />
                <p className='paragraph'>Worked as Sysadmin in Neotel, Neotel is a company that provides
                    a platform that provides a work platform for Contact Centers</p>
                <p className='paragraph'>I was in charge of the wellbeing more than 300 servers and their
                    availability.</p>
                <p className='paragraph'>I was also in charge of the development of new features for the
                    platform and special projects needed by the technical support area.</p>
            </div>
            <div className='inner-content'>
                <h3 className='heading'><b>Neotel</b></h3>
                <h4 className='subtitle'>Technical Support 2016-2017</h4>
                <img className="badge" alt="Linux" src="https://img.shields.io/badge/-Linux-orange" />
                <img className='badge' alt='Asterisk' src="https://img.shields.io/badge/-Asterisk-blue" />
                <p className='paragraph'>Worked as Technical Support in Neotel </p>
                <p className='paragraph'>I was in charge of the technical support of the platform as focal
                    point for several clients.
                </p>
                <p className='paragraph'>I was also in charge of the development of reports and special
                    projects needed by the clients
                </p>
            </div>
        </div >
    );
}

export default Biography;
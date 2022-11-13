import logo from '../assets/logo.svg';
import './Navbar.css';

export function Navbar() {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="offset-md-2 col-md-6">
                        <ul className='main'>
                            <li><a href="http://localhost:3000/#">About app</a></li>
                            <li><a href="http://localhost:3000/#">Why us</a></li>
                            <li><a href="http://localhost:3000/#">Faq</a></li>
                            <li><a href="http://localhost:3000/#">Download</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}


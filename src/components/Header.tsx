import car from '../statics/images/car.png';

function Header() {

    return (
        <div className="header">
            <div className="company_detail">
              <a href='/'><img src={car} alt='car logo'/> Cars Now</a>
            </div>
            <ul className="header_ul">
                <li key="Home">
                    <a href="/">Home</a>
                </li>
                <li key="Services">
                    <a href="#">Services</a>
                </li>
                <li key="Gallery">
                    <a href="/gallery">Gallery</a>
                </li>
                <li key="ContactUs">
                    <a href="#">Contact us</a>
                </li>
            </ul>

        </div>
    );
}

export default Header;
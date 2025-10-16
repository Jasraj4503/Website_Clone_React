import img1 from '../assets/images/img1.png' 
import { MdOutlineShoppingCart } from "react-icons/md";
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container">
                    <a className="navbar-brand ms-lg-5" href="#"><img src={img1} alt="Logo" width={200} height={80}/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end align-items-lg-center" id="navbarNavDropdown">
                        <ul className="navbar-nav text-dark">
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Courses</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Membership</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#"><MdOutlineShoppingCart/></a>
                            </li>
                        </ul>
                        <div className="d-flex justify-content-lg-end mt-3 mt-lg-0">
                            <button className="btn btn-primary ms-lg-3 px-5 fw-bold rounded-0 border-0" style={{backgroundColor:"purple"}} type="button">Login</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar
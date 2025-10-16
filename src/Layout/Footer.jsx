import { MdOutlineFacebook } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <>
            <footer className="bg-dark text-white text-center p-3">
                <div className="container">
                    <div className="row align-items-center gy-3">

                        {/* Links Section */}
                        <div className="col-12 col-md-6">
                            <ul className="list-unstyled d-flex flex-column flex-md-row justify-content-center align-items-center gap-2 gap-md-3 mb-0">
                                <li>Terms of use</li>
                                <li>Privacy policy</li>
                                <li>About us</li>
                                <li>FAQs</li>
                                <li>Contact us</li>
                                <li>Refund policy</li>
                            </ul>
                        </div>

                        {/* Social Icons Section */}
                        <div className="col-12 col-md-6">
                            <ul className="list-unstyled d-flex justify-content-center flex-wrap gap-3 fs-5 mb-0">
                                <li><MdOutlineFacebook /></li>
                                <li><FaXTwitter /></li>
                                <li><FaYoutube /></li>
                                <li><FaLinkedin /></li>
                                <li><FaInstagram /></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
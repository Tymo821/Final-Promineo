
import ".//Footer.css";
import Logo from "../images/Blanklogo.png"


const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Contact Us!</h5>
                <p>Do you love skiing as much as I do?</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-5 mb-md-0 mb-3">
                <h5 className="text-uppercase">More Information</h5>
                <ul className="list-unstyled">
                    <li><a href="./Faq">Q & A</a></li>
                    <li><a href="./Comment">Join the Conversation</a></li>
                    <li><a href="./Courses">View Courses</a></li>
        
                </ul>
            </div>

        </div>
    </div>

    <div className="footer-copyright text-center py-3">
        <img style={{width:80, marginTop: -10, marginBottom:-20}} src={Logo}/>
        

    </div>

</footer>

export default Footer
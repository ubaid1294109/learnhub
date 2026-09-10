import { Link } from "react-router-dom";

function Footer(){
    const year = new Date().getFullYear();

    return(
        
        <footer className="footer">
      <div className="footer-grid">  
        <div>
            <h4>learnHub</h4>
            <p>A student learning platform to explore, register , and grow your skills - one course at a time.</p>
        </div>
        <div>
            <h4>Quick links</h4>
            <Link to="/">Home </Link>
            <Link to="/courses">Courses</Link>
            <Link to="/students">Students</Link>
            <Link to="/about">About</Link>
        </div>
        <div>
            <h4>Support</h4>
            <Link to="/contect">Contect Us</Link>
            <Link to="/register">Register</Link>
        </div>
          <div>
            <h4>Contect Info</h4>
            <p>Hyderabad, Pakistan</p>
            <p>info@learnhub.com</p>
            <p>03196935807</p>
        </div>
         </div>     
          <div className="footer-bottom">
            &copy {year} learnHub. ALl rights reserved.
      </div>
     
        </footer>

        
    );
}

export default Footer;
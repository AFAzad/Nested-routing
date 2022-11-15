import {Link, Outlet} from "react-router-dom";
function Contact(){
    return(
        <div>
            <h1>Welcome our Contact page</h1>
            <p>Our other business</p>
            <Link to="company" style={{margin:'5px',padding:'3px', color:'blue', fontSize:'15px',textDecoration:'none'}}>Company</Link>
            <Link to="business" style={{margin:'5px',padding:'3px', color:'blue', fontSize:'15px',textDecoration:'none'}}>Business</Link>
            <Link to="other" style={{margin:'5px',padding:'3px', color:'blue', fontSize:'15px',textDecoration:'none'}} >Other</Link>
            <Outlet/>
        </div>
    )
};

export default Contact;
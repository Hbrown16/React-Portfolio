import {FaLinkedin, FaGithub, FaMailBulk, FaPhoneAlt  } from "react-icons/fa";
import classes from '../Contact/Contact.module.css'

const handleURL = (url) => {
    return _event => window.open(url, "_blank")
}

const Contact = () => {
    return (
        <div className={classes.Contact} id ="contact">
            <div className={classes.ContactIcons}>
            <FaLinkedin color= 'white' size= '30px' style={{padding: '1%'}}
            onClick={handleURL('https://www.linkedin.com/in/haley-brown-b64a6727/')} />
            <FaGithub color= 'white' size= '30px' style={{padding: '1%'}}
            onClick={handleURL('https://github.com/Hbrown16')} />
            <FaPhoneAlt color= 'white' size= '30px' style={{padding: '1%'}}
            onClick={handleURL('https://hihello.me/p/cd3a643f-eb5e-4e32-b8f3-6aa060130695')} />
            <FaMailBulk color= 'white' size= '30px' style={{padding: '1%'}}
            onClick={handleURL('mailto:hbrown1094@gmail.com')} />
        </div>
        </div>
    );
}
 
export default Contact;
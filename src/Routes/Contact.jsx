import Navbar from "../Navbar/Navbar";
import "../Main/Main.css";
import contactusimg from "../Assets/Images/contactusimg";
import Footer from "../Footer/Footer";
import Contactus from "../Contactus/Contactus";




const Contact =()=>{

    return(
        <>

         
<Navbar/>
<img src={contactusimg} alt="Contact us"/>
        <Contactus/>
        <Footer/>
        </>
    )
}

export default Contact;
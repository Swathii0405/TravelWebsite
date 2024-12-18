
import Main from "../Main/Main";
import Navbar from "../Navbar/Navbar";
import video from "../Assets/Videos/video2.mp4";
import Destination from "../Destination/Destination";
import Trip from "../Trip/Trip";
import Footer from "../Footer/Footer";
import Homepage from "../Home/Homepage";


const Home = () => {
  return (
    <>
      <Navbar />
      <div className="video-container">
        <video src={video} muted autoPlay loop type="video2/mp4"></video>
      </div>
      <Main
        cName="main"
        tittle="Your Journey Your Story!!"
        text="Choose Your Favourite Destination."
        buttonText="Travel Journey"
        url="/trip"
        btnClass="show"
      />
   


       <Destination/>
       <Homepage/>
       <Trip/>
      
       <Footer/>
        
        </>
    )
}

export default Home;
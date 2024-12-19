import "../Home/Homepage.css";
import adventurebannerimg from "../Assets/Images/adventurebannerimg";
import shipbaannerimg from "../Assets/Images/shipbannerimg";
import flightbannerimg from "../Assets/Images/flightbannerimg";
import banner1 from "../Assets/Images/banner1img";
import banner3 from "../Assets/Images/banner3img";
import banner4 from "../Assets/Images/banner4img";

const Homepage = () => {
  return (
    <div>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="5" aria-label="Slide 6"></button>
        </div>

       
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img src={adventurebannerimg} style={{ height: "400px", objectFit: "cover" }} className="d-block w-100" alt="Adventure" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={shipbaannerimg} style={{ height: "400px", objectFit: "cover" }} className="d-block w-100" alt="Ship" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={flightbannerimg} style={{ height: "400px", objectFit: "cover" }} className="d-block w-100" alt="Flight" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={banner1} style={{ height: "400px", objectFit: "cover" }} className="d-block w-100" alt="Banner 1" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={banner3} style={{ height: "400px", objectFit: "cover" }} className="d-block w-100" alt="Banner 3" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={banner4} style={{ height: "400px", objectFit: "cover" }} className="d-block w-100" alt="Banner 4" />
          </div>
        </div>

      
        {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>
    </div>
  );
};

export default Homepage;

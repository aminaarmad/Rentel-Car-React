import carsVideo from "../assets/videos/cars.mp4";
import bmwLogo from "../assets/images/bmw.svg";
import mercedesLogo from "../assets/images/mercedes.svg";
import ferrariLogo from "../assets/images/ferrari.svg";
import porscheLogo from "../assets/images/porsche.svg";
import audiLogo from "../assets/images/audi.svg";
import lamborghiniLogo from "../assets/images/lamborghini.svg";


function Home() {
  return (
    <section className="hero-section">
      <video autoPlay loop muted playsInline>
        <source src={carsVideo} type="video/mp4" />
      </video>

     <div className="hero-content">
      <h2>Drive Your Dream Car Today... </h2>

      <p className="hero-description" >Premium exotic and luxury car rentals. <br />
          Select your vehicle, book in minutes, <br />
           and experience ultimate performance.
        </p>

        <div className="brand-logos">
          <div className="logo-item white-bg"><img src={bmwLogo} alt="BMW" /></div>
          <div className="logo-item dark-bg"><img src={mercedesLogo} alt="Mercedes" /></div>
          <div className="logo-item white-bg"><img src={lamborghiniLogo} alt="lamborghini" /></div>
          <div className="logo-item dark-bg"><img src={porscheLogo} alt="Porsche" /></div>
          <div className="logo-item white-bg"><img src={audiLogo} alt="Audi" /></div>
           <div className="logo-item dark-bg"><img src={ferrariLogo } alt="ferrari" /></div>
        </div>
     </div>
    </section>
  );
}

export default Home;
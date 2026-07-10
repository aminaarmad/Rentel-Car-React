import Logo from "../assets/images/logo.png";

function Navbar() {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();}
  return (
    <nav>
          <div className="logo">
        <img src={Logo} alt="DriveLux Log "/>
       <h2>DriveLux</h2>
       </div>

      <ul className="navbar-links">
        <li><a href="#about">About Us</a></li>
        <li><a href="#cars">All Cars</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
    </nav>
  )
}

export default Navbar


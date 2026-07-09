import React, { useState } from 'react';
import Swal from 'sweetalert2';

// === (Sports) ===
import porsche911 from '../assets/images/Porsche 911 GT3 RS.jpg';
import bmwM4 from '../assets/images/BMW M4 Competition.jpg';
import corvette from '../assets/images/Chevrolet Corvette Z06.jpg';

// === (Luxury) ===
import rollsGhost from '../assets/images/Rolls-Royce Ghost.jpg';
import maybach from '../assets/images/Mercedes-Benz S-Class Maybach.jpg';
import bentley from '../assets/images/Bentley Flying Spur.jpg';

// === (Electric) ===
import teslaRoadster from '../assets/images/Tesla Roadster.jpg';
import taycan from '../assets/images/Porsche Taycan Turbo.jpg';
import audietron from '../assets/images/Audi e-tron GT.jpg';

// === (SUVs) ===
import g63 from '../assets/images/Mercedes-AMG G63.jpg';
import urus from '../assets/images/Lamborghini Urus Performantee.jpg';
import rangeRover from '../assets/images/Range Rover Autobiography.jpg';

// === (Supercars) ===
import ferrariSF90 from '../assets/images/Ferrari SF90 Stradale.jpg';
import mclaren750s from '../assets/images/McLaren 750S.jpg';
import revuelto from '../assets/images/Lamborghini Revuelto.jpg';

const CARS_DATA = [
    // === 1. Sports ===
    { 
      id: 1, name: "Porsche 911", model: "GT3 RS 2025", category: "Sports", pricePerDay: 600, image: porsche911,
      isAvailable: true, specs: { engine: "4.0L Flat-6", hp: "518 HP", transmission: "Automatic", fuel: "Petrol" }
    },
    { 
      id: 2, name: "BMW M4", model: "Competition 2025", category: "Sports", pricePerDay: 450, image: bmwM4,
      isAvailable: true, specs: { engine: "3.0L Twin-Turbo", hp: "503 HP", transmission: "Automatic", fuel: "Petrol" }
    },
    { 
      id: 3, name: "Chevrolet Corvette", model: "Z06 2024", category: "Sports", pricePerDay: 500, image: corvette,
      isAvailable: true, specs: { engine: "5.5L V8", hp: "670 HP", transmission: "Automatic", fuel: "Petrol" }
    },

    // === 2. Luxury ===
    { 
      id: 4, name: "Rolls-Royce", model: "Ghost 2025", category: "Luxury", pricePerDay: 1200, image: rollsGhost,
      isAvailable: true, specs: { engine: "6.75L V12", hp: "563 HP", transmission: "Automatic", fuel: "Petrol" }
    },
    { 
      id: 5, name: "Mercedes-Benz", model: "S-Class Maybach 2026", category: "Luxury", pricePerDay: 900, image: maybach,
      isAvailable: true, specs: { engine: "6.0L V12 Twin-Turbo", hp: "621 HP", transmission: "Automatic", fuel: "Petrol" }
    },
    { 
      id: 6, name: "Bentley", model: "Flying Spur 2025", category: "Luxury", pricePerDay: 850, image: bentley,
      isAvailable: true, specs: { engine: "4.0L V8 Twin-Turbo", hp: "542 HP", transmission: "Automatic", fuel: "Petrol" }
    },

    // === 3. Electric ===
    { 
      id: 7, name: "Tesla Roadster", model: "SpaceX Edition 2026", category: "Electric", pricePerDay: 750, image: teslaRoadster,
      isAvailable: false, specs: { engine: "Quad-Motor", hp: "1000+ HP", transmission: "Single-Speed", fuel: "Electric" }
    },
    { 
      id: 8, name: "Porsche Taycan", model: "Turbo S 2025", category: "Electric", pricePerDay: 650, image: taycan,
      isAvailable: true, specs: { engine: "Dual-Motor", hp: "938 HP", transmission: "2-Speed Auto", fuel: "Electric" }
    },
    { 
      id: 9, name: "Audi e-tron GT", model: "RS 2025", category: "Electric", pricePerDay: 550, image: audietron,
      isAvailable: false, specs: { engine: "Dual-Motor", hp: "637 HP", transmission: "2-Speed Auto", fuel: "Electric" }
    },

    // === 4. SUVs ===
    { 
      id: 10, name: "Mercedes-AMG", model: "G63 2025", category: "SUVs", pricePerDay: 550, image: g63,
      isAvailable: false, specs: { engine: "4.0L V8 BiTurbo", hp: "577 HP", transmission: "Automatic", fuel: "Petrol" }
    },
    { 
      id: 11, name: "Lamborghini Urus", model: "Performante 2025", category: "SUVs", pricePerDay: 800, image: urus,
      isAvailable: true, specs: { engine: "4.0L V8 Twin-Turbo", hp: "657 HP", transmission: "Automatic", fuel: "Petrol" }
    },
    { 
      id: 12, name: "Range Rover", model: "Autobiography 2026", category: "SUVs", pricePerDay: 600, image: rangeRover,
      isAvailable: true, specs: { engine: "4.4L Twin-Turbo V8", hp: "523 HP", transmission: "Automatic", fuel: "Petrol" }
    },

    // === 5. Supercars ===
    { 
      id: 13, name: "Ferrari SF90", model: "Stradale 2024", category: "Supercars", pricePerDay: 1000, image: ferrariSF90,
      isAvailable: true, specs: { engine: "4.0L V8 Hybrid", hp: "986 HP", transmission: "Automatic", fuel: "Hybrid" }
    },
    { 
      id: 14, name: "McLaren 750S", model: "Performance 2025", category: "Supercars", pricePerDay: 950, image: mclaren750s,
      isAvailable: true, specs: { engine: "4.0L Twin-Turbo V8", hp: "740 HP", transmission: "Automatic", fuel: "Petrol" }
    },
    { 
      id: 15, name: "Lamborghini", model: "Revuelto 2026", category: "Supercars", pricePerDay: 1100, image: revuelto,
      isAvailable: true, specs: { engine: "6.5L V12 Hybrid", hp: "1001 HP", transmission: "Automatic", fuel: "Hybrid" }
    }
  ];

function Fleet() {
    
  const [activeCategory, setActiveCategory] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [cars, setCars] = useState(CARS_DATA);
  const [selectedCar, setSelectedCar] = useState(null);
  const [days, setDays] = useState(1);
  const [bookingDate, setBookingDate] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  const handleConfirmBooking = () => {
    Swal.fire({
      title: '🎉 Booking Confirmed!',
      html: `
        <div style="text-align: left; font-family: 'Inter', sans-serif; padding: 10px; line-height: 1.8;">
          <p><strong>Thank you, ${fullName}!</strong> Your luxury ride is secured.</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 10px 0;">
          <p>📍 <strong>City/Wilaya:</strong> ${city}</p>
          <p>📞 <strong>Phone:</strong> ${phone}</p>
          <p>📅 <strong>Date:</strong> ${bookingDate}</p>
        </div>
      `,
      icon: 'success',
      confirmButtonText: 'Great!',
      confirmButtonColor: '#800020', 
      background: '#ffffff',
      borderRadius: '16px',
      customClass: {
        popup: 'my-custom-swal'
      }
    }); 

    setSelectedCar(null); 
  };

  const categories = ['Sports', 'Luxury', 'Electric', 'SUVs', 'Supercars'];

   const displayedCars = activeCategory 
    ? CARS_DATA.filter(car => car.category === activeCategory)
    : (showAll ? CARS_DATA : CARS_DATA.slice(0, 5));


return (
    <section id="cars" className="fleet-section">
      <div className="fleet-container">
        
        <h2 className="fleet-title">Browse By Category</h2>

        <div className="category-bar">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false);
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="cars-grid">
          {displayedCars.map((car) => (
            <div key={car.id} className="car-card" onClick={() => setSelectedCar(car)}>
              <div className="car-img-container">
                <span className={`availability-badge ${car.isAvailable ? 'available' : 'rented'}`}>
                  {car.isAvailable ? 'Available' : 'Rented'}
                </span>
                <img src={car.image} alt={car.name} className="car-img" />
              </div>
              
              <div className="car-info">
                <h3 className="car-name">{car.name}</h3>
                <p className="car-model">{car.model}</p>
                <div className="car-footer">
                  <span className="car-price">{car.pricePerDay}$<span>/ Day</span></span>
                  <button className="rent-btn">Rent Now</button>
                </div>
              </div>
            </div>
          ))}

          {!activeCategory && !showAll && (
            <div className="car-card show-all-card" onClick={() => setShowAll(true)}>
              <div className="show-all-content">
                <div className="plus-icon">+</div>
                <h3>Show All Cars</h3>
                <p>Explore our full fleet of 15 luxury vehicles</p>
              </div>
            </div>
          )}
        </div>

      </div>

      {selectedCar && (
        <div className="modal-overlay" onClick={() => { setSelectedCar(null); setDays(1); }}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            
          
            <button className="modal-close-btn" onClick={() => { setSelectedCar(null); setDays(1); }}>×</button>
            
            <div className="modal-body">
            
              <div className="modal-img-container">
                <img src={selectedCar.image} alt={selectedCar.name} className="modal-car-img" />
              </div>

              <div className="modal-details">
                <span className="modal-category">{selectedCar.category}</span>
                <h2>{selectedCar.name}</h2>
                <p className="modal-model-text">{selectedCar.model}</p>

                <div className="modal-specs-grid">
                  <div className="spec-item"><strong>Engine:</strong> {selectedCar.specs.engine}</div>
                  <div className="spec-item"><strong>Power:</strong> {selectedCar.specs.hp}</div>
                  <div className="spec-item"><strong>Fuel:</strong> {selectedCar.specs.fuel}</div>
                  <div className="spec-item"><strong>Gearbox:</strong> {selectedCar.specs.transmission}</div>
                </div>

             <hr className="modal-divider" />

<div className="booking-form">
  
  <div className="form-group">
    <label>Pick-up Date:</label>
    <input 
      type="date" 
      value={bookingDate} 
      onChange={(e) => setBookingDate(e.target.value)} 
    />
  </div>

  <div className="form-group">
    <label>Full Name:</label>
    <input 
      type="text" 
      placeholder="Enter your full name" 
      value={fullName} 
      onChange={(e) => setFullName(e.target.value)} 
    />
  </div>

  <div className="form-group">
    <label>Phone Number:</label>
    <input 
      type="tel" 
      placeholder="0555 xx xx xx" 
      value={phone} 
      onChange={(e) => setPhone(e.target.value)} 
    />
  </div>

  <div className="form-group">
    <label>City / Wilaya:</label>
    <select value={city} onChange={(e) => setCity(e.target.value)}>
      <option value="">Select your city</option>
      <option value="New York City (NYC)">New York City (NYC)</option>
      <option value="Los Angeles (LA)">Los Angeles (LA)</option>
      <option value="Miami">Miami</option>
      <option value="Chicago">Chicago</option>
    </select>
  </div>

</div>


<div className="price-calculator">
  <div className="calculator-row">
    <label>Rental Days:</label>
    <input 
      type="number" 
      min="1" 
      max="30" 
      value={days} 
      onChange={(e) => setDays(Math.max(1, parseInt(e.target.value) || 1))}
      className="days-input"
    />
  </div>
  
  <div className="calculator-row price-summary">
    <span>Price per Day:</span>
    <strong>{selectedCar.pricePerDay}$</strong>
  </div>

  <div className="calculator-row total-row">
    <span>Total Price:</span>
    <span className="total-price-value">{selectedCar.pricePerDay * days}$</span>
  </div>
</div>

<button 
  className="confirm-booking-btn"
  onClick={handleConfirmBooking}
  disabled={!bookingDate || !fullName || !phone || !city}
>
  Confirm Booking
</button>

              </div>
            </div>

          </div>
        </div>
      )}
   

    </section> 
  ); 
}

export default Fleet;
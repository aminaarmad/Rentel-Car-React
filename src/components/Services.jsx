import { useEffect, useRef } from 'react';

function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
 
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        sectionRef.current.classList.add('animate');
      } else {
        sectionRef.current.classList.remove('animate');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="about" className="services-section" ref={sectionRef}>
      <h2 className="section-title">Our Premium Services</h2>
      <div className="services-grid">
        
        {/* 01 */}
        <div className="service-card" style={{ '--index': 1 }}>
          <div className="service-icon-svg">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124l-.321-5.128a3.375 3.375 0 0 0-3.32-3.165H16.5m-1.5 1.5v-1.5m0 0H10.5m4.5 0v3.375c0 .621-.504 1.125-1.125 1.125h-3a1.125 1.125 0 0 1-1.125-1.125V6.75M4.5 10.5h11.25V14.25H4.5V10.5Z" />
            </svg>
          </div>
          <h3>Luxury Car Rental</h3>
          <p>Choose from our elite fleet of modern and supercar vehicles for any occasion.</p>
        </div>

        {/* 02 */}
        <div className="service-card" style={{ '--index': 2 }}>
          <div className="service-icon-svg">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </div>
          <h3>Chauffeur Service</h3>
          <p>Professional and multilingual drivers at your service for a safe, VIP travel experience.</p>
        </div>

        {/* 03 */}
        <div className="service-card" style={{ '--index': 3 }}>
          <div className="service-icon-svg">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L6 12Zm0 0h7.5" />
            </svg>
          </div>
          <h3>Airport Transfer</h3>
          <p>Reliable and punctual pick-up and drop-off services right at the airport terminal.</p>
        </div>

        {/* 04 */}
        <div className="service-card" style={{ '--index': 4 }}>
          <div className="service-icon-svg">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A1.5 1.5 0 1 0 19.38 18.87l-5.83-5.83m.002-1.401a3 3 0 1 1-4.243-4.243 3 3 0 0 1 4.243 4.243ZM11.42 15.17l-5.83 5.83A1.5 1.5 0 1 1 3.47 18.87l5.83-5.83m2.12 2.13a3 3 0 1 1-4.242-4.243 3 3 0 0 1 4.242 4.243Z" />
            </svg>
          </div>
          <h3>24/7 Road Assistance</h3>
          <p>Our dedicated support team is always ready to assist you anywhere, anytime.</p>
        </div>

      </div>
    </div>
  );
}

export default Services;
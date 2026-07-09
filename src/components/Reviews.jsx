import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

function Reviews() {
  const reviewsData = [
    { 
      name: "Mila A.", 
      location: "New York City", 
      text: "Amazing experience! The Porsche 911 was in perfect condition, and the booking process was super smooth. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" 
    },
    { 
      name: "Max K.", 
      location: "Miami", 
      text: "Top-notch luxury service. The Maybach was pristine, and the chauffeur was highly professional. Will definitely rent again.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150" 
    },
    { 
      name: "Jarel B.", 
      location: "Chicago", 
      text: "Very fast and clean service. The Tesla Roadster felt out of this world. Best luxury rental agency by far!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" 
    },
    { 
      name: "Emey M.", 
      location: "Los Angeles (LA)", 
      text: "Unmatched performance and elite fleet. Driving the Lamborghini around the city was unforgettable.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" 
    },
    { 
      name: "Soltane Z.", 
      location: "Miami", 
      text: "Simply stunning. Rented the Rolls-Royce for a wedding, and the service was absolutely immaculate. 10/10!",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150" 
    },
    { 
      name: "Rayen S.", 
      location: "Chicago", 
      text: "The definition of premium. 24/7 support was helpful when I needed to extend my rental duration instantly.",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150"
    }
  ];

  return (
    <div className="reviews-section">
      <h2 className="section-title">What Our Clients Say</h2>
      
      <Swiper
        modules={[Autoplay, Pagination, EffectCoverflow]}
        effect={'coverflow'} 
        grabCursor={true}
        centeredSlides={true} 
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        coverflowEffect={{
          rotate: 20,     
          stretch: 0,
          depth: 150,     
          modifier: 1,
          slideShadows: false, 
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 } 
        }}
        className="reviews-swiper"
      >
        {reviewsData.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="review-card">
              <div className="review-stars">⭐⭐⭐⭐⭐</div>
              <p className="review-text">"{review.text}"</p>
              
              <div className="review-user-box">
                <img src={review.avatar} alt={review.name} className="review-avatar" />
                <div className="review-user-info">
                  <h4>{review.name}</h4>
                  <span>{review.location}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Reviews;
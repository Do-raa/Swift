import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 


export default function Carousel() {
    useEffect(() => {
        // Import the Bootstrap JavaScript file
        require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/bmw.webp" className="d-block w-100" alt="First Slide" />
                    <div className="carousel-caption d-none d-md-block" style={{ top: '50%', transform: 'translateY(-50%)', bottom: 'auto' }}>
                        <h5 className="font-bold text-4xl font-mono">Great rental experience! Easy process and billing. Many agencies. Very welcoming and helpful staff. Highly recommended!
                           </h5>
                        <p className="semi-bold text-xl"> — Marie-Andrée, Madrid</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="hundai.jpeg" className="d-block w-100" alt="Second Slide" />
                    <div className="carousel-caption d-none d-md-block" style={{ top: '50%', transform: 'translateY(-50%)', bottom: 'auto' }}>
                        <h5 className="font-bold text-4xl font-mono">Great car rental agency with very professional customer service. I have rented here twice already and am very satisfied, the agents are understanding and accommodating. I recommend!
                           </h5>
                        <p className="semi-bold text-xl"> — Loraine, New York</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="mercedes.jpeg" className="d-block w-100" alt="Third Slide" />
                    <div className="carousel-caption d-none d-md-block" style={{ top: '50%', transform: 'translateY(-50%)', bottom: 'auto' }}>
                        <h5 className="font-bold text-4xl font-mono">Perfect welcome and staff. We had a higher range car than the one booked, it was clean and in very good condition. I recommend 100%!
                           </h5>
                        <p className="semi-bold text-xl"> — Guillaume, Munich</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

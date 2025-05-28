import React from 'react';
import { Button } from 'react-bootstrap';
import './WelcomeVideoSection.css'; // Correctly import your CSS file
import VideoSection from '../img/videosection.png'; // Adjust the path as necessary
const WelcomeVideoSection = () => {
    return (
        <div className="text-center py-2">
            <h2 className="fw-bold display-6">
                We’re <span className="underline">Welcoming</span> New Patients<br />
                And Can’t Wait To Meet You.
            </h2>
            <p className="text-muted my-3">
                We use only the best quality materials on the market in<br />
                order to provide the best products to our patients.
            </p>

            <div className="position-relative d-inline-block rounded overflow-hidden my-4 shadow-sm">
                <img
                    src={VideoSection}
                    alt="Dentist"
                    className="img-fluid rounded"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                <button className="play-button position-absolute top-50 start-50 translate-middle border-0 bg-white rounded-circle shadow">
                    ▶
                </button>
            </div>
            <div>
                <Button variant="primary" className="rounded py-3 px-4 fw-bold">
                    Watch Playlist
                </Button>
            </div>

        </div>
    );
};

export default WelcomeVideoSection;

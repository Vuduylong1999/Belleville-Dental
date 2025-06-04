import React, { useState, useEffect } from 'react';
import './styles/VisitorCounter.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const VisitorCounter = () => {
    const [visitorCount, setVisitorCount] = useState(1387);

    useEffect(() => {
        // Simulate random visitor increase
        const interval = setInterval(() => {
            setVisitorCount(prev => prev + Math.floor(Math.random() * 3));
        }, 30000); // Update every 30 seconds

        return () => clearInterval(interval);
    }, []);

    const formatVisitorCount = (count) => {
        return count.toString().padStart(4, '0').split('');
    };

    return (
        <div className="visitor-counter d-flex align-items-center bg-light rounded-pill px-3 py-2">
            <div className="d-flex flex-column align-items-end">
                <div className="d-flex align-items-center">
                    <i className="fas fa-users me-2 text-primary"></i>
                    <div className="counter-digits">
                        {formatVisitorCount(visitorCount).map((digit, index) => (
                            <span key={index} className="digit">{digit}</span>
                        ))}
                    </div>
                </div>
                <small className="text-muted">visitors today</small>
            </div>
        </div>
    );
};

export default VisitorCounter;
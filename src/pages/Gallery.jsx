import React from "react";
import CardSlider from "../components/CardSlider";

// Import product images
import CharcoalToothbrush from '../assets/CharcoalToothbrush.jpg';
import ElectricToothbrushPro from '../assets/ElectricToothbrushPro.png';
import KidsElectricToothbrush from '../assets/KidsElectricToothbrush.jpg';
import SmartElectricBrush from '../assets/SmartElectricBrush.jpg';

// Import education images
import Rectangle1 from '../assets/Rectangle1.png';
import Rectangle2 from '../assets/Rectangle2.png';
import Rectangle3 from '../assets/Rectangle3.png';
import Rectangle4 from '../assets/Rectangle4.png';

// Import specialist images
import james from '../assets/james.png';
import bren from '../assets/bren.png';
import ashish from '../assets/ashish.png';

const Gallery = () => {
    const productGallery = [
        {
            img: CharcoalToothbrush,
            tag: "Products",
            author: "Dental Care",
            title: "Charcoal Toothbrush",
            desc: "Premium charcoal-infused bristles for natural whitening"
        },
        {
            img: ElectricToothbrushPro,
            tag: "Products",
            author: "Dental Care",
            title: "Electric Toothbrush Pro",
            desc: "Advanced sonic technology for superior cleaning"
        },
        {
            img: KidsElectricToothbrush,
            tag: "Products",
            author: "Dental Care",
            title: "Kids Electric Toothbrush",
            desc: "Fun and effective dental care for children"
        },
        {
            img: SmartElectricBrush,
            tag: "Products",
            author: "Dental Care",
            title: "Smart Electric Brush",
            desc: "Bluetooth-enabled for personalized brushing experience"
        }
    ];

    const educationGallery = [
        {
            img: Rectangle1,
            tag: "Education",
            author: "Dental Education",
            title: "Proper Brushing Techniques",
            desc: "Learn the correct way to brush for optimal dental health"
        },
        {
            img: Rectangle2,
            tag: "Education",
            author: "Dental Education",
            title: "Dental Care for Kids",
            desc: "Essential tips for maintaining children's oral health"
        },
        {
            img: Rectangle3,
            tag: "Education",
            author: "Dental Education",
            title: "Gum Disease Prevention",
            desc: "Understanding and preventing periodontal diseases"
        },
        {
            img: Rectangle4,
            tag: "Education",
            author: "Dental Education",
            title: "Modern Dental Technologies",
            desc: "Exploring latest innovations in dental care"
        }
    ];

    const specialistGallery = [
        {
            img: james,
            tag: "Specialist",
            author: "Senior Dentist",
            title: "Dr. James Wilson",
            desc: "Specializing in Cosmetic Dentistry with 15 years of experience"
        },
        {
            img: bren,
            tag: "Specialist",
            author: "Lead Orthodontist",
            title: "Dr. Bren Murphy",
            desc: "Expert in orthodontic treatments and dental alignments"
        },
        {
            img: ashish,
            tag: "Specialist",
            author: "Pediatric Specialist",
            title: "Dr. Ashish Patel",
            desc: "Dedicated to providing gentle care for young patients"
        }
    ];

    return (
        <div className="gallery-container">
            <header className="gallery-header text-center my-5">
                <h1 className="display-4">Gallery</h1>
                <p className="lead">Explore our products, educational resources, and meet our specialists</p>
            </header>
            <section className="product-gallery my-5">
                <div className="container">
                    <h2 className="text-center mb-4">Product Gallery</h2>
                    <CardSlider cards={productGallery} />
                </div>
            </section>

            <section className="education-gallery my-5" style={{ backgroundColor: '#f8f9fa', padding: '3rem 0' }}>
                <div className="container">
                    <h2 className="text-center mb-4">Educational Resources</h2>
                    <CardSlider cards={educationGallery} />
                </div>
            </section>

            <section className="specialist-gallery my-5">
                <div className="container">
                    <h2 className="text-center mb-4">Our Specialists</h2>
                    <CardSlider cards={specialistGallery} />
                </div>
            </section>
        </div>
    );
};

export default Gallery;
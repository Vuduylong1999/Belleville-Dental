import SmartElectricBrush from '../assets/SmartElectricBrush.jpg';
import WhiteningToothpaste from '../assets/WhiteningToothpaste.png';
import MintFreshToothpaste from '../assets/MintFreshToothpaste.png';
import UltraSoftBrush from '../assets/UltraSoftBrush.png';
import KidsStrawberryToothpaste from '../assets/KidsStrawberryToothpaste.jpg';
import { halioSonicSmartclean } from './product-details';
import ElectricToothbrushPro from '../assets/ElectricToothbrushPro.png';
import KidsElectricToothbrush from '../assets/KidsElectricToothbrush.jpg';
import CharcoalToothbrush from '../assets/CharcoalToothbrush.jpg';

export const products = [{
    id: 1,
    title: "Halio Sonic SmartClean",
    price: "16.99",
    oldPrice: "39.99",
    mota: "Advanced sonic toothbrush with 42,000 vibrations per minute.",
    img: SmartElectricBrush,
    rating: 4.8,
    features: [
        "42,000 vibrations/min sonic technology",
        "4 cleaning modes for all needs",
        "25-day battery life",
        "IPX7 waterproof design",
        "Smart timer with zone reminder"
    ],
    specifications: {
        technology: "Sonic Wave",
        modes: "Clean, Soft, Whitening, Deep Clean",
        batteryLife: "25 days",
        charging: "4 hours (USB-C)",
        waterResistance: "IPX7",
        color: ["Ocean Blue", "Rose Pink"]
    }
},
{
    id: 2,
    title: "Pro Whitening Toothpaste",
    price: "5.99",
    oldPrice: "7.99",
    mota: "Advanced whitening formula for a brighter smile.",
    img: WhiteningToothpaste,
    rating: 4.5,
    features: [
        "Professional whitening formula",
        "Enamel protection",
        "Fresh mint flavor",
        "Fluoride for cavity protection"
    ],
    specifications: {
        size: "150g",
        flavor: "Fresh Mint",
        ingredients: "Fluoride, Silica, Glycerin",
        type: "Whitening"
    }
},
{
    id: 3,
    title: "Fresh Mint Complete Care",
    price: "4.99",
    oldPrice: "5.99",
    mota: "Long-lasting fresh breath and complete cavity protection.",
    img: MintFreshToothpaste,
    rating: 4.6,
    features: [
        "24-hour fresh breath protection",
        "Cavity prevention formula",
        "Strengthens enamel",
        "Gentle on sensitive teeth"
    ],
    specifications: {
        size: "125g",
        flavor: "Cool Mint",
        ingredients: "Sodium Fluoride, Natural Mint Extract",
        type: "Complete Care"
    }
},
{
    id: 4,
    title: "Ultra-Soft Sensitive Brush", price: "2.99",
    oldPrice: "3.99",
    mota: "Gentle on gums, tough on plaque with ultra-soft bristles.",
    img: UltraSoftBrush,
    rating: 4.7,
    features: [
        "Ultra-soft bristles",
        "Ergonomic handle design",
        "Tongue cleaner",
        "Slim neck for hard-to-reach areas"
    ],
    specifications: {
        bristleType: "Ultra-soft",
        handle: "Ergonomic grip",
        cleaningFeatures: ["Tongue cleaner", "Gum massager"],
        material: "BPA-free plastic"
    }
},
{
    id: 8,
    title: "Kids Strawberry Toothpaste", price: "3.99",
    oldPrice: "4.99",
    mota: "Kid-friendly strawberry flavor with essential cavity protection.",
    img: KidsStrawberryToothpaste,
    rating: 4.8,
    features: [
        "Delicious strawberry flavor",
        "Fluoride for cavity protection",
        "No artificial sweeteners",
        "Safe if swallowed"
    ],
    specifications: {
        size: "75g",
        flavor: "Natural Strawberry",
        ageRange: "3-12 years",
        ingredients: "Calcium, Fluoride, Natural Flavors",
        type: "Children's Toothpaste"
    }
}
];

export const categories = [
    {
        id: 1,
        name: "Electric Toothbrushes",
        count: products.filter(p => p.specifications?.cleaningTechnology === "Sonic").length
    },
    {
        id: 2,
        name: "Manual Toothbrushes",
        count: products.filter(p => p.specifications?.bristleType).length
    },
    {
        id: 3,
        name: "Toothpaste",
        count: products.filter(p => p.specifications?.type?.includes("paste")).length
    },
    {
        id: 4,
        name: "Kids Products",
        count: products.filter(p => p.specifications?.ageRange).length
    }
];

export const electricToothbrushes = [
    {
        id: 5,
        title: "Pro Electric Toothbrush",
        author: "Anita Jackson",
        price: "29.99",
        mota: "Professional-grade electric toothbrush with advanced cleaning modes.",
        img: ElectricToothbrushPro,
        tag: "Electric Toothbrush",
        rating: 4.9,
        features: [
            "5 professional cleaning modes",
            "Smart pressure sensor",
            "30-day battery life",
            "2-minute timer with quad-pacer",
            "UV sanitizing charging base"
        ],
        specifications: {
            technology: "Sonic Wave Pro",
            modes: "Clean, White, Sensitive, Massage, Deep Clean",
            batteryLife: "30 days",
            charging: "4 hours (UV sanitizing base)",
            waterResistance: "IPX7",
            color: ["Metallic Silver", "Space Gray"],
            warranty: "3 years"
        }
    },
    {
        id: 6,
        title: "Kids Electric Toothbrush",
        author: "John Doe",
        price: "24.99",
        mota: "Fun and effective electric toothbrush designed for children.",
        img: KidsElectricToothbrush,
        tag: "Electric Toothbrush",
        rating: 4.6,
        features: [
            "Fun LED light display",
            "Musical 2-minute timer",
            "Extra soft bristles for kids",
            "Easy-grip handle design",
            "Waterproof construction"
        ],
        specifications: {
            technology: "Gentle Sonic",
            modes: "Gentle Clean, Extra Gentle",
            batteryLife: "14 days",
            charging: "8 hours (USB)",
            waterResistance: "IPX6",
            color: ["Ocean Blue", "Bubble Pink"],
            ageRange: "5-12 years"
        }
    },
    {
        id: 7,
        title: "Charcoal Toothbrush",
        author: "Jane Smith",
        price: "15.99",
        mota: "Natural charcoal bristles for deep cleaning and whitening.",
        img: CharcoalToothbrush,
        tag: "Electric Toothbrush",
        rating: 4.7,
        features: [
            "Natural charcoal-infused bristles",
            "3 intensity settings",
            "Built-in whitening mode",
            "20-day battery life",
            "Ergonomic slim design"
        ],
        specifications: {
            technology: "Charcoal Sonic",
            modes: "Clean, White, Sensitive",
            batteryLife: "20 days",
            charging: "6 hours (USB-C)",
            waterResistance: "IPX7",
            color: ["Matte Black"],
            bristleType: "Charcoal-infused"
        }
    }
];

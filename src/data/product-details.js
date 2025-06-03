import banChaiTrong from '../img/anh-ban-chai-ben-trong1.png';
import banChai2 from '../img/ban-chai-dien-2.webp';
import banChai3 from '../img/ban-chai-dien-3.webp';
import banChai2Doi from '../img/ban-chai-dien-2-doi.webp';
import banChai3Doi from '../img/ban-chai-dien-3-doi.webp';
import banChai4 from '../img/ban-chai-dien-4.webp';
import banChai5 from '../img/ban-chai-dien-5.webp';
import banChai6 from '../img/ban-chai-dien-6.webp';
import banChai7 from '../img/ban-chai-dien-7.webp';
import banChai8 from '../img/ban-chai-dien-8.webp';
import banChai9 from '../img/ban-chai-dien-9.webp';
import banChai10 from '../img/ban-chai-dien-10.webp';
import banChaiMoTa from '../img/ban-chai-mo-ta-1.webp';
import banChaiMoTa2 from '../img/ban-chai-mo-ta2.webp';
import banChaiMota3 from '../img/ban-chai-mo-ta3.webp';
import banChaiMoTa4 from '../img/ban-chai-mo-ta4.webp';

export const halioSonicSmartclean = {
    id: 1,
    title: "Halio Sonic SmartClean Electric Toothbrush",
    price: "379,000",
    oldPrice: "900,000",
    rating: 5,
    mainImage: banChaiTrong,
    images: [
        banChaiTrong,
        banChai2,
        banChai3,
        banChai2Doi,
        banChai3Doi,
        banChai4,
        banChai5,
        banChai6,
        banChai7, 
        banChai8,
        banChai9,
        banChai10
    ],
    contentImages: {
        technology: banChaiMoTa,
        design: banChaiMoTa2,
        modes: banChaiMota3,
        usage: banChaiMoTa4
    },
    colors: [
        {
            name: "Blue",
            image: banChai2,
            price: "379,000"
        },
        {
            name: "Pink", 
            image: banChai3,
            price: "379,000"
        }
    ],
    specifications: {
        cleaningTechnology: "Sonic",
        modes: ["Clean", "Whitening", "Sensitive", "Deep Clean"],
        vibrationFrequency: "42,000 strokes/min (Sonic)",
        features: [
            "2-minute brushing timer",
            "30-second interval reminder",
            "Memory for preferred mode",
            "Dupont bristles"
        ],
        batteryType: "Lithium-ion battery",
        batteryCapacity: {
            chargeTime: "4 hours",
            usageTime: "25 days (2 times/day)"
        },
        chargingPort: "Type-C",
        waterResistance: "IPX7",
        manufacturer: "Halio"
    },
    keyFeatures: [
        "Sonic wave technology with 42,000 vibrations per minute for more effective cleaning",
        "Quiet Maglev motor, 4 modes suitable for all needs", 
        "Zone reminder, 2-minute timer, memory for frequently used functions",
        "Waterproof IPX7, fast Type-C charging, 800mAh Lithium Ion battery lasts 25 days",
        "Antibacterial Dupont brush head, soft bristles, does not scratch gums"
    ],
    inclusions: [
        "1 x Brush handle",
        "1 x Brush head", 
        "1 x USB-C charging cable",
        "1 x User manual"
    ],
    warranty: {
        duration: "12 months",
        terms: "Official warranty at authorized service centers, 1-to-1 exchange within 30 days if hardware defects from the manufacturer occur."
    },
    additionalInfo: {
        payment: "Price includes VAT",
        condition: "New, complete accessories from the manufacturer"
    }
};

export const productContentSections = [
    {
        title: "Why choose the Halio Sonic SmartClean Electric Toothbrush?",
        content: [
            "The Halio Sonic SmartClean Electric Toothbrush features a modern design and cleans with Sonic wave technology that is 10 times more effective than a regular toothbrush. This Halio health care device offers 4 cleaning modes: Clean, Soft, Whitening, and Deep Clean, combined with a durable, noise-reducing Maglev motor. The toothbrush is IPX7 waterproof, equipped with an 800mAh Lithium Ion battery, charges in 4 hours, and can be used for up to 25 days.",
            "The Halio Sonic SmartClean Electric Toothbrush has many impressive features worth investing in for the following reasons:",
            "- Integrates 4 cleaning modes suitable for various needs, from gentle cleaning to whitening and caring for sensitive teeth.",
            "- Waterproof design with IPX7 rating and durable Maglev motor, reducing noise for safe and comfortable use.",
            "- Large 800mAh Lithium Ion battery, requires only 4 hours to charge and can last up to 25 days, saving time and effort."
        ]
    },
    {
        title: "Halio Sonic SmartClean Electric Toothbrush – Effective protection and care solution with advanced features",
        content: [
            "The Halio Sonic SmartClean Electric Toothbrush is becoming the top choice for those who care about oral hygiene. With advanced Sonic wave technology, it not only optimizes cleaning but also effectively prevents harmful dental issues."
        ]
    },
    {
        title: "Sonic wave technology, durable design with Maglev motor",
        content: [
            "The Halio Sonic SmartClean Electric Toothbrush impresses with Sonic wave cleaning technology operating at 42,000 vibrations per minute. This technology produces micro-bubbles with strong pressure that remove leftover food particles and plaque in hard-to-reach areas. It not only cleans deeply but also whitens teeth better than regular toothbrushes, giving users a more confident and radiant smile.",
            "The Maglev motor in the Halio Sonic SmartClean is designed for durability, minimizing noise and ensuring stability during use. Especially stable at high vibration intensity, it offers a smooth, long-lasting experience. This allows continuous operation without discomfort, providing comfort for daily oral care."
        ]
    },
    {
        title: "How to use the Halio Sonic SmartClean Electric Toothbrush",
        content: [
            "Using the Halio Sonic SmartClean Electric Toothbrush is simple, just follow these steps:",
            "- Step 1: Wet the brush head and apply a small amount of toothpaste, then press and hold the power button for 1-2 seconds to turn it on.",
            "- Step 2: Select the desired mode by pressing the power button lightly, gently move the brush over your teeth, and the device will remind you to change zones every 30 seconds.",
            "- Step 3: After 2 minutes (or 3 minutes on Deep Clean mode), the device will automatically turn off. Then rinse the brush head, clean it, and store in a dry place."
        ]
    }
];

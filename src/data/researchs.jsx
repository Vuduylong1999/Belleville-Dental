import React from "react";
import Rectangle1 from '/src/assets/Rectangle1.png';
import Rectangle2 from '/src/assets/Rectangle2.png';
import Rectangle3 from '/src/assets/Rectangle3.png';
import Rectangle4 from '/src/assets/Rectangle4.png';
import Rectangle5 from '/src/assets/Rectangle5.png';
import Rectangle6 from '/src/assets/Rectangle6.png';
import Rectangle7 from '/src/assets/Rectangle7.png';

// Research Cards shown in the slider
const ResearchCards = [
    {
        id: 1,
        img: Rectangle1,
        tag: "AI in Dentistry",
        author: "Dr. Sarah Mitchell, Ph.D.",
        title: "AI Applications in Dental Diagnostics",
        desc: "Exploring how artificial intelligence is revolutionizing dental diagnosis and treatment planning.",
    },
    {
        id: 2,
        img: Rectangle2,
        tag: "Clinical Research",
        author: "Dr. Michael Lee, DMD",
        title: "3D Printing in Dental Prosthetics",
        desc: "Latest advancements in 3D printing technology for creating dental implants and prosthetics.",
    },
    {
        id: 3,
        img: Rectangle3,
        tag: "Dental Materials",
        author: "Dr. Emily Carter, DDS",
        title: "New Biocompatible Materials",
        desc: "Research on innovative biocompatible materials for dental restorations.",
    },
    {
        id: 4,
        img: Rectangle4,
        tag: "Preventive Care",
        author: "Dr. James Wilson, Ph.D.",
        title: "Nanotechnology in Dental Care",
        desc: "Applications of nanotechnology in preventive dentistry and oral health maintenance.",
    }
];

// Detailed research articles with full content
export const ResearchArticles = [
    {
        id: 1,
        img: Rectangle1,
        tags: ["AI", "Dental Technology", "Diagnostics"],
        title: "AI Applications in Dental Diagnostics",
        desc: "Comprehensive study on the implementation of artificial intelligence in modern dental practices.",
        author: "Dr. Sarah Mitchell, Ph.D.",
        date: "June 1, 2025",
        content: {
            summary: "Artificial Intelligence is revolutionizing dental diagnostics by providing more accurate and efficient ways to detect oral health issues.",
            mainContent: "This research explores the current applications and future potential of AI in dental diagnostics. From automated X-ray analysis to treatment planning, AI is helping dentists make more informed decisions and improve patient outcomes.",
            sections: [
                {
                    title: "Current Applications",
                    bulletPoints: [
                        "Automated caries detection in radiographs",
                        "AI-powered treatment planning systems",
                        "Real-time diagnostic assistance",
                        "Predictive analytics for oral health",
                        "Patient risk assessment tools"
                    ],
                    content: "Modern dental practices are increasingly adopting AI-powered tools to enhance their diagnostic capabilities. These systems can analyze radiographs in seconds, identify potential issues that might be missed by the human eye, and suggest appropriate treatment options."
                },
                {
                    title: "Research Findings",
                    content: [
                        "Our study shows that AI-assisted diagnosis has a 95% accuracy rate in detecting dental caries, compared to 85% with traditional methods.",
                        "Implementation of AI systems has reduced diagnostic time by an average of 60% while improving accuracy."
                    ]
                }
            ],
            quote: {
                text: "AI is not replacing dentists; it is empowering them to make better decisions and provide superior care to their patients.",
                author: "Dr. Sarah Mitchell",
                role: "Ph.D. in Dental Informatics"
            }
        }
    },
    {
        id: 2,
        img: Rectangle2,
        tags: ["3D Printing", "Prosthetics", "Innovation"],
        title: "3D Printing in Dental Prosthetics",
        desc: "Research on the applications and effectiveness of 3D printing technology in creating dental prosthetics.",
        author: "Dr. Michael Lee, DMD",
        date: "May 28, 2025",
        content: {
            summary: "3D printing technology is transforming the field of dental prosthetics by enabling faster, more accurate, and customized solutions for patients.",
            mainContent: "This research examines the impact of 3D printing technology on dental prosthetics manufacturing, comparing traditional methods with modern additive manufacturing techniques.",
            sections: [
                {
                    title: "Benefits of 3D Printing",
                    bulletPoints: [
                        "Increased accuracy and precision",
                        "Faster production time",
                        "Cost-effective manufacturing",
                        "Customization capabilities",
                        "Reduced material waste"
                    ],
                    content: "The adoption of 3D printing in dental prosthetics has led to significant improvements in both the manufacturing process and patient outcomes."
                },
                {
                    title: "Clinical Outcomes",
                    content: [
                        "Patient satisfaction rates have increased by 40% with 3D-printed prosthetics.",
                        "Production time has been reduced from weeks to days, improving treatment efficiency."
                    ]
                }
            ],
            quote: {
                text: "3D printing is revolutionizing how we approach dental prosthetics, making high-quality dental care more accessible and efficient.",
                author: "Dr. Michael Lee",
                role: "DMD, Prosthodontics Specialist"
            }
        }
    },
    {
        id: 3,
        img: Rectangle3,
        tags: ["Materials Science", "Biocompatibility", "Innovation"],
        title: "New Biocompatible Materials",
        desc: "Investigation into advanced biocompatible materials for dental restorations and their clinical applications.",
        author: "Dr. Emily Carter, DDS",
        date: "May 25, 2025",
        content: {
            summary: "The development of new biocompatible materials is crucial for improving dental restoration outcomes and patient satisfaction.",
            mainContent: "This research focuses on novel biocompatible materials that offer improved durability, aesthetics, and tissue compatibility for dental restorations.",
            sections: [
                {
                    title: "Material Properties",
                    bulletPoints: [
                        "Enhanced biocompatibility",
                        "Improved wear resistance",
                        "Better aesthetic properties",
                        "Increased durability",
                        "Reduced allergic reactions"
                    ],
                    content: "The latest generation of dental materials combines superior mechanical properties with excellent biocompatibility."
                },
                {
                    title: "Clinical Applications",
                    content: [
                        "New materials show 30% better durability compared to traditional options.",
                        "Patient reported comfort has improved by 45% with these materials."
                    ]
                }
            ],
            quote: {
                text: "These new materials represent a significant step forward in making dental restorations more natural and longer-lasting.",
                author: "Dr. Emily Carter",
                role: "DDS, Materials Research Specialist"
            }
        }
    },
    {
        id: 4,
        img: Rectangle4,
        tags: ["Nanotechnology", "Preventive Care", "Innovation"],
        title: "Nanotechnology in Dental Care",
        desc: "Exploring the revolutionary applications of nanotechnology in modern preventive dentistry.",
        author: "Dr. James Wilson, Ph.D.",
        date: "May 20, 2025",
        content: {
            summary: "Nanotechnology is opening new frontiers in preventive dental care, offering unprecedented possibilities for treating and preventing oral diseases.",
            mainContent: "This groundbreaking research investigates how nanotechnology can be applied in preventive dentistry, from enhanced cleaning solutions to advanced cavity prevention methods.",
            sections: [
                {
                    title: "Key Applications",
                    bulletPoints: [
                        "Nanoparticle-enhanced dental materials",
                        "Targeted drug delivery systems",
                        "Antimicrobial nanocoatings",
                        "Nano-enhanced remineralization",
                        "Smart dental implant surfaces"
                    ],
                    content: "Nanotechnology applications in dentistry are showing promising results in preventing tooth decay and improving oral health maintenance."
                },
                {
                    title: "Research Impact",
                    content: [
                        "Nanoparticle treatments have shown 75% better penetration into dental tubules.",
                        "Long-term studies indicate a 50% reduction in cavity formation with nano-enhanced preventive treatments."
                    ]
                }
            ],
            quote: {
                text: "Nanotechnology is not just making dental care more effective; it is fundamentally changing how we approach oral health prevention.",
                author: "Dr. James Wilson",
                role: "Ph.D., Nanotechnology Research Director"
            }
        }
    },
    {
        id: 5,
        img: Rectangle5,
        tags: ["Clinical Research", "Patient Care", "Dental Technology"],
        title: "Digital Dentistry Integration",
        desc: "A comprehensive study on the implementation of digital workflows in modern dental practices.",
        author: "Dr. Rachel Thompson, DDS",
        date: "May 15, 2025",
        content: {
            summary: "Digital dentistry is transforming patient care through improved accuracy, efficiency, and treatment outcomes.",
            mainContent: "This research examines the impact of digital technologies on dental practice workflows and patient experiences, from initial consultation to final treatment.",
            sections: [
                {
                    title: "Digital Workflows",
                    bulletPoints: [
                        "Digital impression systems",
                        "CAD/CAM technology integration",
                        "3D treatment planning",
                        "Digital smile design",
                        "Virtual patient consultations"
                    ],
                    content: "The implementation of digital workflows has revolutionized how dental practices operate and deliver care to patients."
                },
                {
                    title: "Clinical Benefits",
                    content: [
                        "Treatment planning time reduced by 40% with digital workflows",
                        "Patient satisfaction scores increased by 65% with digital consultations"
                    ]
                }
            ],
            quote: {
                text: "Digital dentistry is not just about new technology; it is about creating better experiences and outcomes for our patients.",
                author: "Dr. Rachel Thompson",
                role: "DDS, Digital Dentistry Specialist"
            }
        }
    },
    {
        id: 6,
        img: Rectangle6,
        tags: ["Laser Dentistry", "Innovation", "Patient Care"],
        title: "Advanced Laser Applications",
        desc: "Investigation of laser technology applications in modern dental procedures.",
        author: "Dr. David Chen, DMD",
        date: "May 10, 2025",
        content: {
            summary: "Laser technology is revolutionizing dental procedures by providing more precise, less invasive treatment options.",
            mainContent: "This research explores the various applications of laser technology in dental procedures, from soft tissue management to hard tissue ablation.",
            sections: [
                {
                    title: "Clinical Applications",
                    bulletPoints: [
                        "Soft tissue procedures",
                        "Cavity preparation",
                        "Periodontal therapy",
                        "Endodontic treatments",
                        "Teeth whitening enhancement"
                    ],
                    content: "Laser dentistry offers numerous advantages including reduced bleeding, faster healing, and minimized patient discomfort."
                },
                {
                    title: "Patient Outcomes",
                    content: [
                        "Recovery time reduced by 60% compared to traditional methods",
                        "Post-operative pain decreased by 80% in laser-assisted procedures"
                    ]
                }
            ],
            quote: {
                text: "Laser technology represents the future of minimally invasive dentistry, offering better outcomes with less patient discomfort.",
                author: "Dr. David Chen",
                role: "DMD, Laser Dentistry Expert"
            }
        }
    }
];

export default ResearchCards;
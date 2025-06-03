import React from "react";
import Rectangle1 from '/src/assets/Rectangle1.png';
import Rectangle2 from '/src/assets/Rectangle2.png';
import Rectangle3 from '/src/assets/Rectangle3.png';
import Rectangle4 from '/src/assets/Rectangle4.png';
import Rectangle5 from '/src/assets/Rectangle5.png';
import Rectangle6 from '/src/assets/Rectangle6.png';
import Rectangle7 from '/src/assets/Rectangle7.png';

const Card = [
  {
    id: 1,
    img: Rectangle1,
    tag: 'Oral Hygiene',
    author: 'Dr. Emily Carter',
    title: 'Brushing Techniques for Healthy Gums',
    desc: 'Master the art of brushing to prevent plaque buildup and maintain gum health.',
  },  {
    id: 2,
    img: Rectangle2,
    tag: 'Dental Care',
    author: 'Dr. Michael Lee',
    title: 'The Importance of Flossing Daily',
    desc: 'Learn how flossing removes hidden debris and reduces the risk of cavities.',
  },  {
    id: 3,
    img: Rectangle3,
    tag: 'Cosmetic Dentistry',
    author: 'Dr. Sarah Patel',
    title: 'Teeth Whitening: Safe Practices',
    desc: 'Discover safe methods to brighten your smile without damaging enamel.',
  },  {
    id: 4,
    img: Rectangle4,
    tag: 'Preventive Care',
    author: 'Dr. James Nguyen',
    title: 'Regular Dental Checkups: Why They Matter',
    desc: 'Understand how routine visits can catch issues early and save your smile.',
  },  {
    id: 5,
    img: Rectangle5,
    tag: 'Orthodontics',
    author: 'Dr. Laura Kim',
    title: 'Benefits of Early Braces for Kids',
    desc: 'Explore how early intervention can correct bites and boost confidence.',
  },  {
    id: 6,
    img: Rectangle6,
    tag: 'Dental Health',
    author: 'Dr. Robert Singh',
    title: 'Diet Tips for Stronger Teeth',
    desc: 'Find out which foods strengthen enamel and which to avoid for oral health.',
  },  {
    id: 7,
    img: Rectangle7,
    tag: 'Emergency Care',
    author: 'Dr. Olivia Brown',
    title: 'Handling a Chipped Tooth',
    desc: 'Quick steps to manage a dental emergency before seeing your dentist.',
  }
];



export const Articles = [
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
        tags: ["Pediatric Dentistry", "Preventive Care", "Child Development"],
        title: "Modern Approaches in Pediatric Dentistry",
        desc: "Latest developments and best practices in children's dental care.",
        author: "Dr. Robert Wilson, DDS",
        date: "May 28, 2025",
        content: {
            summary: "Understanding and implementing modern pediatric dental care techniques is crucial for ensuring lifelong oral health in children.",
            mainContent: "This comprehensive guide explores innovative approaches to pediatric dentistry, focusing on prevention, early intervention, and creating positive dental experiences for young patients.",
            sections: [
                {
                    title: "Key Prevention Strategies",
                    bulletPoints: [
                        "Early dental visits by age one",
                        "Custom fluoride treatments",
                        "Dietary guidance for parents",
                        "Proper brushing techniques for different age groups",
                        "Regular monitoring of oral development"
                    ],
                    content: "Prevention remains the cornerstone of pediatric dental care. Our research shows that early intervention and regular preventive care can reduce childhood dental problems by up to 70%."
                },
                {
                    title: "Clinical Findings",
                    content: [
                        "Early intervention programs have shown a 60% reduction in childhood cavities",
                        "Child-friendly dental environments reduce anxiety in 85% of young patients"
                    ]
                }
            ],
            quote: {
                text: "Creating positive dental experiences in childhood sets the foundation for lifelong oral health habits.",
                author: "Dr. Robert Wilson",
                role: "Pediatric Dental Specialist"
            }
        }
    },
    {
        id: 3,
        img: Rectangle3,
        tags: ["Digital Dentistry", "3D Printing", "Innovation"],
        title: "The Future of Digital Dentistry",
        desc: "Exploring cutting-edge technologies shaping modern dental practices.",
        author: "Dr. Jennifer Lee, DMD",
        date: "May 25, 2025",
        content: {
            summary: "Digital dentistry is transforming traditional dental procedures with enhanced precision and patient comfort.",
            mainContent: "From 3D-printed dental prosthetics to virtual treatment planning, digital technologies are revolutionizing every aspect of dental care.",
            sections: [
                {
                    title: "Digital Innovations",
                    bulletPoints: [
                        "CAD/CAM technology for precise restorations",
                        "3D printing in dental prosthetics",
                        "Digital smile design",
                        "Intraoral scanning systems",
                        "Virtual treatment planning"
                    ],
                    content: "Digital technologies have significantly improved the accuracy of dental procedures while reducing treatment time and patient discomfort."
                },
                {
                    title: "Impact Analysis",
                    content: [
                        "Digital impressions show 50% higher accuracy compared to traditional methods",
                        "Treatment planning time reduced by 40% with digital workflows"
                    ]
                }
            ],
            quote: {
                text: "Digital dentistry isn't just about technology – it's about providing better, more predictable outcomes for our patients.",
                author: "Dr. Jennifer Lee",
                role: "Digital Dentistry Specialist"
            }
        }
    },
    {
        id: 4,
        img: Rectangle4,
        tags: ["Dental Nutrition", "Preventive Care", "Oral Health"],
        title: "Nutrition's Role in Dental Health",
        desc: "Understanding the connection between diet and oral health.",
        author: "Dr. Michael Chang, DDS, RD",
        date: "May 22, 2025",
        content: {
            summary: "Diet plays a crucial role in maintaining optimal oral health and preventing dental diseases.",
            mainContent: "This comprehensive guide explores the intimate connection between nutrition and dental health, providing evidence-based dietary recommendations for optimal oral health.",
            sections: [
                {
                    title: "Nutritional Guidelines",
                    bulletPoints: [
                        "Essential vitamins for oral health",
                        "Foods that strengthen enamel",
                        "Impact of dietary acids",
                        "Sugar alternatives",
                        "Hydration importance"
                    ],
                    content: "Proper nutrition is fundamental to oral health. The right diet can strengthen teeth, fight inflammation, and support healthy gum tissue."
                },
                {
                    title: "Research Evidence",
                    content: [
                        "Studies show a 40% reduction in cavities with proper nutritional guidance",
                        "Balanced nutrition can improve gum health by up to 50%"
                    ]
                }
            ],
            quote: {
                text: "What you eat affects your oral health just as much as how you clean your teeth.",
                author: "Dr. Michael Chang",
                role: "Dental Nutrition Specialist"
            }
        }
    },
    {
        id: 5,
        img: Rectangle5,
        tags: ["Emergency Care", "Dental Trauma", "First Aid"],
        title: "Emergency Dental Care Guide",
        desc: "Essential knowledge for handling dental emergencies.",
        author: "Dr. Amanda Parker, DDS",
        date: "May 20, 2025",
        content: {
            summary: "Quick and appropriate response to dental emergencies can make the difference between saving and losing a tooth.",
            mainContent: "This comprehensive guide provides essential information about handling common dental emergencies and when to seek professional help.",
            sections: [
                {
                    title: "Emergency Protocols",
                    bulletPoints: [
                        "Knocked-out tooth preservation",
                        "Managing severe tooth pain",
                        "Handling broken restorations",
                        "Soft tissue injuries",
                        "When to seek immediate care"
                    ],
                    content: "Understanding proper emergency procedures can significantly improve the outcome of dental trauma cases."
                },
                {
                    title: "Statistical Data",
                    content: [
                        "Proper emergency response can increase tooth survival rate by 80%",
                        "Most dental emergencies occur during weekends and holidays"
                    ]
                }
            ],
            quote: {
                text: "Time is crucial in dental emergencies. Knowing what to do can mean the difference between saving and losing a tooth.",
                author: "Dr. Amanda Parker",
                role: "Emergency Dental Specialist"
            }
        }
    }
];
export default Card;
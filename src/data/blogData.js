import blog1 from '../img/ban-chai-mo-ta-1.webp';
import blog2 from '../img/ban-chai-mo-ta2.webp';
import blog3 from '../img/ban-chai-mo-ta3.webp';
import blog4 from '../img/ban-chai-mo-ta4.webp';

export const blogPosts = [
    {
        id: 1,
        title: "Causes and Treatment of Gingivitis",
        image: blog1,
        date: "May 22, 2019",
        author: {
            name: "Dr. Lisa Jones",
            role: "DDS, Periodontal Specialist",
            bio: "Dr. Jones is a leading expert in periodontal health with over a decade of experience in treating gum diseases. She is dedicated to helping patients achieve optimal gum health through education and advanced treatment techniques."
        },
        comments: 413,
        excerpt: "The ground-breaking research took 11 years to complete and is the longest study announcement comes at a time where half of British adults have tooth decay while one in four children will start school with decay in their baby teeth.",
        content: {
            summary: "Gingivitis is a common form of gum disease that causes inflammation of the gums. While it's a mild form of periodontal disease, if left untreated, it can lead to more serious conditions that may result in tooth loss.",
            mainContent: "Understanding gingivitis is crucial for maintaining good oral health. This condition occurs when plaque builds up along and under the gum line, causing inflammation. While it's relatively mild in its early stages, ignoring the symptoms can lead to more serious periodontal issues.",
            sections: [
                {
                    title: "Common Signs and Symptoms",
                    bulletPoints: [
                        "Red, swollen, or puffy gums",
                        "Bleeding when brushing or flossing",
                        "Bad breath that won't go away",
                        "Receding gums",
                        "Tender or sensitive gums"
                    ],
                    content: "These symptoms might seem minor at first, but they're important warning signs that shouldn't be ignored. Early detection and treatment can prevent the progression to more serious forms of gum disease."
                },
                {
                    title: "Treatment and Prevention",
                    content: [
                        "The good news is that gingivitis is both preventable and reversible. Professional cleaning by a dentist or dental hygienist is essential to remove tartar that has built up. This, combined with good oral hygiene practices at home, can usually resolve the condition.",
                        "Prevention is key - brush twice daily, floss regularly, and maintain regular dental check-ups. Using an antiseptic mouthwash can also help reduce plaque buildup between brushing."
                    ]
                }
            ],
            quote: {
                text: "Prevention is the best medicine when it comes to gum disease. A consistent oral hygiene routine can save you from extensive treatment later.",
                author: "Dr. Lisa Jones",
                role: "DDS, Periodontal Specialist"
            }
        },
        tags: ["Periodontics", "Oral Health", "Prevention"]
    },    {
        id: 2,
        title: "Understanding Root Canal Treatment",
        image: blog2,
        date: "May 15, 2019",
        author: {
            name: "Dr. Michael Smith",
            role: "DDS, Endodontics Specialist",
            bio: "Dr. Smith specializes in endodontic procedures and has performed thousands of successful root canal treatments. His gentle approach and use of modern techniques have helped many patients overcome their fears about root canal procedures."
        },
        comments: 287,
        excerpt: "Root canal treatment is a dental procedure that can save a severely damaged or infected tooth. This article explores the process, benefits, and what to expect during recovery.",
        content: {
            summary: "Root canal treatment is often feared, but it's a crucial procedure that can save your natural tooth and relieve pain caused by severe decay or infection. Modern techniques have made the procedure much more comfortable than its reputation suggests.",
            mainContent: "When the soft tissue inside your tooth (the pulp) becomes infected or inflamed, a root canal procedure becomes necessary. This can happen due to deep decay, repeated dental procedures, or injury to the tooth. The procedure involves removing the damaged pulp, cleaning the inside of the tooth, and sealing it to prevent future infections.",
            sections: [
                {
                    title: "The Root Canal Process",
                    bulletPoints: [
                        "Digital X-rays and examination",
                        "Local anesthesia administration",
                        "Removal of infected pulp",
                        "Thorough cleaning and shaping of canals",
                        "Filling and sealing the tooth",
                        "Crown placement for protection"
                    ],
                    content: "Modern root canal treatments are performed with precision instruments and advanced imaging technology, making the procedure more efficient and comfortable than ever before."
                },
                {
                    title: "Recovery and Aftercare",
                    content: [
                        "Most patients return to their normal activities the day after the procedure. You may experience mild discomfort for a few days, which can be managed with over-the-counter pain medication.",
                        "After your root canal, it's essential to practice good oral hygiene and schedule regular dental check-ups to ensure the treated tooth remains healthy."
                    ]
                }
            ],
            quote: {
                text: "A root canal doesn't cause pain - it relieves it. Modern techniques have transformed this procedure into a comfortable solution for saving natural teeth.",
                author: "Dr. Michael Smith",
                role: "DDS, Endodontics Specialist"
            }
        },
        tags: ["Endodontic", "Dental Care", "Treatment"]
    },    {
        id: 3,
        title: "The Importance of Regular Dental Check-ups",
        image: blog3,
        date: "May 10, 2019",
        author: {
            name: "Dr. Sarah Wilson",
            role: "DDS, Preventive Care Specialist",
            bio: "Dr. Wilson has dedicated her career to promoting preventive dental care and patient education. With 15 years of experience, she focuses on helping patients maintain optimal oral health through regular check-ups and early intervention."
        },
        comments: 156,
        excerpt: "Regular dental check-ups are crucial for maintaining good oral health. Learn why you should visit your dentist every six months and what happens during a routine examination.",
        content: {
            summary: "Regular dental check-ups are the cornerstone of good oral health. These routine visits allow for early detection of potential problems and help maintain your beautiful smile through professional cleaning and expert guidance.",
            mainContent: "During a dental check-up, your dentist examines your entire oral cavity, not just your teeth. This comprehensive examination includes checking for signs of oral cancer, gum disease, cavities, and other potential issues that might affect your oral and overall health.",
            sections: [
                {
                    title: "What Happens During a Check-up",
                    bulletPoints: [
                        "Professional cleaning and plaque removal",
                        "Detailed examination of teeth and gums",
                        "Oral cancer screening",
                        "X-rays (when necessary)",
                        "Discussion of oral hygiene habits",
                        "Personalized treatment recommendations"
                    ],
                    content: "Each component of a dental check-up serves a specific purpose in maintaining your oral health. Professional cleaning removes buildup that regular brushing can't, while thorough examination catches issues before they become serious problems."
                },
                {
                    title: "Benefits of Regular Check-ups",
                    content: [
                        "Regular dental visits do more than just keep your smile attractive – they help maintain your overall health. Detecting problems early can save you time, money, and unnecessary discomfort.",
                        "Many dental problems don't become visible or cause pain until they are in advanced stages. Regular check-ups allow your dentist to spot potential issues and address them before they become major problems."
                    ]
                }
            ],
            quote: {
                text: "An ounce of prevention is worth a pound of cure - this is especially true in dental care. Regular check-ups are your best defense against serious oral health issues.",
                author: "Dr. Sarah Wilson",
                role: "DDS, Preventive Care Specialist"
            }
        },
        tags: ["Preventive Care", "Dental Health", "Regular Check-ups"]
    },    {
        id: 4,
        title: "Modern Dental Technologies and Treatments",
        image: blog4,
        date: "May 5, 2019",
        author: {
            name: "Dr. James Brown",
            role: "DDS, Advanced Technology Specialist",
            bio: "Dr. Brown is at the forefront of implementing cutting-edge dental technologies. His expertise in digital dentistry and advanced treatment methods has revolutionized patient care and treatment outcomes."
        },
        comments: 324,
        excerpt: "Discover the latest advancements in dental technology, from 3D imaging to laser treatments, and how they're making dental procedures more comfortable and effective than ever.",
        content: {
            summary: "Modern dental technology has transformed the way we diagnose, treat, and manage oral health conditions. These innovations not only improve accuracy and efficiency but also enhance patient comfort and treatment outcomes.",
            mainContent: "The field of dentistry continues to evolve with breakthrough technologies that make treatments faster, more precise, and less invasive. From advanced imaging systems to computer-aided procedures, these innovations are revolutionizing dental care.",
            sections: [
                {
                    title: "Key Technological Advances",
                    bulletPoints: [
                        "3D CBCT Imaging for precise diagnostics",
                        "Digital impressions and CAD/CAM restorations",
                        "Laser dentistry for soft tissue procedures",
                        "AI-powered diagnostic tools",
                        "Robot-assisted dental surgery"
                    ],
                    content: "These technologies enable dentists to provide more accurate diagnoses, create better treatment plans, and deliver superior results while minimizing patient discomfort and recovery time."
                },
                {
                    title: "Benefits for Patients",
                    content: [
                        "Modern dental technologies have significantly reduced treatment times and improved patient comfort. Digital workflows mean fewer appointments and more precise results.",
                        "Advanced imaging technology allows patients to better understand their oral health conditions and treatment options through detailed visual representations."
                    ]
                }
            ],
            quote: {
                text: "Technology in dentistry isn't just about having the latest gadgets – it's about providing better, more predictable outcomes for our patients.",
                author: "Dr. James Brown",
                role: "DDS, Advanced Technology Specialist"
            }
        },
        tags: ["Dental Technology", "Innovation", "Patient Care"]
    },    {
        id: 5,
        title: "Dental Hygiene Tips for Kids",
        image: blog1,
        date: "May 1, 2019",
        author: {
            name: "Dr. Emily Carter",
            role: "DDS, Pediatric Dentistry Specialist",
            bio: "Dr. Carter specializes in pediatric dentistry with a focus on making dental care fun and accessible for children. Her innovative approaches have helped countless families establish good oral health habits early in life."
        },
        comments: 245,
        excerpt: "Teaching children good dental habits early is crucial for lifelong oral health. Learn effective strategies to make dental care fun and engaging for kids.",
        content: {
            summary: "Establishing good dental hygiene habits in childhood is essential for lifelong oral health. The key is making dental care fun, engaging, and part of their daily routine.",
            mainContent: "Children's dental care requires a special approach that combines education with enjoyment. By making oral hygiene fun and rewarding, we can help children develop positive attitudes toward dental care that will last a lifetime.",
            sections: [
                {
                    title: "Making Dental Care Fun",
                    bulletPoints: [
                        "Use timer apps or songs for brushing",
                        "Let kids choose their toothbrush and toothpaste",
                        "Create reward charts for consistent brushing",
                        "Use educational apps and games",
                        "Make up stories about fighting cavity monsters"
                    ],
                    content: "When dental care becomes a fun activity rather than a chore, children are more likely to develop consistent habits and maintain good oral health."
                },
                {
                    title: "Essential Habits to Develop",
                    content: [
                        "Teaching proper brushing technique is crucial, but it needs to be done in an age-appropriate way. Use visual aids and demonstrations to help children understand.",
                        "Establish a regular routine morning and night, and make it a positive family activity. Children often learn best by example."
                    ]
                }
            ],
            quote: {
                text: "The habits we help children develop today will shape their oral health for years to come. Make it fun, make it consistent, and make it matter.",
                author: "Dr. Emily Carter",
                role: "DDS, Pediatric Dentistry Specialist"
            }
        },
        tags: ["Pediatric Dentistry", "Oral Hygiene", "Children's Health"]
    },
    {
        id: 6,
        title: "Understanding Dental Implants",
        image: blog2,
        date: "April 28, 2019",
        author: "Dr. David Chen",
        comments: 198,
        excerpt: "Dental implants are a permanent solution for missing teeth. Learn about the procedure, recovery process, and benefits of dental implants."
    },
    {
        id: 7,
        title: "Preventing Tooth Decay",
        image: blog3,
        date: "April 25, 2019",
        author: "Dr. Rachel Thompson",
        comments: 167,
        excerpt: "Simple yet effective strategies to prevent tooth decay and maintain excellent oral health. Discover diet tips and proper brushing techniques."
    },
    {
        id: 8,
        title: "Teeth Whitening: Facts and Myths",
        image: blog4,
        date: "April 22, 2019",
        author: "Dr. Mark Davis",
        comments: 289,
        excerpt: "Separate fact from fiction about teeth whitening procedures. Learn about safe and effective methods to achieve a brighter smile."
    },
    {
        id: 9,
        title: "Managing Dental Anxiety",
        image: blog1,
        date: "April 19, 2019",
        author: "Dr. Sofia Rodriguez",
        comments: 234,
        excerpt: "Tips and techniques to overcome dental anxiety and make your dental visits more comfortable and stress-free."
    },
    {
        id: 10,
        title: "The Link Between Oral Health and Overall Health",
        image: blog2,
        date: "April 16, 2019",
        author: "Dr. John Miller",
        comments: 312,
        excerpt: "Understanding the crucial connection between your oral health and general well-being. Learn how dental health impacts various aspects of your body."
    }
];

export const categories = [
    { name: "Endodontic", count: 12 },
    { name: "Periodontics", count: 16 },
    { name: "Surgery", count: 13 },
    { name: "Prosthodontics", count: 10 }
];

export const relatedPosts = [
    // Reference to the first blog post about Gingivitis
    {
        id: 1,
        title: "Causes and Treatment of Gingivitis",
        image: blog1,
        date: "May 22, 2019",
        excerpt: "Learn about the causes, symptoms, and treatments for gingivitis, a common form of gum disease."
    },
    // Reference to the second blog post about Root Canal
    {
        id: 2,
        title: "Understanding Root Canal Treatment",
        image: blog2,
        date: "May 15, 2019",
        excerpt: "Everything you need to know about root canal procedures and modern treatment methods."
    },
    // Reference to the third blog post about Dental Check-ups
    {
        id: 3,
        title: "The Importance of Regular Dental Check-ups",
        image: blog3,
        date: "May 10, 2019",
        excerpt: "Why regular dental check-ups are crucial for maintaining good oral health."
    }
];

export const tags = [
    "Periodontics",
    "Endodontic",
    "Orthodontic",
    "Oral Health",
    "Prosthodontics",
    "Dentistry"
];

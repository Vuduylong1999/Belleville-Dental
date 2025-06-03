// Sample data for BlogSingle component
export const blogPost = {
  id: 1,
  title: "The Importance of Regular Dental Checkups for Optimal Oral Health",
  image: "/placeholder.svg?height=400&width=800",
  date: "2024-03-15",
  author: {
    name: "Dr. Sarah Wilson",
    role: "DDS, Oral Health Specialist",
    avatar: "/placeholder.svg?height=80&width=80",
    bio: "Dr. Wilson has over 15 years of experience in general dentistry and preventive care. She is passionate about educating patients on the importance of oral health and providing compassionate, high-quality dental care."
  },
  tags: ["Dental Care", "Health"],
  content: {
    summary: "Regular dental checkups are essential for maintaining optimal oral health and preventing serious dental problems. Many people underestimate the importance of routine dental visits, but they play a crucial role in early detection and prevention of dental issues.",
    mainContent: "During a routine dental checkup, your dentist will thoroughly examine your teeth, gums, and mouth for any signs of decay, gum disease, or other oral health problems. This comprehensive examination allows for early detection of issues that might not be visible or cause pain in their early stages.",
    sections: [
      {
        title: "Benefits of Regular Dental Visits",
        bulletPoints: [
          "Early detection of cavities and tooth decay",
          "Prevention and treatment of gum disease",
          "Professional teeth cleaning to remove plaque and tartar",
          "Oral cancer screening",
          "Assessment of existing dental work"
        ],
        content: "Professional teeth cleaning is another crucial component of regular dental visits. Even with excellent oral hygiene habits at home, plaque and tartar can build up in hard-to-reach areas. Professional cleaning removes these deposits and helps prevent cavities and gum disease."
      },
      {
        title: "How Often Should You Visit the Dentist?",
        content: [
          "The American Dental Association recommends visiting your dentist at least twice a year for routine checkups and cleanings. However, some individuals may need more frequent visits based on their oral health status, risk factors, and specific dental needs.",
          "Factors that may require more frequent dental visits include a history of gum disease, frequent cavities, smoking, diabetes, or a weakened immune system. Your dentist will recommend the appropriate frequency of visits based on your individual needs."
        ]
      }
    ],
    quote: {
      text: "Prevention is always better than cure. Regular dental checkups can save you from painful and expensive dental procedures in the future.",
      author: "Dr. Sarah Wilson",
      role: "DDS, Oral Health Specialist"
    }
  }
};

export const relatedPosts = [
  {
    id: 1,
    title: "5 Essential Tips for Better Oral Hygiene",
    excerpt: "Learn the fundamental practices that can significantly improve your oral health...",
    image: "/placeholder.svg?height=200&width=300",
    date: "2024-03-10"
  },
  {
    id: 2,
    title: "Professional vs. At-Home Teeth Whitening",
    excerpt: "Discover the differences between professional and at-home whitening options...",
    image: "/placeholder.svg?height=200&width=300",
    date: "2024-03-08"
  }
];

export const recentPosts = [
  {
    id: 1,
    title: "Understanding Dental Implants",
    date: "2024-03-12",
    image: "/placeholder.svg?height=60&width=60"
  },
  {
    id: 2,
    title: "Preventing Gum Disease",
    date: "2024-03-09",
    image: "/placeholder.svg?height=60&width=60"
  },
  {
    id: 3,
    title: "Children's Dental Care",
    date: "2024-03-05",
    image: "/placeholder.svg?height=60&width=60"
  }
];

export const categories = [
  {
    name: "General Dentistry",
    count: 12
  },
  {
    name: "Preventive Care",
    count: 8
  },
  {
    name: "Cosmetic Dentistry",
    count: 6
  },
  {
    name: "Oral Surgery",
    count: 4
  },
  {
    name: "Pediatric Dentistry",
    count: 5
  }
];

export const testimonials = [
  {
    text: "The team at Dentia provided exceptional care. My dental implant procedure was painless and the results exceeded my expectations.",
    author: "Sarah Johnson",
    role: "Patient"
  },
  {
    text: "Professional, caring, and highly skilled. I've been coming here for years and wouldn't trust my dental care to anyone else.",
    author: "Michael Chen",
    role: "Patient"
  },
  {
    text: "Outstanding service and state-of-the-art facilities. The staff made me feel comfortable throughout my treatment.",
    author: "Emily Davis",
    role: "Patient"
  }
];

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
        author: "Lisa Jones",
        comments: 413,
        excerpt: "The ground-breaking research took 11 years to complete and is the longest study announcement comes at a time where half of British adults have tooth decay while one in four children will start school with decay in their baby teeth."
    },
    {
        id: 2,
        title: "Understanding Root Canal Treatment",
        image: blog2,
        date: "May 15, 2019",
        author: "Dr. Michael Smith",
        comments: 287,
        excerpt: "Root canal treatment is a dental procedure that can save a severely damaged or infected tooth. This article explores the process, benefits, and what to expect during recovery."
    },
    {
        id: 3,
        title: "The Importance of Regular Dental Check-ups",
        image: blog3,
        date: "May 10, 2019",
        author: "Dr. Sarah Wilson",
        comments: 156,
        excerpt: "Regular dental check-ups are crucial for maintaining good oral health. Learn why you should visit your dentist every six months and what happens during a routine examination."
    },
    {
        id: 4,
        title: "Modern Dental Technologies and Treatments",
        image: blog4,
        date: "May 5, 2019",
        author: "Dr. James Brown",
        comments: 324,
        excerpt: "Discover the latest advancements in dental technology, from 3D imaging to laser treatments, and how they're making dental procedures more comfortable and effective than ever."
    }
];

export const categories = [
    { name: "Endodontic", count: 12 },
    { name: "Periodontics", count: 16 },
    { name: "Surgery", count: 13 },
    { name: "Prosthodontics", count: 10 }
];

export const relatedPosts = [
    {
        id: 1,
        title: "Oral Health Foundation",
        image: blog1,
        date: "January 29, 2019"
    },
    {
        id: 2,
        title: "Treatment of Gingivitis",
        image: blog2,
        date: "January 22, 2019"
    },
    {
        id: 3,
        title: "Urge Brits to Urgently",
        image: blog3,
        date: "January 15, 2019"
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

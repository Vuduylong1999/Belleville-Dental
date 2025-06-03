import React from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import CardSlider from '../components/CardSlider';
import ArticlesList from '../components/ArticlesList';
import Card, { Articles } from '../data/education';
import WelcomeVideoSection from '../components/WelcomeVideo';
import './page.css';

const BlogEducation = () => {    const [searchTerm, setSearchTerm] = React.useState('');
    const [filteredCards, setFilteredCards] = React.useState(Card);
    const [filteredArticles, setFilteredArticles] = React.useState(Articles);

    // Filter function to search through content
    const filterContent = (term) => {
        const lowercaseTerm = term.toLowerCase();
        
        // Filter Card array
        const matchingCards = Card.filter(card => 
            card.title?.toLowerCase().includes(lowercaseTerm) ||
            card.desc?.toLowerCase().includes(lowercaseTerm) ||
            card.author?.toLowerCase().includes(lowercaseTerm) ||
            card.tag?.toLowerCase().includes(lowercaseTerm)
        );
        
        // Filter Articles array
        const matchingArticles = Articles.filter(article =>
            article.title?.toLowerCase().includes(lowercaseTerm) ||
            article.desc?.toLowerCase().includes(lowercaseTerm) ||
            article.author?.toLowerCase().includes(lowercaseTerm) ||
            article.tags?.some(tag => tag.toLowerCase().includes(lowercaseTerm))
        );

        setFilteredCards(matchingCards);
        setFilteredArticles(matchingArticles);
    };

    // Handle search input changes
    const handleSearchChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        filterContent(term);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        filterContent(searchTerm);
    };
    return (
        <div className="container-fluid px-4" style={{ backgroundColor: '#ffffff' }}>
            {/* Header Section */}
            <header className="text-center py-5" style={{ backgroundColor: '#f0faff' }}>
                <h1 className="fw-bold articles" style={{ borderBottom: '3px solid rgb(11, 11, 11)', display: 'inline-block', paddingBottom: '8px' }}>Professional</h1>
                <p className="text-muted mx-auto mo-ta" style={{ maxWidth: '500px' }}>
                    We hope all the best for your education and career. Here you can find articles, videos, and resources to help you stay informed about the latest advancements in dentistry.
                </p>
                <div className="d-flex justify-content-center mt-4">
                    <Form onSubmit={handleSubmit}>
                        <InputGroup style={{ width: '455px' }}>                            
                        <Form.Control
                                type="text"
                                placeholder="Search articles, topics, or authors..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                                className="search-input"
                            />
                        </InputGroup>
                    </Form>
                </div>
            </header>            {/* CardSlider Section */}
            <div className="blog-cards-container">
                <CardSlider cards={filteredCards} />
            </div>

            {/* ArticlesList Section with hover effects */}
            <div className="articles-container bg-free">
                <ArticlesList articles={filteredArticles} />
            </div>
            
            {/* No results message */}
            {filteredCards.length === 0 && filteredArticles.length === 0 && searchTerm && (
                <div className="text-center py-5">
                    <h3>No results found</h3>
                    <p className="text-muted">Try different keywords or check your spelling</p>
                </div>
            )}
            
            {/* Welcome Video Section */}
            <div className="video-section">
                <WelcomeVideoSection />
            </div>
        </div>
    );
};

export default BlogEducation;

import React from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import CardSlider from '../components/CardSlider';
import ArticlesList from '../components/ArticlesList';
import Card, { Articles } from '../data/education';
import WelcomeVideoSection from '../components/WelcomeVideo';

const BlogEducation = () => {
    const [searchTerm, setSearchTerm] = React.useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle search logic here
        console.log('Search Term:', searchTerm);
    };
    return (
        <div className="container-fluid px-4" style={{ backgroundColor: '#ffffff' }}>
            {/* Header Section */}
            <header className="text-center py-5" style={{ backgroundColor: '#f0faff' }}>
                <h1 className="fw-bold" style={{ borderBottom: '3px solid rgb(11, 11, 11)', display: 'inline-block', paddingBottom: '8px' }}>Blogs</h1>
                <p className="text-muted mx-auto" style={{ maxWidth: '500px' }}>
                    We use only the best quality materials on the market in order to provide the best products to our patients.
                </p>
                <div className="d-flex justify-content-center mt-4">
                    <Form onSubmit={handleSubmit}>
                        <InputGroup style={{ width: '455px' }}>
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </InputGroup>
                    </Form>
                </div>
            </header>

            {/* CardSlider Section */}
            <CardSlider cards={Card} />

            {/* ArticlesList Section */}
            <ArticlesList articles={Articles} />
            {/* Welcome Video Section */}
            <WelcomeVideoSection />
        </div>
    );
};

export default BlogEducation;

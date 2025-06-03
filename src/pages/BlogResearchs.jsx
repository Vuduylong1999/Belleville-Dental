import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import CardSlider from "../components/CardSlider";
import ArticlesList from "../components/ArticlesList";
import ResearchCards, { ResearchArticles } from "../data/researchs";
import WelcomeVideoSection from "../components/WelcomeVideo";
import "./page.css";

const BlogResearchs = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredCards, setFilteredCards] = React.useState(ResearchCards);
  const [filteredArticles, setFilteredArticles] = React.useState(ResearchArticles);

  // Filter function to search through content
  const filterContent = (term) => {
    const lowercaseTerm = term.toLowerCase();

    // Filter ResearchCards array
    const matchingCards = ResearchCards.filter(
      (card) =>
        card.title?.toLowerCase().includes(lowercaseTerm) ||
        card.desc?.toLowerCase().includes(lowercaseTerm) ||
        card.author?.toLowerCase().includes(lowercaseTerm) ||
        card.tag?.toLowerCase().includes(lowercaseTerm)
    );

    // Filter ResearchArticles array
    const matchingArticles = ResearchArticles.filter((article) =>
      article.title?.toLowerCase().includes(lowercaseTerm) ||
      article.desc?.toLowerCase().includes(lowercaseTerm) ||
      article.author?.toLowerCase().includes(lowercaseTerm) ||
      article.tags?.some((tag) => tag.toLowerCase().includes(lowercaseTerm))
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
    <div
      className="container-fluid px-4"
      style={{ backgroundColor: "#ffffff" }}
    >
      {/* Header Section */}
      <header
        className="text-center py-5"
        style={{ backgroundColor: "#f0faff" }}
      >
        <h1
          className="fw-bold articles"
          style={{
            borderBottom: "3px solid rgb(11, 11, 11)",
            display: "inline-block",
            paddingBottom: "8px",
          }}
        >
          Dental Research
        </h1>
        <p
          className="text-muted mx-auto mo-ta"
          style={{ maxWidth: "500px" }}
        >
          Discover groundbreaking dental research, clinical studies, and scientific
          innovations advancing oral healthcare.
        </p>
        <div className="d-flex justify-content-center mt-4">
          <Form onSubmit={handleSubmit}>
            <InputGroup style={{ width: "455px" }}>
              <Form.Control
                type="text"
                placeholder="Search research articles, topics, or authors..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
              />
            </InputGroup>
          </Form>
        </div>
      </header>

      {/* CardSlider Section */}
      <div className="blog-cards-container">
        <CardSlider cards={filteredCards} />
      </div>

      {/* ArticlesList Section with hover effects */}
      <div className="articles-container bg-free">
        <ArticlesList articles={filteredArticles} />
      </div>

      {/* No results message */}
      {filteredCards.length === 0 &&
        filteredArticles.length === 0 &&
        searchTerm && (
          <div className="text-center py-5">
            <h3>No results found</h3>
            <p className="text-muted">
              Try different keywords or check your spelling
            </p>
          </div>
        )}
    </div>
  );
};

export default BlogResearchs;
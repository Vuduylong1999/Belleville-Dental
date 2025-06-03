import React, { useState } from 'react';
import PageBanner from '../components/edu/PageBanner';
import PostPreview from '../components/edu/PostPreview';
import BlogSidebar from '../components/edu/BlogSidebar';
import bannerBg from '../img/anh-ban-chai-ben-trong1.png';
import { blogPosts, categories, relatedPosts, tags } from '../data/blogData';

export default function PatientEdu() {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 4;

    // Filter blog posts based on search query
    const filteredPosts = blogPosts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    // Calculate total pages
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <PageBanner
                bgImage={bannerBg}
                subtitle="Education for Patients"
                title="Patient Education"
            />
            <section>
                <div className="container py-5">
                    <div className="row">                        
                        {/* Main Content Column */}
                        <div className="col-lg-8">
                            {currentPosts.map(post => (
                                <PostPreview key={post.id} post={post} />
                            ))}
                            <div className="site-pagination span-blog-sidebar">
                                <nav aria-label="Page navigation">
                                    <ul className="pagination justify-content-center">
                                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                            <button 
                                                className="page-link" 
                                                onClick={() => paginate(currentPage - 1)}
                                                disabled={currentPage === 1}
                                            >
                                                <i className="fas fa-chevron-left"></i>
                                            </button>
                                        </li>
                                        {[...Array(totalPages)].map((_, index) => (
                                            <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                                <button 
                                                    className="page-link" 
                                                    onClick={() => paginate(index + 1)}
                                                >
                                                    {index + 1}
                                                </button>
                                            </li>
                                        ))}
                                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                            <button 
                                                className="page-link" 
                                                onClick={() => paginate(currentPage + 1)}
                                                disabled={currentPage === totalPages}
                                            >
                                                <i className="fas fa-chevron-right"></i>
                                            </button>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="col-lg-4">
                            <BlogSidebar 
                                categories={categories}
                                relatedPosts={relatedPosts}
                                tags={tags}
                                searchQuery={searchQuery}
                                onSearchChange={setSearchQuery}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


import React from 'react';
import PageBanner from '../components/edu/PageBanner';
import PostPreview from '../components/edu/PostPreview';
import BlogSidebar from '../components/edu/BlogSidebar';
import bannerBg from '../img/anh-ban-chai-ben-trong1.png';
import { blogPosts, categories, relatedPosts, tags } from '../data/blogData';

export default function PatientEdu() {
    return (
        <>
            <PageBanner
                bgImage={bannerBg}
                subtitle="Education for Patients"
                title="Patient Education"
            />
            <section>
                <div className="container py-5">
                    <div className="row">                        {/* Main Content Column */}
                        <div className="col-lg-8">
                            {blogPosts.map(post => (
                                <PostPreview key={post.id} post={post} />
                            ))}
                            <div className="site-pagination span-blog-sidebar">
                                <nav aria-label="Page navigation">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Previous">
                                                <i className="fas fa-chevron-left"></i>
                                            </a>
                                        </li>
                                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Next">
                                                <i className="fas fa-chevron-right"></i>
                                            </a>
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
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


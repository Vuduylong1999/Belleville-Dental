import React from 'react';
import '../styles/BlogSidebar.css';

export default function BlogSidebar({ categories, relatedPosts, tags }) {
    return (
        <aside className="blog-sidebar">
            <div className="form-group blog-search mb-4 position-relative">
                <i className="fas fa-search position-absolute top-50 translate-middle-y ms-3"></i>
                <input type="text" className="form-control ps-5" placeholder="Search" />
            </div>

            <div className="aside-list-group mb-4">
                <h4 className="mb-3">Categories</h4>
                <ul className="list-group list-group-flush">
                    {categories.map((category) => (
                        <li key={category.name} className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="text-decoration-none">{category.name}</a>
                            <span className="badge bg-primary rounded-pill">{category.count}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="aside-related-posts mb-4">
                <h4 className="mb-3">Related Posts</h4>
                <div className="list-group">
                    {relatedPosts.map((post) => (
                        <a key={post.id} href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3">
                            <img src={post.image} className="rounded flex-shrink-0" alt={post.title} width="64" height="64" />
                            <div>
                                <h6 className="mb-0">{post.title}</h6>
                                <p className="mb-0 opacity-75">{post.date}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            <div className="aside-tags">
                <h4 className="mb-3">Tags</h4>
                <div className="d-flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <a key={tag} className="btn btn-outline-primary btn-sm" href="#">{tag}</a>
                    ))}
                </div>
            </div>
        </aside>
    );
}

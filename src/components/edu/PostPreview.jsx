import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function PostPreview({ post }) {
    const location = useLocation();
    const category = location.pathname.split('/')[2]; // Gets 'patient', 'professional', or 'researchs'
    
    return (
        <div className="post-preview mb-5">
            <figure className="post-preview-img mb-4">
                <Link to={`/education/${category}/${post.id}`}>
                    <img src={post.image} alt={post.title} className="img-fluid rounded" />
                </Link>
            </figure>            <div className="pp-caption">
                <h3 className="mb-3">
                    <Link to={`/education/${category}/${post.id}`} className="text-decoration-none text-dark">
                        {post.title}
                    </Link>
                </h3>
                <div className="post-details d-flex gap-4 text-muted mb-3">                    <div className="pd-date">
                        <p className="mb-0">{post.date}</p>
                    </div>
                    <div className="pd-user">
                        <p className="mb-0">{post.author.name}</p>
                    </div>
                    <div className="pd-comments">
                        <p className="mb-0">{post.comments} Comments</p>
                    </div>
                </div>
                <p>{post.excerpt}</p>
            </div>            <div className="read-more mt-3">
                <Link to={`/education/${category}/${post.id}`} className="btn btn-primary">Read More</Link>
            </div>
        </div>
    );
}

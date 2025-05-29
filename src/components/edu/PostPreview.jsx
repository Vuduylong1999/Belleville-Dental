import React from 'react';

export default function PostPreview({ post }) {
    return (
        <div className="post-preview mb-5">
            <figure className="post-preview-img mb-4">
                <a href="#">
                    <img src={post.image} alt={post.title} className="img-fluid rounded" />
                </a>
            </figure>
            <div className="pp-caption">
                <h3 className="mb-3">{post.title}</h3>
                <div className="post-details d-flex gap-4 text-muted mb-3">
                    <div className="pd-date">
                        <p className="mb-0">{post.date}</p>
                    </div>
                    <div className="pd-user">
                        <p className="mb-0">{post.author}</p>
                    </div>
                    <div className="pd-comments">
                        <p className="mb-0">{post.comments} Comments</p>
                    </div>
                </div>
                <p>{post.excerpt}</p>
            </div>
            <div className="read-more mt-3">
                <a className="btn btn-primary" href="#" role="button">Read More</a>
            </div>
        </div>
    );
}

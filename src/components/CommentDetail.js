import React from 'react';
import UserHeader from './UserHeader';

export const CommentDetail = props => {
    return (
        <div className="item">
            <a href="/" className="avatar">
                {props.image
                    ? <img alt="avatar" src={props.image} /> 
                    : <i className="large middle aligned icon user"/>
                }
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="description">
                    <h2>{props.title}</h2>
                    <p>{props.body}</p>
                </div>
                <UserHeader userId={props.userId}/>
            </div>
        </div>
    );
};
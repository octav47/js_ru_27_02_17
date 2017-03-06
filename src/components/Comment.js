import React, {Component} from 'react';

/**
 * @return {null}
 */
const Comment = ({comment}) => {
    if (!comment) {
        return null;
    } else {
        const user = comment.user;
        const text = comment.text;

        return (
            <div>
                <h4>{user}</h4>
                <p>{text}</p>
            </div>
        )
    }
};

export default Comment;
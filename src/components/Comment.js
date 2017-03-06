import React, {Component} from 'react';

//Это можно сделать Functional Component, по возможности используй их
class Comment extends Component {

    constructor() {
        super();
    }

    render() {
        const {comment} = this.props;

        const user = comment.user;
        const text = comment.text;

        return (
            <div>
                <h4>{user}</h4>
                <p>{text}</p>
            </div>
        )
    }
}

export default Comment;

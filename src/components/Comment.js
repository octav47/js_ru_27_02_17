import React, {Component} from 'react';

class Comment extends Component {

    constructor() {
        super();
    }

    render() {
        const {comment} = this.props;

        const text = comment.text;

        return (
            <div>{text}</div>
        )
    }
}

export default Comment;
import React, {Component} from 'react';
import Comment from './Comment';

class CommentList extends Component {

    render() {
        const {comments} = this.props;

        // const commentComponents = comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>);

        return (
            <ul>
                <li>123</li>
            </ul>
        )
    }
}
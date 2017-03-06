import React, {Component} from 'react';
import Comment from './Comment';

class CommentList extends Component {

    constructor() {
        super();

        this.state = {
            isOpen: false
        };
    }

    render() {
        const {comments} = this.props;

        if (!comments) {
            return null;
        }

        const {isOpen} = this.state;

        const commentComponents = isOpen ?
            comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>) : null;

        return (
            <div>
                <button onClick={this.handleClick}>Show comments</button>
                <ul>
                    {commentComponents}
                </ul>
            </div>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default CommentList;
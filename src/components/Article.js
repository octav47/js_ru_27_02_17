import React, {Component} from 'react'
// import CommentList from './Comment'

class Article extends Component {

    constructor() {
        super();
        this.state = {
            isOpen: false
        }
    }

    render() {
        const {article} = this.props;
        const comments = article.comments || [];
        const {isOpen} = this.state;
        const body = isOpen ? <section>{article.text}</section> : null;

        console.log(comments);

        // const commentsSection = isOpen ? <CommentList /> : null;

        return (
            <div>
                <h3 onClick={this.handleClick}>{article.title}</h3>
                {body}
            </div>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article
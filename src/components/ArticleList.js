import React, {PropTypes, Component} from 'react';
import Article from './Article';
import Accordion from '../decorators/accordion';

class ArticleList extends Component {
    render() {
        const {articles, openArticleId, toggleOpenArticle} = this.props

        const articleComponents = articles.map(article => <li key={article.id}>
            <Article article={article}
                     isOpen={article.id === openArticleId}
                     toggleOpen={toggleOpenArticle(article.id)}
            />
        </li>)

        return (
            <ul>
                {articleComponents}
            </ul>
        )
    }
}

ArticleList.propTypes = {
    //вот сюда еще и из декоратора данные приходят
    articles: PropTypes.array.isRequired
};

export default Accordion(ArticleList);

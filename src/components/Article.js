import React from 'react';
import ArticleList from './ArticleList';
import ArticleForm from './ArticleForm';

class Article extends React.Component {
  render() {
    return (
      <div>
        <div>
          <ArticleForm />
        </div>
        <div>
          <ArticleList />
        </div>
      </div>
    );
  }
}

export default Article;
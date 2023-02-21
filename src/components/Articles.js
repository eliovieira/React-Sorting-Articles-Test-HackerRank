import React from "react";
import { useState } from "react";

function Articles({ articles }) {
  const [articlesList, setArticlesList] = useState(articles);

  return (
    <div className="card w-50 mx-auto">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {articlesList.map((article, index) => {
            return (
              <tr data-testid="article" key={index}>
                <td data-testid="article-title">{article.title}</td>
                <td data-testid="article-upvotes">{article.upvotes}</td>
                <td data-testid="article-date">{article.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Articles;

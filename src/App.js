import React from "react";
import "./App.css";
import "h8k-components";
import { useState } from "react";

import Articles from "./components/Articles";

const title = "Sorting Articles";

function App({ articles }) {
  const [articlesList, setArticlesList] = useState(articles);

  console.log(articlesList);

  function sortByUpvotes() {
    const sortedByUpvotes = articlesList.sort((a, b) => b.upvotes - a.upvotes);
    setArticlesList(sortedByUpvotes);
    console.log(articlesList);
  }

  function sortByMostRecent() {
    const sortedByMostRecent = articlesList.sort((a, b) => b.date - a.date);
    setArticlesList(sortedByMostRecent);
    console.log(articlesList);
  }

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <button
          data-testid="most-upvoted-link"
          className="small"
          onClick={() => sortByUpvotes()}
        >
          Most Upvoted
        </button>
        <button
          data-testid="most-recent-link"
          className="small"
          onClick={() => sortByMostRecent()}
        >
          Most Recent
        </button>
      </div>
      <Articles articles={articlesList} />
    </div>
  );
}

export default App;

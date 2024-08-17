import { useState, useEffect } from "react";
// import axios from "axios";
import ArticleList from "../ArticleList/ArticleList";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import SearchForm from "../SearchForm/SearchForm";
import { fetchArticlesWithTopic } from "../../articles-api";

import "./App.css";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // ????? коли ми самі вводимо слово для пошуку ?????
  // useEffect(() => {
  //   async function fetchArticles() {
  //     try {
  //       setLoading(true);
  //       const data = await fetchArticlesWithTopic("react");
  //       setArticles(data);
  //     } catch (error) {
  //       setError(true);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   fetchArticles();
  // }, []);

  // ????? коли користувач вводить слово для пошуку ?????
  const handleSearch = async topic => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Latest articles</h1>

      <SearchForm onSearch={handleSearch} />
      {/* {loading && <p style={{ fontSize: 20 }}>Loading data, please wait...</p>} */}
      {loading && <Loader />}
      {error && <Error />}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
}

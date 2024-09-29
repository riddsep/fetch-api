import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const request = await fetch(
        "https://api.spaceflightnewsapi.net/v4/articles/"
      );
      const response = await request.json();
      setNews(response.results);
      setLoading(false);
    }
    getData();
  }, []);
  return (
    <>
      <h1>Data fetch</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {news.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;

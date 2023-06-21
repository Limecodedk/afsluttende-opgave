import React, { useEffect, useState } from 'react';
import Error from '../components/Error';
import Loader from '../components/Loader';
import useRequestData from '../hooks/useRequestData';

const Nyheder = () => {
  // init request-hook
  const { data, isLoading, error, makeRequest } = useRequestData();
  const [search, setSearch] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (searchQuery !== '') {
      makeRequest(
        /*  `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=a70777e1773c4ceb9d9b3e0361a1aad2` */
        `https://newsapi.org/v2/everything?q=${searchQuery}&sortBy=publishedAtcountry=us&apiKey=${process.env.REACT_APP_Newsapikey}`

      );
    }
  }, [searchQuery]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchQuery(search);
  };

  return (
    <div className='news'>
      <h1>Nyheder</h1>
      {isLoading && <Loader />}
      {error && <Error />}
      <form onSubmit={handleSubmit} className='newsForm'>
        <input
          type="text"
          placeholder="Søg efter nyheder"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Søg...</button>
      </form>

      {data &&
        data.articles.map((n) => (
          <article key={n.id} className='newsArticle'>
            <h2>{n.title}</h2>
            <h3>af {n.author}</h3>
            <div className='newsContent'>
              {n.description} <a href={n.url} target="_blank">Læs mere</a>
            </div>
            {n.urlToImage && <img src={n.urlToImage} alt="Foto" />}
          </article>
        ))}
    </div>
  );
};

export default Nyheder;
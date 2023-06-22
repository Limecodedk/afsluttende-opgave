import React, { useEffect, useState } from 'react';
import Error from '../components/Error';
import Loader from '../components/Loader';
import useRequestData from '../hooks/useRequestData';

const Nyheder = () => {
  // init request-hook
  const { data, isLoading, error, makeRequest } = useRequestData();
  const [search, setSearch] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('')
  const [sortBy, setSortBy] = useState('')

  useEffect(() => {
    if (searchQuery !== '') {
      makeRequest(
        /*  `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=a70777e1773c4ceb9d9b3e0361a1aad2` */
        `https://newsapi.org/v2/everything?q=${searchQuery}&sortBy=${sortBy}country=${selectedCountry}&apiKey=${process.env.REACT_APP_Newsapikey}`

      );
    }
  }, [searchQuery, sortBy, selectedCountry]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchQuery(search);
  };

  const handleCountryChange = (event) => {
    event.preventDefault();
    setSelectedCountry(event.target.value);
  };

  const handlesortBy = (event) => {
    event.preventDefault();
    setSortBy(event.target.value);
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
        <select name="sortBy" id="sortBy" value={sortBy} onChange={handlesortBy}>
          <option value="">Sortere efter</option>
          <option value="publishedAt">Nyeste</option>
          <option value="popularity">Populære</option>
          <option value="relevancy">Mest relevante</option>
        </select>
        <select name="country" id="country" onChange={handleCountryChange}>
          <option value="">Vælg Land</option>
          <option value="ae">De Forenede Arabiske Emirater</option>
          <option value="ar">Argentina</option>
          <option value="at">Østrig</option>
          <option value="au">Australien</option>
          <option value="be">Belgien</option>
          <option value="bg">Bulgarien</option>
          <option value="br">Brasilien</option>
          <option value="ca">Canada</option>
          <option value="ch">Schweiz</option>
          <option value="cn">Kina</option>
          <option value="co">Colombia</option>
          <option value="cu">Cuba</option>
          <option value="cz">Tjekkiet</option>
          <option value="de">Tyskland</option>
          <option value="eg">Egypten</option>
          <option value="fr">Frankrig</option>
          <option value="gb">Storbritannien</option>
          <option value="gr">Grækenland</option>
          <option value="hk">Hongkong</option>
          <option value="hu">Ungarn</option>
          <option value="id">Indonesien</option>
          <option value="ie">Irland</option>
          <option value="il">Israel</option>
          <option value="in">Indien</option>
          <option value="it">Italien</option>
          <option value="jp">Japan</option>
          <option value="kr">Sydkorea</option>
          <option value="lt">Litauen</option>
          <option value="lv">Letland</option>
          <option value="ma">Marokko</option>
          <option value="mx">Mexico</option>
          <option value="my">Malaysia</option>
          <option value="ng">Nigeria</option>
          <option value="nl">Holland</option>
          <option value="no">Norge</option>
          <option value="nz">New Zealand</option>
          <option value="ph">Filippinerne</option>
          <option value="pl">Polen</option>
          <option value="pt">Portugal</option>
          <option value="ro">Rumænien</option>
          <option value="rs">Serbien</option>
          <option value="ru">Rusland</option>
          <option value="sa">Saudi-Arabien</option>
          <option value="se">Sverige</option>
          <option value="sg">Singapore</option>
          <option value="si">Slovenien</option>
          <option value="sk">Slovakiet</option>
          <option value="th">Thailand</option>
          <option value="tr">Tyrkiet</option>
          <option value="tw">Taiwan</option>
          <option value="ua">Ukraine</option>
          <option value="us">USA</option>
          <option value="ve">Venezuela</option>
          <option value="za">Sydafrika</option>
        </select>
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
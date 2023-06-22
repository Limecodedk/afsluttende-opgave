import React, { useEffect, useState } from 'react';
import Error from '../components/Error';
import Loader from '../components/Loader'
import useRequestData from '../hooks/useRequestData'
import { format, parse } from 'date-fns';

const Vejret = () => {
  const [zipcode, setZipcode] = useState('');
  const [search, setSearch] = useState('');

  const { data, isLoading, error, makeRequest } = useRequestData()
  const { data: dataDAWA, isLoading: isLodingDAWA, error: errorDAWA, makeRequest: makeRequestDAWA } = useRequestData()

  useEffect(() => {
    if (zipcode.length === 4 && !isNaN(zipcode)) {
      makeRequest(
        `https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},dk&appid=${process.env.REACT_APP_OPENWEATHERKEY}`
      )
    } else {
      makeRequestDAWA(
        "https://api.dataforsyningen.dk/postnumre/autocomplete?&q=" + zipcode
      )
    }
  }, [zipcode])

  const handleSubmit = (event) => {
    event.preventDefault();

    if (search.length === 4) {
      setZipcode(search);
    }
  };
  return (
    <div className='weathermain'>
      {isLoading && <Loader />}
      {error && <Error />}
      <h1>Vejret</h1>
      <form onSubmit={handleSubmit} className='weatherForm'>
        <input
          type="text"
          minLength="4"
          maxLength="4"
          name="zipcode"
          id="zipcode"
          autoComplete='off'
          placeholder='skriv postnummer'
          list='adresseforslag'
          onChange={(e) => setZipcode(e.target.value)}
        />
        <button type='submit'>Søg</button>
        <datalist id='adresseforslag'>
          {
            dataDAWA && dataDAWA.map(a =>
              <option value={a.postnummer.nr}>{a.tekst}</option>
            )
          }
        </datalist>
      </form>
      {data && (
        < div >
          {<h2 className='weatherCity'>{data.city.name}</h2>}
          <table className='weatherTable'>
            <thead>
              <tr>
                {data &&
                  data.list.slice(0, 10).map((item) => (
                    <th key={item.dt_txt}><img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="" /></th>
                  ))}
              </tr>
              <tr>
                {data &&
                  data.list.slice(0, 10).map((item) => {
                    const parsedDate = parse(item.dt_txt, 'yyyy-MM-dd HH:mm:ss', new Date());
                    const formattedDate = format(parsedDate, 'dd/MM/yyyy HH:mm');

                    return (
                      <th key={item.dt_txt}>{formattedDate}</th>
                    );
                  })}
              </tr>
            </thead>
            <tbody>
              <tr>
                {data &&
                  data.list.slice(0, 10).map((item) => (
                    <td key={item.dt_txt}>{item.value}</td>
                  ))}
              </tr>
              <tr>
                {data &&
                  data.list.slice(0, 10).map((item) => (
                    <td key={item.dt_txt}>
                      <p>{item.weather[0].description}</p>
                    </td>
                  ))}
              </tr>
              <tr>
                {data &&
                  data.list.slice(0, 10).map((item) => (
                    <td key={item.dt_txt}>
                      <p>{Math.round(item.main.temp - 273.15)}&deg;C</p>
                    </td>
                  ))}
              </tr>
            </tbody>
          </table>
        </div >
      )
      }
    </div >
  )
}

export default Vejret
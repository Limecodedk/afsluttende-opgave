import React, { useEffect, useState } from 'react';
import Error from '../components/Error'
import Loader from '../components/Loader'
import useRequestData from '../hooks/useRequestData'
import { format, parse } from 'date-fns';

const Energidata = () => {

  const { data, isLoading, error, makeRequest } = useRequestData()
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [area, setArea] = useState('');

  useEffect(() => {
    if (dateFrom && dateTo) {
      makeRequest(
        `https://api.energidataservice.dk/dataset/Elspotprices?offset=0&start=${dateFrom}T00:00&end=${dateTo}T00:00&filter=%7B"PriceArea":[%22${area}%22]%7D&sort=HourUTC%20DESC&timezone=dk`
      );
    }
  }, [dateFrom, dateTo, area]);

  const handleDateFrom = (e) => {
    e.preventDefault();
    setDateFrom(e.target.value);
  };

  const handleDateTo = (e) => {
    e.preventDefault();
    setDateTo(e.target.value);
  };

  const handleArea = (event) => {
    event.preventDefault();
    setArea(event.target.value);
  };

  return (
    <div className='energyContainer'>
      {error && <error />}
      {isLoading && <Loader />}

      <div>
        <h1>Energi Data</h1>
        <div className='energySearch'>
          <h2>Søg efter El priser</h2>
          <form action="" className='energyForm'>
            <input type='date' name='dateFrom' id='' onChange={handleDateFrom} />
            <input type='date' name='dateTo' id='' onChange={handleDateTo} />
            <select name="" id="" className='energyDropdown' value={area} onChange={handleArea}>
              <option value="">Vælg område</option>
              <option value="dk1">Dk1 (vest for storebælt)</option>
              <option value="dk2">Dk2 (Øst for storebælt)</option>
            </select>
            <button type="submit">Søg</button>
          </form>
        </div>
      </div>

      {data &&

        <div>
          <table className='energyTable'>
            <thead>
              <tr>
                <th>Tidspunkt</th>
                <th>Område</th>
                <th>Spot pris (DKK)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {data &&
                    data.records.map((item) => (
                      <p key={item.HourUTC}>{item.HourDK}</p>
                    ))}
                </td> <td>
                  {data &&
                    data.records.map((item) => (
                      <p key={item.HourUTC}>{item.PriceArea}</p>
                    ))}
                </td>
                <td>
                  {data &&
                    data.records.map((item) => (
                      <p key={item.HourUTC}>{item.SpotPriceDKK}</p>
                    ))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      }

    </div >
  )
}

export default Energidata
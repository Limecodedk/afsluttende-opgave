import React, { useEffect, useState } from 'react';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import useRequestData from '../../hooks/useRequestData';

const HomeAdmin = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const [showAllData, setShowAllData] = useState(false);

  useEffect(() => {
    makeRequest(`https://${process.env.REACT_APP_SUPABASEPROJECTID}.supabase.co/rest/v1/Analytics`, {
      'apikey': process.env.REACT_APP_SUPABASEAPIKEY
    });
  }, []);

  const handleLoadAllData = () => {
    setShowAllData(true);
  };

  return (
    <>
      {error && <Error />}
      {isLoading && <Loader />}

      <div className='dashbordHome'>
        <h1>Velkommen admin!</h1>
        <div className='analytics'>
          <div className='analyticsContent'>
            <h2>Analytics</h2>
            <p>Her vises statistik for besøgende på hjemmesiden</p>
          </div>
          <table className='table'>
            <thead>
              <tr>
                <th>IP-adresse:</th>
                <th>Land:</th>
                <th>Dato:</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                (showAllData ? (
                  data.map((s) => (
                    <tr key={s._id}>
                      <td>
                        <h2>{s.ip_address}</h2>
                      </td>
                      <td>
                        <p>{s.Country}</p>
                      </td>
                      <td>
                        <p>{s.date}</p>
                      </td>
                    </tr>
                  ))
                ) : (
                  data.slice(0, 6).map((s) => (
                    <tr key={s.id}>
                      <td>
                        <h2>{s.ip_address}</h2>
                      </td>
                      <td>
                        <p>{s.Country}</p>
                      </td>
                      <td>
                        <p>{s.date}</p>
                      </td>
                    </tr>
                  ))
                ))}
            </tbody>
          </table>
          <div className='btnContainer'>
            {!showAllData && (
              <button className='btn' onClick={handleLoadAllData}>Indlæs alle data</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeAdmin;

import React from 'react'
import { useEffect } from 'react'
import Error from '../components/Error'
import Loader from '../components/Loader'
import useRequestData from '../hooks/useRequestData'
import Parse from 'html-react-parser'

const ViborgHaveservice = () => {

  const { data, isLoading, error, makeRequest } = useRequestData()
  const { data: dataService, isLoading: isLoadingService, error: errorService, makeRequest: makeRequestService } = useRequestData()


  useEffect(() => {

    makeRequest("http://localhost:5023/aboutus")
    makeRequestService("http://localhost:5023/services?limit=2")
  }, [])
  return (

    <div className='service-main'>
      {error && <error />}
      {isLoading && <Loader />}
      <section className='aboutSection'>
        {
          data &&
          <div className='aboutContent'>
            <h1>{data.title}</h1>
            <div className='line'></div>
            <div>{Parse(data.content)}</div>
          </div>
        }
        <div className='service'>
          {
            dataService && dataService.map(c =>
              <div className='grid-container'>
                <div className='grid-item'>
                  <img src={"http://localhost:5023/images/" + c.image} alt="" />
                  <h2>{c.title}</h2>
                  <p>{c.content}</p>
                </div>
              </div>
            )
          }
        </div>
        <div>
          <a className='btn' href="/haveservice">Se alle ydelser</a>
        </div>
      </section>

    </div>


  )
}

export default ViborgHaveservice
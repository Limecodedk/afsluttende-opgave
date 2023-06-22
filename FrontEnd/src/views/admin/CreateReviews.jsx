import React, { useEffect, useState } from 'react';
import Error from '../../components/Error';
import Loader from '../../components/Loader'

import useRequestData from '../../hooks/useRequestData'

const CreateService = () => {

  const { data, isLoading, error, makeRequest } = useRequestData()
  const handleSubmit = e => {
    e.preventDefault();
    let fd = new FormData(e.target)
    makeRequest("http://localhost:5023/reviews/admin/",
      {
        "Content-Type": ""
      }, null, "POST", fd
    )
    e.target.reset()
  }

  return (
    <>
      <div className='main'>
        <h1 className='pagetitle'>Tilføj en anmeldelse </h1>
        {isLoading && <Loader />}
        {error && <Error />}

        <div className='form'>
          <form className='serviceform' onSubmit={e => handleSubmit(e)}>
            <input type="text" name="author" id="" placeholder='Service titel' required />
            <textarea name="content" id="" cols="30" rows="10" placeholder='skriv en anmeldelse'></textarea>
            <button type='submit'>Opret anmeldelse</button>
          </form>
        </div>
        {
          data &&
          < article >
            Anmeldelse fra {data.author} er oprettet
          </article >
        }
      </div>
    </>
  )
}
export default CreateService

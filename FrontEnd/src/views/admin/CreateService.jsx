import React, { useEffect, useState } from 'react';
import Error from '../../components/Error';
import Loader from '../../components/Loader'

import useRequestData from '../../hooks/useRequestData'

const CreateService = () => {
  const { data, isLoading, error, makeRequest } = useRequestData()

  const handleSubmit = e => {
    e.preventDefault();
    let fd = new FormData(e.target)
    makeRequest("http://localhost:5023/services/admin",
      {
        "Content-Type": ""
      }, null, "POST", fd
    )
    e.target.reset()
  }

  return (
    <>
      <div className='main'>
        <h1 className='pagetitle'>Tilføj en service </h1>
        {isLoading && <Loader />}
        {error && <Error />}

        <div className='form'>
          <form className='serviceform' onSubmit={e => handleSubmit(e)}>
            <input type="text" name="title" id="" placeholder='Service titel' required />
            <textarea name="content" id="" cols="30" rows="10" placeholder='skriv en kort beskrivelse af servicen'></textarea>
            <input type="file" name="image" id="" />
            <button type='submit'>Opret Service</button>
          </form>
        </div>
        {
          data &&
          < article >
            {data.title} er oprettet
          </article >
        }
      </div>
    </>
  )
}
export default CreateService

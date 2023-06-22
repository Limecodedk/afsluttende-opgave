import React, { useEffect, useState } from 'react';
import Error from '../../components/Error';
import Loader from '../../components/Loader'
import { useParams } from 'react-router-dom';

import useRequestData from '../../hooks/useRequestData'

const EditService = () => {

  const { id } = useParams()

  const { data, isLoading, error, makeRequest } = useRequestData()

  useEffect(() => {

    makeRequest("http://localhost:5023/reviews/" + id,)

  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    let fd = new FormData(e.target)
    await makeRequest("http://localhost:5023/reviews/admin/" + id,
      {
        "Content-Type": "multipart/form-data"
      }, null, "PUT", fd
    )
  }

  return (
    <>
      <div className='main'>
        <h1 className='pagetitle'>Ret anmeldelse </h1>
        {isLoading && <Loader />}

        {error && <Error error={error} />}
        <div className='form'>
          {
            data &&
            < form className='serviceform' onSubmit={e => handleSubmit(e)}>
              <input type="text" name="author" defaultValue={data.author} placeholder='Forfatter' required />
              <textarea name="content" id="" cols="30" rows="10" defaultValue={data.content} ></textarea>
              <button type='submit'>Ret anmeldelse</button>
            </form >
          }
        </div>
      </div>
    </>
  )
}

export default EditService;
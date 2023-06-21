import React, { useEffect, useState } from 'react';
import Error from '../../components/Error';
import Loader from '../../components/Loader'
import { useParams } from 'react-router-dom';

import useRequestData from '../../hooks/useRequestData'

const EditService = () => {

  const { id } = useParams()

  const { data, isLoading, error, makeRequest } = useRequestData()

  useEffect(() => {

    makeRequest("http://localhost:5023/services/" + id,)

  }, []);

  const handleSubmit = async e => {
    e.preventDefault();

    let fd = new FormData(e.target)
    await makeRequest("http://localhost:5023/services/admin/" + id,
      {
        "Content-Type": ""
      }, null, "PUT", fd
    )
  }

  return (
    <>
      <div className='main'>
        <h1 className='pagetitle'>Ret Service </h1>
        {isLoading && <Loader />}

        {error && <Error error={error} />}
        <div className='form'>
          {
            data &&
            < form className='serviceform' onSubmit={e => handleSubmit(e)}>
              <input type="text" name="title" defaultValue={data.title} placeholder='Service titel' required />
              <textarea name="content" id="" cols="30" rows="10" defaultValue={data.content} ></textarea>
              <input type="file" name="image" id="" />
              <button type='submit'>Ret Service</button>
            </form >
          }
        </div>
      </div>
    </>
  )
}

export default EditService;
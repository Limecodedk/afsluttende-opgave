import React, { useEffect } from 'react';
import Error from '../../components/Error';
import Loader from '../../components/Loader'
import useRequestData from '../../hooks/useRequestData'
import { FiEdit } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

const AdminService = () => {

  const { data, isLoading, error, makeRequest } = useRequestData()
  const { data: dataDelete, isLoading: isLoadingDelete, error: errorDelete, makeRequest: makeRequestDelete } = useRequestData()

  useEffect(() => {
    makeRequest("http://localhost:5023/reviews/",
    )
  }, [dataDelete])

  const handleDelete = (id, title) => {
    if (window.confirm("Er du sikker på at du vil slette " + title + "?")) {
      makeRequestDelete("http://localhost:5023/reviews/admin/" + id,
        {
        }, null, "DELETE")
    }
  }
  return (
    <>
      <div className="main">
        <h1>Anmeldelser</h1>
        {isLoading && <Loader />}
        {error && <Error />}

        <table className='table'>
          <thead>
            <tr>
              <th>Forfatter:</th>
              <th>Beskrivelse:</th>
              <th>Ret</th>
              <th>Slet</th>
            </tr>
          </thead>
          <tbody>
            {
              data && data.map(s =>

                <tr key={s._id}>
                  <td>{s.author}</td>
                  <td>{s.content}</td>
                  <td><Link to={"/admin/editreviews/" + s._id} ><FiEdit size={"1.5em"} color='#fff' /></Link></td>
                  <td><MdOutlineDelete size={"1.7em"} color='#fff' onClick={() => handleDelete(s._id, s.author)} /></td>
                </tr>
              )
            }
          </tbody >
        </table>
        <Link to={'/admin/createreviews/'} className='btn'>Tilføj ny</Link>
      </div>
    </>
  )
}
export default AdminService
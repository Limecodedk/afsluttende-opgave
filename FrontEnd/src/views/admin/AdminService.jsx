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
    makeRequest("http://localhost:5023/services",
    )
  }, [dataDelete])

  const handleDelete = (id, title) => {
    if (window.confirm("Er du sikker på at du vil slette " + title + "?")) {
      makeRequestDelete("http://localhost:5023/services/admin/" + id,
        {
        }, null, "DELETE")
    }
  }

  return (
    <>
      <div className="main">
        <h1>Service</h1>
        {isLoading && <Loader />}
        {error && <Error />}

        <table className='table'>
          <thead>
            <tr>
              <th>Titel:</th>
              <th>Beskrivelse:</th>
              <th>Billede:</th>
              <th>Ret</th>
              <th>Slet</th>
            </tr>
          </thead>
          <tbody>
            {
              data && data.map(s =>

                <tr key={s._id}>
                  <td>{s.title}</td>
                  <td>{s.content}</td>
                  <td>{s.image}</td>
                  <td><Link to={"/admin/editservice/" + s._id} ><FiEdit size={"1.5em"} color='#fff' /></Link></td>
                  <td><MdOutlineDelete size={"1.7em"} color='#fff' onClick={() => handleDelete(s._id, s.title)} /></td>
                </tr>
              )
            }
          </tbody >
        </table>
        <Link to={'/admin/createservice/'} className='btn'>Tilføj ny</Link>
      </div>
    </>
  )
}
export default AdminService
import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className='loader'>
      <h1>Vent et øjeblik dine dataer bliver hentet</h1>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>

  )
}

export default Loader
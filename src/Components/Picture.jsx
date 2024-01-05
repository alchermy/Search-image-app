import React from 'react'

function Picture({data}) {
  return (
    <div className='grid-box'>
        <img src={data.urls.full} alt={data.description} />
    </div>
  )
}

export default Picture
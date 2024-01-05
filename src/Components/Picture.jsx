import React from 'react'

function Picture({data}) {
  return (
    <div className='grid-box'>
        <img src={data.urls.small} alt={data.description} />
    </div>
  )
}

export default Picture
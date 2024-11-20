import React from 'react'

const ListPost = ({posts}) => {
  return (
    <div>
      <h1 className='font-bold'>
        List Post
      </h1>
      <div>
      <ul>
      {posts.map((itm,ind)=>(
        <li key={itm.id}>
         {itm.title}
        </li>
      ))}
     </ul>
      </div>
    </div>
  )
}

export default ListPost

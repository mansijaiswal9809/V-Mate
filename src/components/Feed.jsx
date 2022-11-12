import React from 'react'
import VideoCard from './VideoCard'

const Feed = ({data}) => {
    // console.log(data)
  return (
    <div style={{display:"flex",flexWrap:'wrap', gap:"15px", justifyContent:"center"}}>
      {data.map((curr,ind)=>{
       return <div style={{width:'360px', overflowX:"hidden"}} key={ind}><VideoCard  curr={curr}/></div>
      })}
    </div>
  )
}

export default Feed

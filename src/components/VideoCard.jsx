import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = ({curr}) => {
    // console.log(data)
  return (
    <Link to={`/video/${curr?.id?.videoId}`}>
      <div style={{width:'360px', height:"300px", overflow:"hidden"}}><img src={curr?.snippet?.thumbnails?.high?.url} alt="thumbnail"  width="360px"/></div>
      <div style={{color:"white", textDecoration:"none" }}>{curr?.snippet?.title||null}</div>
      <div style={{color:"teal", textDecoration:"none" ,fontWeight:900}}>{curr?.snippet?.channelTitle||null}</div>
    </Link>
  )
}

export default VideoCard

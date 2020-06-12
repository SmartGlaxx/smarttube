import React from 'react';

export default ({videoList, changeSelection, selectedVideoId}) =>{

    const changeSelectedVideo = (data) =>{
        changeSelection(data)
        
    }
 return(
     <>
    <div>
    {videoList.length > 0 && (
        videoList.map(data => {
            if(data.id !== selectedVideoId){
        return(
        <div className='list-group-item'
        onClick={()=>changeSelectedVideo(data) } className='videoList' key={data.id} >
        <div>
            <img src = {data.thumbnails.medium.url} height='80px'alt='video suggestion' />
        </div>
        <div style={{paddingLeft:'10px'}}>
            <div className='sugg-title' ><h5>{data.title}</h5></div>
            <div className='sugg-channel'>{data.channel.title}</div>
        </div>
        {/* {data.title} */}

        </div>
            )}
            
        })
    )}
        
    </div>
    </>
 )   
}
// export default Video;
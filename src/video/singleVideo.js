import React from 'react';

export default ({detail}) =>{
 return(
     <>
     {detail ?(
        <div>
            <div>
                <iframe width="100%" height="315" 
                src={`https://www.youtube.com/embed/${detail.id}`}
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
                </iframe>
            </div>
            <div >
                <div className='signleVideoTitle'><h3>{detail.title}</h3></div>
                <div className='signleVideoTitle'>{detail.description}</div>
            </div>
        </div>
        ) : <div className='no_vid'>No Videos Found For Your Search</div>}
    </>
 )   
}

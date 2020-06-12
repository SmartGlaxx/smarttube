import React, {useEffect, useState} from 'react';
import SingleVideo from './singleVideo';
import Suggestions from './suggestions';
import YouTube from 'simple-youtube-api';
import config from './../config';


const youtube = new YouTube(config.apiKey);
export default ({searchString}) =>{

const [videoList, setVideoList] = useState([]);
const [selectedVideo, setSelectedVideo] = useState({});

useEffect(()=>{
    callApi()
}, [searchString]);

const callApi = async ()=>{
    const result = await youtube.searchVideos(searchString, 10)
    setSelectedVideo(result[0]);
    setVideoList(result);
    
}
const setSelectedVideoCallback=(videoDetail)=>{
setSelectedVideo(videoDetail);
}
 return(
     <>
    <div className='col-xs-12 col-sm-12 col-lg-8'>
    {/* {selectedVideo.title ? selectedVideo.title : 'Loading...'} */}
        <SingleVideo detail={selectedVideo}/>
    </div>
    <div className='col-xs-12 col-sm-12 col-lg-4' style={{ height:'80vh'}}>
       { videoList.length > 0 ? <h5>Video suggestions</h5> : <h5> </h5> } 
        <div style={{ overflow:'auto', height: '40vh'}}>
        <Suggestions videoList={videoList} changeSelection={setSelectedVideoCallback} selectedVideoId={selectedVideo.id}/>
        </div>
    </div> 
    </>
 )   
}
// export default Video;

import React, {useState} from 'react';
import './App.css';
// import { Button } from 'react-bootstrap';
import img_1 from '../images/play_icon.png';
import Video from '../video/index';
import Footer from './footer';

function App() {

const [searchTerm, setSearchTerm] = useState([]);
const [passToChild, setPassToChild] = useState([]);

  return (
    <>
<div className ='container' >
     <div className='logo'><img className='logo_img' src = {img_1} alt='Smart Play Logo'/> <div className='smart_tube'> Smart Tube</div></div>
  <div className='row'>
      <input 
      className ='col-sm-10 col-xs-10 col-lg-10 form-control' 
      type="text" placeholder="Search videos here..." 
      onChange = {event=> setSearchTerm(event.target.value) }/>
      <button 
      className='col-sm-2 col-xs-2 col-lg-2 btn btn-primary' 
      variant="primary" size="lg" onClick = {()=>setPassToChild(searchTerm)}>Search</button>
  </div><br/>
  <div className='row'>
  <Video  searchString = {passToChild}/>
  </div>
</div>
<Footer />
</>
  );
}

export default App;

import React, { useState } from 'react';
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs'
import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {

  const [playVideo, SetPlayVideo] = useState(false)
  const vidRef = React.useRef();

  const handleVideo = () => {
    SetPlayVideo((prevPlayVideo) => !prevPlayVideo)

    if(playVideo){
      vidRef.current.pause()
    } else {
      vidRef.current.play()
    }
  }

  return(
    <div className='app__video'>
      <video
        type='video/mp4'
        loop
        controls={false}
        muted
        ref={vidRef}
        src={meal}
      />
      <div className='app__video-overlay flex__center'>
        <div
          onClick={handleVideo}
          className='app__video-overlay_circle flex__center'
        >
          {playVideo 
            ? <BsPauseFill color='#fff' fontSize={30}/> 
            : <BsFillPlayFill color='#fff' fontSize={30}/>}
        </div>
      </div>
    </div>
  )

};

export default Intro;

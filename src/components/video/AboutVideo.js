import React from 'react'
import { DefaultPlayer as Video } from 'react-html5video';
import videoIntro from '../../static/video/Intro.mp4';
import 'react-html5video/dist/styles.css';
import banner from '../../static/video/Introposter.jpg'

const AboutVideo = () => {
  return (
    <Video
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
            poster={banner}
            onCanPlayThrough={() => {
                // Do stuff
            }}>
            <source src={videoIntro} type="video/mp4" />
    </Video>
  )
}

export default AboutVideo
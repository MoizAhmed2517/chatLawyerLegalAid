import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const TypingFont = (props) => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Your Trusted Legal Partner and Assistant',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Your Reliable Legal Advocate and Ally',
        1000,
        'Your Dedicated Legal Support and Counsel',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ color: `${props.mainColor}`, fontSize: '2.5rem', display: 'flex', fontFamily: 'Oxygen', textAlign: 'center', fontWeight: 400, zIndex: 2, position: 'relative' }}
      repeat={Infinity}
    />
  )
}

export default TypingFont
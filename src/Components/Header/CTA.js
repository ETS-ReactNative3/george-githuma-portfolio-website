import React from 'react'
//import cv from assets
import Resume from '../../Assets/George-Githuma-Resume.pdf'

//Create Download Resume link and Let's Talk link
function CTA() {
  return (
    <div className='cta'>
        {/*Remove link*/}

        {/*Switch buttons*/}
        
        {/*Assign import with a download attribute to make it downloadable*/}
        {/*Add btn and btn primary class to make them buttons*/}
        <a href={Resume} download className='btn'>Download Resume</a>

    </div>
  )
}

export default CTA
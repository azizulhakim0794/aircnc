import React from 'react'
import Fade from 'react-reveal/Fade';
const HomeHeader = () => {
  return (
    <div className="homePhotoSection">
                    <div className="homePhoto">
                    </div>
                    <div className="homeHeaderText container text-center">
                        <Fade left>
                            <h1>Not sure where to go? Perfect.</h1>
                            <br />
                            {/* <p className="text-start container">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolor id facilis ad corrupti quod, ipsum distinctio maxime quidem saepe ullam possimus necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolor id facilis ad corrupti quod, ipsum distinctio maxime quidem saepe ullam possimus necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolor id facilis ad corrupti quod, ipsum distinctio maxime quidem saepe ullam possimus necessitatibus.</p> */}
                        <button className="btn btn-air airBtn border-20">I'm Flexible</button>
                        </Fade>
                    </div>
                </div>
  )
}

export default HomeHeader
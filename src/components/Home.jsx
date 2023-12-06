import React from 'react'
import "./Home.css"
import img1 from "../Assets/img1.png"
import img2 from "../Assets/img2.png"
import img3 from "../Assets/img3.png"
import {Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='home'>
        
            <div className="homeBodyLeft">
            <div className="homeHead"><h1 className='homeH1'>UPLOADER</h1></div>

                <p className='homeP'>Welcome to Uploader.... <br/>
                </p><p className='smallp'>where your data meets the cloud! Effortlessly upload JSON files to your AWS bucket and explore their potential with our lightning-fast platform. Whether you're a developer or data enthusiast, embrace the seamless experience of secure uploads and intuitive reading. Join us in transforming the future of data—sign up now and elevate your data journey with Uploader.</p>
                <Link to="/login"><button className='getStart'>GET STARTED</button></Link>
            </div>
            <div className="sepparation">

            </div>
            <div className="homeBodyRight">
                <div className="img1">
                    <img src={img1} alt="" className='homePic1'/>
                </div>
                <div className="img2">
                <img src={img2} alt="" className='homePic2'/>

                </div>
                <div className="img3">
                <img src={img3} alt="" className='homePic3'/>

                </div>
            </div>
    </div>
  )
}

export default Home;
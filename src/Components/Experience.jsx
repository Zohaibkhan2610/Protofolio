import React from 'react'
import './../App.css'
import Check from './../assets/checkmark.png'
import './Expercience.css'

export default function Experience() {
  return (
    <div className='container'>
    <div className="Experences">
    <div className="main main-exp">
        <div>
        <p>Expolore My</p>
        <h1>Experience</h1>
        </div>
        <div className="main-details">
        <div className="main-text">
            <h2>Frontend Development</h2>
            <div className="experence">
                <div className="exper">
                <div className="exper-details">
                    <img src={Check} className='icon' alt="" />
                    <div className="exper-text">
                    <h3>HTML</h3>
                    <p>Experenced</p>
                    </div>
                </div>
                <div className="exper-details">
                    <img src={Check} className='icon' alt="" />
                    <div className="exper-text">
                    <h3>CSS</h3>
                    <p>Experenced</p>
                    </div>
                </div>
                </div>
                <div className="exper">
                <div className="exper-details">
                    <img src={Check} className='icon' alt="" />
                    <div className="exper-text">
                    <h3>SASS</h3>
                    <p>Intermediate</p>
                    </div>
                </div>
                <div className="exper-details">
                    <img src={Check} className='icon' alt="" />
                    <div className="exper-text">
                    <h3>JavaScript</h3>
                    <p>Basic</p>
                    </div>
                </div>
                </div>
                <div className="exper">
                <div className="exper-details">
                    <img src={Check} className='icon' alt="" />
                    <div className="exper-text">
                    <h3>TypeScript</h3>
                    <p>Basic</p>
                    </div>
                </div>
                <div className="exper-details">
                    <img src={Check} className='icon' alt="" />
                    <div className="exper-text">
                    <h3>Material UI</h3>
                    <p>Intermediate</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="main-text main-text2">
            <h2>Frontend Development</h2>
            <div className="experence">
                <div className="exper">
                <div className="exper-details">
                    <img src={Check} className='icon' alt="" />
                    <div className="exper-text">
                    <h3>PostgreSQL</h3>
                    <p>Basic</p>
                    </div>
                </div>
                <div className="exper-details">
                    <img src={Check} className='icon' alt="" />
                    <div className="exper-text">
                    <h3>Node js</h3>
                    <p>Intermediate</p>
                    </div>
                </div>
                </div>
                <div className="exper">
                <div className="exper-details">
                    <img src={Check} className='icon' alt="" />
                    <div className="exper-text">
                    <h3>Express js</h3>
                    <p>Intermediate</p>
                    </div>
                </div>
                <div className="exper-details">
                    <img src={Check} className='icon' alt="" />
                    <div className="exper-text">
                    <h3>Git</h3>
                    <p>Intermediate</p>
                    </div>
                </div>
                </div>
            
            </div>
        </div>
       
        </div>

      </div>
    </div>
      
    </div>
  )
}

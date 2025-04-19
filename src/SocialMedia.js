import React from 'react'
import './SocialMedia.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import insta1 from './instaqr1.png'
import insta2 from './instaqr2.png'
import insta3 from './instaqr3.png'
import insta4 from './instaqr4.png'
import linkedin1 from './linked1.png'
import linkedin2 from './lined2.png'
import linkedin3 from './linked3.png'
import linkdin4 from './linked4.png'


const SocialMedia = () => {
  return (
    <div className='position-relative'>
        <div className=''>
            <div className='smbg'>
                {/* <h2 className='ribbon1'>FOLLOW US ON</h2> */}
                <div className='display-flex'>
                    <div className="outer-container">
                        <div className="trigger-container fs-5">
                        <i className="fab fa-instagram fs-5 pe-1"></i>Instagram
                        <div className="slide-out-container">
                            <a href="https://www.instagram.com/msecofficial_chennai24/" target="_blank" rel="noopener noreferrer">
                                <img src={insta1} alt="Instagram QR 1" className="qrimg" />
                            </a>
                            <a href="https://www.instagram.com/mssm_mba_official/" target="_blank" rel="noopener noreferrer">
                                <img src={insta2} alt="Instagram QR 2" className="qrimg" />
                            </a>
                            <a href="https://www.instagram.com/the_nest_school/" target="_blank" rel="noopener noreferrer">
                                <img src={insta3} alt="Instagram QR 3" className="qrimg" />
                            </a>
                            <a href="https://www.instagram.com/mcwchennai/" target="_blank" rel="noopener noreferrer">
                                <img src={insta4} alt="Instagram QR 4" className="qrimg" />
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="outer-container mt-3">
                        <div className="trigger-container triger-con2 fs-5">
                        <i className="fab fa-linkedin fs-5 pe-1"></i>LinkedIn
                        <div className="slide-out-container">
                            <a href="https://www.linkedin.com/school/meenakshi-sundararajan-engineering-college/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                                <img src={linkedin1} alt="Instagram QR 1" className="qrimg" />
                            </a>
                            <a href="https://www.linkedin.com/in/meenakshi-sundararajan-school-of-management-7a23bb229/" target="_blank" rel="noopener noreferrer">
                                <img src={linkdin4} alt="Instagram QR 2" className="qrimg" />
                            </a>
                            <a href="https://www.linkedin.com/company/the-nest-school-chennai/" target="_blank" rel="noopener noreferrer">
                                <img src={linkedin2} alt="Instagram QR 3" className="qrimg" />
                            </a>
                            <a href="https://www.linkedin.com/school/meenakshi-college-for-women/" target="_blank" rel="noopener noreferrer">
                                <img src={linkedin3} alt="Instagram QR 4" className="qrimg" />
                            </a>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='text-center bg-black text-white'>
                <h6 className='p-2 mb-0'>All copyrights reserved &copy; {new Date().getFullYear()}  msgroups</h6>
            </div>
        </div>

    </div>
  )
}

export default SocialMedia

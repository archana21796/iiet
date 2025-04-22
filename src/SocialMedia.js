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
import yourInstaLogo from './instalogo.png'
import yourLinkedinLogo from './linkedinlogo.png'


const SocialMedia = () => {

    const address = "363G+RHC, 363, Arcot Road, Kodambakkam, Puliyur 1st Main Rd, Subedar Colony, Kodambakkam, Chennai, Tamil Nadu 600024";

    const mapLink = "https://www.google.com/maps/place/Meenakshi+Sundararajan+Engineering+College/@13.0558079,80.2239358,17z/data=!4m14!1m7!3m6!1s0x3a5266f499eee457:0x4d3f7e677496e707!2sMeenakshi+Sundararajan+Engineering+College!8m2!3d13.0558027!4d80.2265107!16s%2Fm%2F0hndktj!3m5!1s0x3a5266f499eee457:0x4d3f7e677496e707!8m2!3d13.0558027!4d80.2265107!16s%2Fm%2F0hndktj";
      return (
    <div className='position-relative'>
        <div className=''>
            <div className='smbg'>
                {/* <h2 className='ribbon1'>FOLLOW US ON</h2> */}
                <div className='display-flex'>
                    <div className="outer-container">
                        <div className="trigger-container fs-5">
                        <img  src={yourInstaLogo} alt="Instagram Logo" className="insta-logo logoalignment pe-2" />
                        {/* <i className="fab fa-instagram fs-5 pe-1"></i> */}
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
                        {/* <i className="fab fa-linkedin fs-5 pe-1"></i> */}
                        <img  src={yourLinkedinLogo } alt="Instagram Logo" className="insta-logo logoalignment pe-2" />
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
                <div className='row align-items-center justify-content-center'>
                <a href={mapLink} className='ms-5 col-12 col-md-6 col-xl-2 mt-4' target="_blank" rel="noopener noreferrer"> 
                    <div className='bgmap-container '>
                        <div className='bgmap'></div>
                    </div>
                </a>
                    <div className='col-xl-3 col-md-6 col-12 text-start ps-5 ps-md-4'>
                        <h4 className='pt-4'>CONTACTS</h4>
                        <p className='pt-3'>Meenakshi Sundaraja Engineering college, <br/>363  Arcot Road,<br/> Kodambakkam, <br/>Puliyur 1st Main Rd,<br/> Subedar Colony, <br/>Kodambakkam, Chennai, <br/>Tamil Nadu 600024</p>
                        <div>

                        </div>
                    </div>
                </div>
                <h6 className='p-3 mt-4 mb-0 bg-footer'>All copyrights reserved &copy; {new Date().getFullYear()}  msgroups</h6>
            </div>
        </div>

    </div>
  )
}

export default SocialMedia

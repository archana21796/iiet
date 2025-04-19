import React from 'react'
import './SocialMedia.css'
import '@fortawesome/fontawesome-free/css/all.min.css';


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
                            <div className="slide-out-container qr1">
                            </div>
                        </div>
                    </div>
                    <div className="outer-container">
                        <div className="trigger-container triger-con2 fs-5">
                        <i className="fab fa-linkedin fs-5 pe-1"></i>LinkedIn
                            <div className="slide-out-container qr2">
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

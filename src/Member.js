import React from 'react'
import './Member.css'

const Member = () => {
  return (
    <div>
      <div className='row container-fluid align-item-center justify-content-center mt-5'>
        <h2 className='ribbon'>WHERE PASSION MEETS PURPOSE: OUR CENTER OF EXCELLANCE</h2>
      </div>
      <div className="container-fluid">
  <div className="row justify-content-center align-items-center">
    <div className="hover-container col-xl-5 col-md-6 col-sm-10 border m-3">
      <div className='hover-image club1'>
      </div>
      <div className="hover-card">
        <h3>MSIIC<span className='club1qrcode clubqrcode'></span></h3>
        <p className='p-1'>Meenakshi Sundararajan Innovation &amp; Incubation Center (MSIIC) – Partnering with T-
        HUB and Wadhwani Entrepreneurial Network to turn ideas into groundbreaking
        ventures. Apart from design and delivery of the “Entrepreneurship” program the center also
        handles institutional innovation and mentorship programs across the campus.</p>
      </div>
    </div>

    <div className="hover-container col-xl-5 col-md-6 col-sm-10 border m-3">
    <div className='hover-image club2'>
    </div>
      <div className="hover-card">
        <h3>MS-CIIC<span className='club2qrcode clubqrcode'></span></h3>
        <p className='p-1'>Meenakshi Sundararajan Center for Industry-Institute Collaboration (MS-CIIC) –
Bridging academia and industry using industry linked skill development &amp; curriculum
deployment, through world-class Industry Centers of Excellence (ICE) in Cyber-Security,
Cyber Forensics (Panchi), Robotics(Fanuc), IoT(Kone), Cloud Computing(Ananth),
AR/VR(Vi Micro), Advanced Manufacturing(Ace/Siemens), and more.</p>
      </div>
    </div>

    <div className="hover-container col-xl-5 col-md-6 col-sm-10 border m-3">
    <div className='hover-image club1'>
    </div>
      <div className="hover-card">
        <h3>MS-CDC<span className='club3qrcode clubqrcode'></span></h3>
        <p className='p-1'>Meenakshi Sundararajan Career Development Center (MS-CIIC) – A transformative
program guiding students &amp; staff from self-awareness to career excellence. This center
is also tasked with Faculty Development &amp; Upskilling.</p>
      </div>
    </div>

    <div className="hover-container col-xl-5 col-md-6 col-sm-10 border m-3">
    <div className='hover-image club4'>
    </div>
      <div className="hover-card">
        <h3>SSMSRC<span className='club4qrcode clubqrcode'></span></h3>
        <p className='p-1'>Sringeri Sharadambha Meenakshi Sundararajan Research Center (SSMSRC) –
        Fostering a culture of inquiry, innovation, and global academic impact.</p>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Member

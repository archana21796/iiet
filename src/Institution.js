import React from 'react'
import './Institution.css'

const Institution = () => {
  return (
    <div className='institutionsec pt-5 position-relative'>
      <div className='styleheader ms-4 ms-md-0'>
        <div className='stylebg text-center'>
          <h2>OUR PRESTIGIOUS INSTITUTION:<br /> A HOME FOR EVERY ASPIRATION</h2>
          <h4>The IIET Society is home to premier institutions <br /> that have set benchmarks in education</h4>
        </div>
      </div>

      <div className=' institutionstyle'>
        <a
          href="https://www.meenakshicollege.com"
          target="_blank"
          rel="noopener noreferrer"
          className="puzzle1 text-decoration-none text-white"
        >
          <div className="p-2">
            <div className="row ">
              <div className="col-4 ms-2 collegelogo cgelogobg1"></div>
              <div className='col-6'>
                <p>MEENAKSHI COLLEGE FOR WOMEN [1975]</p>
                <strong>An Autonomous Institution</strong>
                <p>www.meenakshicollege.com</p>
              </div>
            </div>
            <div className="">
              Empowering over 3,500 women scholars in Arts and Science affiliated with the University of Madras
            </div>
          </div>
        </a>

         <a
          href="https://www.msec.edu.in"
          target="_blank"
          rel="noopener noreferrer"
          className="puzzle2 text-decoration-none text-white"
        >
          <div className="p-2">
            <div className="row">
              <div className="collegelogo ms-2 cgelogobg2 col-4"></div>
              <div className='col-6'>
                <p>MEENAKSHI SUNDARARAJAN ENGINEERING COLLEGE [2001]</p>
                <strong>An Autonomous Institution</strong>
                <p>www.msec.edu.in</p>
              </div>
            </div>
            <div className=" ps-3">
              Engineering excellence through innovative learning and empowerment.
            </div>
          </div>
        </a>

        <a
          href="https://www.mssm.edu.in"
          target="_blank"
          rel="noopener noreferrer"
          className="puzzle3 text-decoration-none text-white"
        >
          <div className="p-2">
            <div className="row">
              <div className="collegelogo col-4 cgelogobg3 ms-2"></div>
              <div className='pt-xl-4 col-6'>
                <p>MEENAKSHI SUNDARARAJAN SCHOOL OF MANAGEMENT [2001]</p>
                <p>www.mssm.edu.in</p>
              </div>
            </div>
            <div className="pt-3">
              A crucible for business leaders, offering transformative MBA programs.
            </div>
          </div>
        </a>

        <a
          href="https://www.thenest.school"
          target="_blank"
          rel="noopener noreferrer"
          className="puzzle4 text-decoration-none text-white"
        >
          <div className="p-2">
            <div className="row align-items-center jutify-content-center">
              <div className="collegelogo cgelogobg4 ms-3 col-4"></div>
              <div className=' col-6'>
                <p className="fs-4">THE NEST SCHOOL [2022]</p>
                <p>www.thenest.school</p>
              </div>
            </div>
            <div className="pt-3">
              A revolutionary institution delivering IB and Cambridge education, nurturing global citizens from the ground up.
            </div>
          </div>
        </a>

      </div>
      <div className='middlelogo'></div>
    </div>
  )
}

export default Institution

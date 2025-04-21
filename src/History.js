import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './About.css'

const History = () => {
  return (<>
  <div className='text-center mb-5'>
        <p >
        {/* <button className="btn btn-primary btn-ray aboutsec border-0 p-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          About US  <FontAwesomeIcon icon={faArrowRight} />
        </button> */}
      </p>
      <div className="collapse text-center m-auto row container align-items-center justify-content-center show" id="collapseExample">
        <div className="circle-cut circlescreenreso col-md-12 col-xxl-9 container p-md-3 m-auto">
          <div className=' row align-item-center justify-content-center ms-l-5'>
          <div className='bgimg ms-md-5'></div>
          </div>
          <div className='row align-item-center justify-content-center'>
          <div className='w-75 '>
            <h4 className='fs-2 text-primary'>A LEGACY BORN FROM DREAM</h4>
            <p>In 1947, Prof. K. R. Sundararajan a visionary, an educator,
                and a dreamer laid the foundation of what would become
                a beacon of learning for generations to come. He planted
                as a seed in Chennai’s soil, a 14-acre sanctuary of learning
                called the I.I.E.T Society. For over 75 years, that seed has
                blossomed into a thriving haven where lives are
                transformed, futures are forged, and dreams find wings. The Indian Institute of
                Engineering & Technology (IIET) Society was not just established, it was built with
                unwavering passion, relentless dedication, and a belief that education has the power to
                change the world. This isn’t just a campus, it’s a cradle of possibility, pulsing with the
                promise of a brighter tomorrow.

                  What started as a humble endeavor, became a sacred space through immense hardship,
                  where young minds could dream, explore, and redefine possibilities.
            </p>
          </div>
          </div>
          
        </div>
      </div>      
    </div>
  </>
    
  )
}

export default History

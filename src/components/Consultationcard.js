import React from 'react'

function Consultationcard() {
  return (
    <div>
        <section id='consultaionCard'>
            <div className='consultaion'>
                <div className='imgContainer'>
                    <img src="https://mobirise.com/extensions/softwarem4/mobile-app/assets/images/features1.jpg" alt='consultation card image'/>
                </div>
                <div className='consultationContent'>
                    <div className='techText'>HTML, CSS, JS, Python</div>
                    <div className='consultationTitle'>What We Do</div>
                    <div className='consultationPara'>Lorem ipsum dolor sit amet, consectetur adiipiscing elit. Accumsan porttitor egestas fermentum nulla.</div>
                    <div className='pointsContainer'><span>✔</span> App Design & Development</div>
                    <div className='pointsContainer'><span>✔</span> Web Development & CMS</div>
                    <div className='pointsContainer'><span>✔</span> Sass & Pos Software Design</div>
                    <button>Free Consultation</button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Consultationcard
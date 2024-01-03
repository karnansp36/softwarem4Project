import React from 'react'
import MemberCard from './MemberCard'
import Assets from './Assets'


function Membershipcard() {
  const memberShipCards=Assets.map((info,index)=>(
      <MemberCard
      key={index}
      bgcolor={info.bgcolor}
      sub={info.sub}
      price={info.price}
      des1= {info.des1}
      des2= {info.des2}
      des3= {info.des3}
      des4= {info.des4}
      des5= {info.des5}
      des6= {info.des6}
  />
    ));
    

  return (
    <div>
        <section id='membershipCardContainer'>
          <div className='memberT2'>price &plans</div>
          <div className='memberT1'>Price and Plans</div>
          <div className='cardContainer' >
              {memberShipCards}
          </div>
        </section>
    </div>
  )
}

export default Membershipcard
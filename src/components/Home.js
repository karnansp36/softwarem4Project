import React from 'react'
import HeaderSect from './HeaderSect'
import Consultationcard from './Consultationcard'
import Membershipcard from './Membershipcard'
import Percentage from './Percentage'
import Faqanswer from './Faqanswer'
import Intergration from './Intergration'
import Teammember from './Teammember'
import Aboutus from './Aboutus'
import Client from './Client'
import Form from './Form'
import Feedback from './Feedback'
import Mapform from './Mapform'
import Footer from './Footer'


function Home() {
  return (
    <div>
      <HeaderSect/>
      <Consultationcard/>
      <Membershipcard/>
      <Percentage/>
      <Faqanswer/>
      <Intergration/>
      <Teammember/>
      <Aboutus/>
      <Client/>
      <Form/>
      <Feedback/>
      <Mapform/>
      <Footer/>
    </div>
  )
}

export default Home
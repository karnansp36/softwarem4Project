import React from 'react'

function Form() {
  return (
    <div>
        <section id='formContainer'>
            <div className='form'>
                <div className='formImage'>
                    <img src='https://mobirise.com/extensions/softwarem4/mobile-app/assets/images/background4.jpg'/>
                </div>
                <div className='formDetails'>
                    <div className='formDetailsContainer'>
                        <div className='formNewsLetter'>Get Newsletter</div>
                        <div className='formTitle'> Get every weekly update feeds</div>
                        <input type='text' id='name' placeholder='Enter full name'/>
                        <input type='email' id='email' placeholder='Enter email adress'/>
                        <div className='subscribeContainer'>
                            <button className='subscribeBtn'>Subscribe Now</button>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    </div>
  )
}

export default Form
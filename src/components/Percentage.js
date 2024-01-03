import React from 'react'

function Percentage() {
  return (
    <div>
        <div id='percentageContainer'>
            <div className='percentage'>
                <div className='percentContainer flexContainer'>
                    <div className='percentageIcon flexContainer'>
                        <svg style={{fill:"white"}} xmlns="http://www.w3.org/2000/svg" height="26" width="22" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>
                    </div>
                    <div className='percent'>
                        <div  className='percentNumber'>5.37%</div>
                        <div style={{color:"gray", fontSize:"13pt"}}>Monthly income</div>
                    </div>
                </div>
                <div className='percentContainer flexContainer'>
                    <div className='percentageIcon flexContainer'>
                        <svg style={{fill:"white"}} xmlns="http://www.w3.org/2000/svg" height="24" width="18" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>
                    </div>
                    <div className='percent'>
                        <div className='percentNumber'>8.93%</div>
                        <div style={{color:"gray", fontSize:"13pt"}}>New Clients</div>
                    </div>
                </div>
                <div className='percentContainer flexContainer'>
                    <div className='percentageIcon flexContainer'>
                        <svg style={{fill:"white"}} xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>
                    </div>
                    <div className='percent'>
                        <div  className='percentNumber'>4.25%</div>
                        <div style={{color:"gray", fontSize:"13pt"}}>Good reviews</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Percentage
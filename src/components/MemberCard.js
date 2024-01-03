import React from 'react'

function MemberCard(props) {
    const style ={
        background:`${props.bgcolor}`
    }
  return (
    <div>
        <div className='cardDetail' style={style}>
            <div className='cardSub'>{props.sub}</div>
            <div className='cardPrice'>{props.price}</div>
            <div className='cardDescription'><span>✔</span>{props.des1}</div>
            <div className='cardDescription'><span>✔</span>{props.des2}</div>
            <div className='cardDescription'><span>✔</span>{props.des3}</div>
            <div className='cardDescription'><span>✔</span>{props.des4}</div>
            <div className='cardDescription'><span>✔</span>{props.des5}</div>
            <div className='cardDescription'><span>✔</span>{props.des6}</div>
            <div className='cardBtn'><button>Get Started</button></div>
        </div>
    </div>
  )
}

export default MemberCard
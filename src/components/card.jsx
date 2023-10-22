import React from 'react'
import "./card.css"

function card({from, subject, content, date}) {
  return (
    <section className='card'>
        <div className='left'>
            <span className='avatar'>F</span>
        </div>
        <div className='right'>
            <h3>From: <strong>{from}</strong></h3>
            <h3>Subject: <strong>{subject}</strong></h3>
            <p>{content}</p>

            <p>{date}</p>
        </div>
    </section>
  )
}

export default card
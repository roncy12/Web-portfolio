import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import JotformEmbed from 'react-jotform-embed';

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="blurb-title">Get In Touch Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>jroncynavs12@gmail.com</h5>
            <a href="mailto:jroncynavs12@gmail.com">Send a message</a>
          </article>
        </div>

        <JotformEmbed src="https://form.jotform.com/241363419108453" className="myIframe" />
        
        {/* <script type="text/javascript" src="https://form.jotform.com/jsform/241363419108453"></script>
         */}
      </div>
    </section>
  )
}

export default Contact
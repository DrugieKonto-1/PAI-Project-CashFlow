import { useState } from 'react'
import "../mocks/HomePage.css"

export const MainPageForm = () => {
  return(<>
  <h3>Contact Us</h3>
  <form className="contact-form">
    <h4>
      Name: <br></br>
      <input type="text" placeholder="Your Name" /> <br></br>

      Email: <br></br>
      <input type="email" placeholder="Your Email" /> <br></br>

      Message: <br></br>
      <input placeholder="Your Message"></input>
    </h4>
    <button type="submit" className="submit-button">Send</button>
  </form>
  </>)

}
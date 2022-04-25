import React from 'react'
import './contact.css'
import image from "./images/map.PNG";


const contact = () => {
  return (
    <div>
      <div className='contact-div'>
        <div className='form-div'>
          <h2><u>GET IN TOUCH</u></h2>
          <p>You have a piece of advice or a suggestion that you would like to share with us?
              <br></br>Feel free to contact us.
          </p>
          <form>
            <label for='name'>Name:</label>
            <input type="text" id='name'></input>

            <label for='email'>Email:</label>
            <input type="email" id='email'></input>

            <label for='subject'>Subject:</label>
            <input type="text" id='subject'></input>

            <label for='msg'>Message:</label>
            <textarea id='msg'></textarea>

            <input type="submit" value='SEND MESSAGE' id='submit'></input>
          </form>
        </div>

        <div className='add-div'>
          <h2><u>FIND US</u></h2>
            <ul>
              <li>
                Address: 40 park Ave, Broklyn, New York.
              </li>
              <li>
                Phone: 000-111-222
              </li>
              <li>
                Email: restaurant21@gmail.com
              </li>
            </ul>
            <div className='img-div'>
              <img src={image} alt='map'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default contact
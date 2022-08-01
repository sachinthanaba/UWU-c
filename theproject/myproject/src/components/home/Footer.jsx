import React from 'react'

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid1'>
          <div className='box'>
            <img src='./assets/CrowdBird Logo.png' alt='' width="200" height="200"/>
            <p>An entrepreneur is an innovator or a creator who introduces something new to the firm or economy.</p>

            <div className="SocialIcon">
                    <i className='fab fa-facebook-f facebook'></i>
                    <i className= 'fab fa-instagram instagram'></i>
                    <i className= 'fab fa-twitter twitter'></i>
                    <i className= 'fab fa-youtube youtube'></i>
            </div>
          </div>

          <div className='box'>
            <h2>Quick Links</h2>
            <ul>
              <li>Home</li>
              <li>Advertiestments</li>
              <li>Our Past Entrepreneurs</li>
              <li>Why CrowdBird</li>
              <li>Contact Us</li>
              
            </ul>
          </div>

          <div className='box'>
            <h2>Recent Post</h2>
            <div className='text'>
              <p>Most Popular Entrepreneurs</p>
              <span> 28 June 2022</span>
            </div>
            <div className='text'>
              <p>What are the Skills of Entrepreneurs</p>
              <span> 13 Feb 2022</span>
            </div>
            <div className='text'>
              <p>Entrepreneurs roles in Sri Lanka</p>
              <span> 9 April 2022</span>
            </div>
          </div>

          <div className='box'>
            <h2>Get in Touch</h2>
            <p>"It’s fine to celebrate success but it is more important to heed the lessons of failure." - Bill Gates</p>
            <div className='icon'>
              <i class='fa-solid fa-location-dot'></i>
              <label>2nd Mile Post, Passara Road, Badulla</label>
            </div>
            <div className='icon'>
              <i class='fa fa-phone'></i>
              <label>Phone:+94 7654 327 89</label>
            </div>
            <div className='icon'>
              <i class='fa fa-envelope'></i>
              <label>Email:CrowdBird@gmail.com</label>
            </div>
          </div>
        </div>
        <div className='legal container'>
          <p>Copyright @2022. All rights reserved.</p>
          <label>
            Design & Developed by <span>Group No 01</span>
          </label>
        </div>
      </footer>
    </>
  )
}

export default Footer

import React from 'react'


const Home = () => {
  return (
    <>
      <selection className='home'>
        <div className='container flex'>
            <div className='left'>
                <div className='img'>
                    <img src='./assets/home.png' alt='' />

                </div>
            </div>
              <div classNAme='right topMargin'>
                <h1>
                    I AM AN <br/>
                    ENTREPRENEUR 
                </h1>
                
                <div className='SocialIcon'>
                    <i className='fab fa-facebook-f facebook'></i>
                    <i className= 'fab fa-instagram instagram'></i>
                    <i className= 'fab fa-twitter twitter'></i>
                    <i className= 'fab fa-youtube youtube'></i>
                    
                </div>
            <p>An entrepreneur is an innovator or a creator who introduces <br/> something new to the firm or economy. <br/> It can be a new method of production, a new product, a new<br/> source of material, a new market or any other similar innovation.</p>
                <button className="primary-btn">Login</button>
            </div>  

        </div>
        </selection>
    </>
  )
}

export default Home

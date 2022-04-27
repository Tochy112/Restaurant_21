import React from 'react'
import Container from 'react-bootstrap/Container'
import ViewButton from '../Button/Button';
import './about.css'

// import Pic1 from '../../images/aboutImage.jpg'
// import Pic2 from '../../images/image6.jpg'

const About = () => {
  return (
    // Image Container 
    <Container fluid className='Container'>
      <Container fluid className='imgContainer'>
        {/* Text & Button Container  */}
        <Container fluid className='text'>
          <p className='title'>
            Restaurant_21
          </p>

          <p className='subtitle'>
            The No.1 Intercontinental dish cuisine
          </p>

          {/* Button component  */}
            <a href="/products">
            <ViewButton name='View Our Menu'></ViewButton>
            </a>
      </Container>

      <Container fluid className='container2 '>
        <Container className='div1' id='img-div'>
          <Container className='div2'>
            {/* <img src={Pic1} alt='server'>
            </img> */}
          </Container>

          <Container className='div3'>
          {/* <img src={Pic2} alt ='dish'>
            </img> */}
          </Container>
        </Container>

        <Container className='div1'>
          <p className='Header'>ABOUT US</p>
          <Container className='div4'>
            At Restaurant_21, we dont just make nice dishes, we also make people happy. Restaurant_21 was built on the belief that dinner nights and dates should be a special event, a belief we cherish dearly. With more than 10 years of experience in making sumptuous dishes, we understand how to best serve our customers through tried and true service principles. We create food we are proud to serve and cherish customer satisfaction.
          </Container>

          {/* Button component  */}
            <a href="/contact">
            <ViewButton name='Contact Us' className='view'>
          </ViewButton>
            </a>

        </Container>
    </Container>

      </Container>
    </Container> 
  )
}

export default About

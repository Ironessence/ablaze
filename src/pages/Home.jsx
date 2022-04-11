import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import VideoHome from '../images/video1.mp4';
import Villa from '../images/villa.jpg';
import Image1 from '../images/image1.jpg';
import Tablou from '../images/tablouA.png';
import Image2 from '../images/image2.jpg';
import Image3 from '../images/image3.jpg';
import Image4 from '../images/image4.jpg';
import Image5 from '../images/image5.jpg';
import Image6 from '../images/image6.jpg';
import Image7 from '../images/image7.jpg';
import Image8 from '../images/image8.jpg';
import Boschet from '../images/boschet.png';

import CallIcon from '@mui/icons-material/Call';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



const Home = () => {
  ScrollTrigger.refresh();
     
    

     //REF FOR TEXT
     const textRef = useRef(null);

     //USE EFFECT FOR IMAGE IN SECTION1

     useEffect(() => {
      gsap.to('#section1-text', {
        y: 200,
        duration: 50,
        scrollTrigger: {
          trigger: '#section1-text',
          
          scrub: true,
          start: 'top 90%',
          end: 'top 0%'
        }
      });
      
     }, [])

         

     const sec1Img = useRef(null);

     useEffect(() => {
       gsap.to('#section1-image', {
         y: 100,
         duration: 20,
         scrollTrigger: {
           trigger: '#section1-image',
           
           scrub: true,
           start: 'top 55%',
           end: 'top 0%'
         }
       })
     })

     const sec2Image = useRef(null);

     useEffect(() => {
      gsap.to('#section2-image', {
        y: 0,
        duration: 20,
        scrollTrigger: {
          trigger: '#section2-image',
          
          scrub: true,
          start: 'center center',
          end: '100% 0%',
          pin: true,
        }
      })
    })

    const sec2Text = useRef(null);

    useEffect(() => {
      gsap.to('#section2-text', {
        y: 0,
        duration: 20,
        scrollTrigger: {
          trigger: '#section2-text',
          
          scrub: true,
          start: 'center 45%',
          end: '300% -10%',
          pin: true,
        }
      })
    })

    

     
  

  return (
    <>
    <ContainerVideo>
      
      <Video src={VideoHome} autoPlay muted loop/>
      <Cover>    
    </Cover>
    <HomeInfoWrapper>
    <HomeTitle>The homes of tomorrow... today.</HomeTitle>
    <HomeSubtitle>Why wait for the future?</HomeSubtitle>
    <HomeButton>
    <CallIcon /> Talk to us
    </HomeButton>
    </HomeInfoWrapper>
    </ContainerVideo>
    <Sec1 id='section1'>
      
    <Sec1Text1 ref={textRef} id='section1-text'>Ready for your new home?</Sec1Text1>
    <Sec1Img id='section1-image' ref={sec1Img} src={Boschet}/>
     
      

    </Sec1>
    <Sec2 id='section2'>
    <Sec2Image ref={sec2Image} id='section2-image' src={Image1}/>
    <Sec2Text
    ref={sec2Text} id='section2-text'
    >The 2020 Award-winning<br />Development Company</Sec2Text>
    
    
    
    </Sec2>
    <Sec3 id='section3'>
    <Sec3Image src={Image4} />
    <Sec3Title>ABOUT ABLAZE</Sec3Title>
    <Review1>Established in 1988, Ablaze aims to conquer the real-estate world. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis totam quisquam numquam impedit sapiente maiores repellendus similique ipsum autem, possimus labore quas asperiores, vero aliquam accusantium dolor, facilis perferendis rem.
    Id consequatur esse tempora cum vitae? Esse repudiandae reprehenderit perspiciatis ipsam fugiat dolorem illo quisquam laudantium! Asperiores culpa dolores, est temporibus fuga dolor animi et, repellendus natus, ipsam consectetur exercitationem.</Review1>
   
    <Sec3Image2 src={Image8} />
    </Sec3>
    
      
    
    
       
    
    
    </>
  )
}

const Review1 = styled(motion.h2)`
  color : white;
  font-size: clamp(0.5rem, 1.5rem, 4rem);
  position: absolute;
  top: 7%;
  
  width: 80%;
  padding: 0px 30px;
  
  font-weight: 300;
  letter-spacing: 1px;
  text-shadow: 1px 1px 1px black;
  
  text-align: justify;
`


const Sec3Title = styled(motion.h1)`
  color: white;
  font-size: 50px;
  position: absolute;
  top: 2%;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 400;
  letter-spacing: 1.5px;
  text-shadow: 2px 2px 2px black;
  margin-bottom: 15px;
`

const Sec3Image2 = styled(motion.img)`
  position: relative;
  width: 100%;
  height: 100vh;
  object-fit: cover;
`


const Sec3Image = styled(motion.img)`
  position: relative;
  width: 100%;
  height: 100vh;
  object-fit: cover;
`


const Sec3 = styled.div`
   width: 100%;
  height: 200vh;
  background: rgb(255,255,255);
background: linear-gradient(135deg, rgba(255,255,255,0.13285024154589375) 0%, rgba(76,255,252,1) 0%, rgba(16,182,255,1) 100%);
  display: flex;
  flex-direction: column;
  text-align: center;
  overflow: hidden;
  position: relative;
  align-items: center;
`

const Sec2Text = styled(motion.h1)`
  position: absolute;
  color: white;
  font-size: clamp(36px, 7vw, 45px);
  text-shadow: 2px 2px 2px black;
  letter-spacing: 1px;
  font-weight: 200;
  top: 5%;
  left: 5%;
  text-align: center;
  
`



const Sec2Image = styled(motion.img)`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  
`






const Sec2 = styled.div`
  width: 100%;
  height: 100vh;
  background: rgb(255,255,255);
background: linear-gradient(135deg, rgba(255,255,255,0.13285024154589375) 0%, rgba(76,255,252,1) 0%, rgba(16,182,255,1) 100%);
  display: flex;
  flex-direction: column;
  text-align: center;
  overflow: hidden;
  position: relative;

`

const Sec1Text1 = styled.h1`
  font-size: clamp(2rem, 10vw, 4rem);
  color: white;
  letter-spacing: 3px;
  text-shadow: 2px 2px 2px black;
  position: absolute;
  top: 15%;
  left: 5%;
  font-weight: 300;
  

`


const Sec1Img = styled(motion.img)`
  width: clamp(350px, 40%, 700px);
  height: auto;
`


const Sec1 = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${Villa}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  
  
  
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;
  overflow: hidden;
`



const ContainerVideo = styled.div`
  
  
`

const Video = styled.video`
    position: relative;
    object-fit: cover;
    width: 100%;
    height: 900px;
    object-fit: cover;
    min-width: 80%;
    min-height: 80%;
        
`

const Cover = styled.div`
  position: absolute;
  background-color: #00000027;
  z-index: 3;
  top: 70px;
  left: 0;
  width: 100%;
  height: 94.3vh;
`

const HomeInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  top: 35%;
  left: 50%;
  transform: translateX(-50%);
  
  position: absolute;
  z-index: 10;
  
  
`

const HomeTitle = styled.h1`
  position: relative;
  color: white;
  z-index: 5;
  font-size: 40px;
  letter-spacing: 1.5px;
  margin-bottom: 20px;
  font-weight: 300;
     
  
`

const HomeSubtitle = styled.h2`
  position: relative;
  color: white;
  z-index: 5;
  letter-spacing: 2px;
  margin-bottom: 20px;
  
  font-weight: 200;
  
`

const HomeButton = styled.button`
  position: relative;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  background: #ffffff9d;
  border: none;
  border-radius: 12px;
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: all 0.4s ease-in;
  &:hover {
    background-color: var(--color-4);
    transform: scale(1.1)
  }
  
`

export default Home
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import VideoHome from '../images/video1.mp4';
import CallIcon from '@mui/icons-material/Call';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';

const Home = () => {
    //TOGGLE CLICK STATE
    const [windowClicked, setWindowClicked] = useState(false);
    


  //GET THE SCROLL POSITION

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY / 15);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(scrollY);

  

  //-----

  //ON CLICK FOR CARDS
  const toggleWindowClick = () => {
    setWindowClicked(!windowClicked);
    
  }

  

  //-----

  

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
    <Section1>
      <MainImg clicked={windowClicked} src='https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
      <WindowImg
      initial={{opacity: 0}}
      whileHover={{
        opacity: 0.6,
        filter: 'grayscale(90%) brightness(20%) invert(1)'
        
      }}
      onClick={toggleWindowClick}
      src='https://i.ibb.co/18hykQf/house.png'/>
    {windowClicked && 
      <Card 
      initial={{opacity: 0, transform: 'translate(-50%, -20%) scale(0.3)'}}
      animate={{opacity: 1, transform: 'translate(-50%, -20%) scale(1)'}}
      transition={{duration: 1, type: 'spring',}}
      >
      <CardIcon>
      <CloseIcon onClick={toggleWindowClick}/>
      </CardIcon>
      <CardWindowImg src='https://i.ibb.co/18hykQf/house.png'/>
      <CardText>ELEGANT DESIGN</CardText>
      <CardText>DOUBLE REINFORCED WOOD</CardText>
      <CardText>TRIPLE CAMERA B50 BUILD</CardText>
      
      </Card>}

      {scrollY > 26 & scrollY < 90 && <TextSection1 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 2, type: 'spring'}}
      value={scrollY}>READY TO MOVE IN?</TextSection1>}

      

    </Section1>
    
    
       
    
    
    </>
  )
}

const TextSection1 = styled(motion.h1)`
    position: absolute;
    right: -450px;
    top: 250px;
    font-size: 75px;
    color: white;
    text-shadow: 2px 4px 4px darkgray;
    
    transform: ${props => props.value && `translateX(-${props.value * 1}%)`}
`


const Section1 = styled(motion.div)`
    position: relative;
    width: 100%;
    height: 100vh;
    
`

const MainImg = styled(motion.img)`
    width: 100%;
    height: auto;
    filter: ${props => props.clicked ? 'brightness(50%)' : 'none'};
    transition: 0.4s ease;
    
   
`

const WindowImg = styled(motion.img)`
    position: absolute;
    transform: translate(-99%, 59%);
    z-index: 999;
    width: 55%;
    cursor: pointer;
`

const Card = styled(motion.div)`
    position: absolute;
    z-index: 999;
    width: 400px;
    height: 500px;
    background-color: #ffffffd0;
    border-radius: 25px;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -20%);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    

`

const CardWindowImg = styled(motion.img)`
  width: 60%;
  filter: brightness(200%);
  margin-top: 20px;
  
`

const CardIcon = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
  cursor: pointer;
  transform: scale(1.5);
`

const CardText = styled(motion.h1)`
  color: black;
  font-weight: 300;
  font-size: 25px;
  margin-top: 20px;
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
     
  
`

const HomeSubtitle = styled.h2`
  position: relative;
  color: white;
  z-index: 5;
  letter-spacing: 1px;
  margin-bottom: 20px;
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
    background-color: white;
    transform: scale(1.1)
  }
  
`










//NEED INTERSECTION OBSERVER STUFF



export default Home
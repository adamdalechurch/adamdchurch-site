import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import face from '../assets/img/face.png';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(150 - Math.random() * 100);
  const [index, setIndex] = useState(1);

  const [mobile, setMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(max-width: 768px)")
    .addEventListener('change', e => setMobile( e.matches ));
  }, []);

  const toRotate = [ "Web Developer", "Web Designer", "Team Leader" ];
  const period = 2000;

  // useEffect(() => {
  //   let ticker = setInterval(() => {
  //     tick();
  //   }, delta);

  //   return () => { clearInterval(ticker) };
  // }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
        {mobile && 
          <>
           <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""} align="center">
                  <h1>{`Hi! I'm Adam`}</h1>
                </div>}
              </TrackVisibility>
            </Col>
           <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <img src={face} alt="Header Img"/>
                  </div>}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <p>I make websites, apps, API's, and anything needed to get the job done. I am self-taught, and a quick learner. Please feel free to view the rest of my website, my github page, or send me a message.</p>
                    <a href='#connect'>Let???s Connect <ArrowRightCircle size={25} /></a>
                </div>}
              </TrackVisibility>
            </Col>
          </>
          }
          
          {!mobile &&
          <>
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1>{`Hi! I'm Adam`}</h1>
                  <p>I make websites, apps, API's, and anything needed to get the job done. I am self-taught, and a quick learner. Please feel free to view the rest of my website, my github page, or send me a message.</p>
                    <a href='#connect'>Let???s Connect <ArrowRightCircle size={25} /></a>
                </div>}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <img src={face} alt="Header Img"/>
                  </div>}
              </TrackVisibility>
            </Col>
          </> 
          
          }
        </Row>
      </Container>
    </section>
  )
}

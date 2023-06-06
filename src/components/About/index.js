import { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJava,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const idTimeOut = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(idTimeOut)
  }, [])

  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
            idx={15}
          />
        </h1>
        <p>
          I'm a caffeine-fueled coding aficionado with a passion for summiting
          the steep learning curve of software development and scaling the IT
          Professional heights, all while sipping on a steaming hot cup of
          coffee beans or Tea (Teh).
        </p>
        <p>
          When I'm not lost in lines of code, you can find me wandering the
          wilderness, exploring the rugged terrain of mountains, taking
          photos/videos of god's creations and pushing myself to new adventures
          - both in tech and in nature.
        </p>
        <p>
          An IT Professional with experience working in IT, Banking and
          education sectors. Proven knowledge in Software Development, IT
          management and Multimedia. An adaptable and collaborative individual
          that is driven to skill up and be a key player in the ever-evolving
          technology sector.
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face1">
            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faJava} color="#EC4D28" />
          </div>
        </div>
      </div>
    </div>
    <Loader type="pacman"/>
    </>
  )
}

export default About

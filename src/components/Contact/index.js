import { useEffect, useRef, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const ref = useRef()

  useEffect(() => {
    const idTimeOut = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(idTimeOut)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_0ruvwpc',
        'template_g9g7imw',
        ref.current,
        'IbFbxxozZeJSMP_OM'
      )
      .then(
        () => {
          alert('Message sent!')
          window.location.reload(false)
        },
        () => {
          alert('Oops! Failed to send message, Please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Thanks for dropping by to view my portfolio website and checking out
            some of my works. <br />
            Feel free to drop me an email for any requests or questions. Let's
            chat soon!
          </p>
          <div className="contact-form">
            <form ref={ref} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Elvinardy,
          <br />
          Singapre,
          <br />
          Jurong West <br />
          <span>Elvinardy_darwin@outlook.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[1.350995, 103.720743]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[1.350995, 103.720743]}>
              <Popup>Holla if you're somewhere around this area!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact

import React from 'react'
import './style/Footer.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Spacer } from '@nextui-org/react';
//import personal_website from '../../assets/personal_website_logo/nerd.png'

const Footer = () => {
  return (
    <>
      <Container>
        <Spacer />
        <Row className="contact">
          <Col>
            <h5>Contacts</h5>
          </Col>
        </Row>
        <Row>
          <Col className='linkedin' sm>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
              <i style={{ fontSize: '2rem' }} className='pi pi-linkedin'></i>
            </a>
          </Col>
          <Col className='github' sm>
            <a rel="noreferrer" target="_blank" href="https://github.com/Valentina-Maraio?tab=repositories">
              <i style={{ fontSize: '2rem' }} className='pi pi-github'></i>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Footer
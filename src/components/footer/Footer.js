import React from 'react'
import './style/Footer.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import personal_website from '../../assets/personal_website_logo/nerd.png'

const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <Row>
          <Row>
            <Col className='project' sm={6}>
              <h4>Final Project for Start2Impact</h4>
            </Col>
            <Col className='valentina' sm={6}>
              <h6>Valentina Maraio</h6>
            </Col>
            <Col className='linkedin' sm>
              <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
                <i style={{ fontSize: '2rem' }} className='pi pi-linkedin'></i>
              </a>
              <Row>
                <Col>
                  <span>LinkedIn</span>
                </Col>
              </Row>
            </Col>
            <Col className='github' sm>
              <a rel="noreferrer" target="_blank" href="https://github.com/Valentina-Maraio?tab=repositories">
                <i style={{ fontSize: '2rem' }} className='pi pi-github'></i>
              </a>
              <Row>
                <Col>
                  <span>GitHub</span>
                </Col>
              </Row>
            </Col>
            <Col className='personal_website' sm>
              <a rel="noreferrer" target="_blank" href='https://www.youtube.com/watch?v=fk4BbF7B29w&list=RDfk4BbF7B29w&start_radio=1'>
                personal_website
              </a>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
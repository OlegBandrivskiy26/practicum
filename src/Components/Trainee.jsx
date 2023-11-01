import React from 'react'
import { Container, Row, Col, Card, Button, Form} from 'react-bootstrap'
import "./Resume.css"

const Trainee = () => {
  return (
    <Container>
        
        <Form>
            <Form.Group className="mb-3 form__group" controlId="formBasicEmail">
                <Form.Control style={{marginTop: "30px",marginLeft: "96px", width: "950px", height: "4rem", fontSize: "32px", fontWeight: "400", border: "3px solid #000"}} className='input' type="email" placeholder="Пошук" />
                <button className="search"><div className="search__img"></div></button>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <   Form.Control style={{ marginTop: "30px",marginLeft: "96px" ,width: "1100px", height: "4rem", fontSize: "32px", fontWeight: "400", border: "3px solid #000"}}  className='input' type="password" placeholder="Фільтрація" />
            </Form.Group>
        </Form>

        <Row style={{marginLeft: "5rem"}}>
            <Col>
                    <Card style={{ width: '18rem'}} className='mt-5'>
                        <Card.Body style={{border: '3px solid #000', borderRadius: '0.7rem'}}>
                            <Card.Title style={{paddingRight: "6.8rem"}}>Ім’я Прізвище</Card.Title>
                            <Card.Subtitle style={{paddingRight: "5rem"}} className="mb-5 text-muted">Frontend-розробник</Card.Subtitle>
                            <Button variant="primary" style={{backgroundColor: "#EB5B25", border: "none", marginRight: "10.2rem"}}>Більше</Button>
                            <Card.Subtitle style={{paddingRight: "12.2rem"}} className="text-muted mt-2">Дата</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem'}} className='mt-5'>
                        <Card.Body style={{border: '3px solid #000', borderRadius: '0.7rem'}}>
                            <Card.Title style={{paddingRight: "6.8rem"}}>Ім’я Прізвище</Card.Title>
                            <Card.Subtitle style={{paddingRight: "5rem"}} className="mb-5 text-muted">Frontend-розробник</Card.Subtitle>
                            <Button variant="primary" style={{backgroundColor: "#EB5B25", border: "none", marginRight: "10.2rem"}}>Більше</Button>
                            <Card.Subtitle style={{paddingRight: "12.2rem"}} className="text-muted mt-2">Дата</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem'}} className='mt-5'>
                        <Card.Body style={{border: '3px solid #000', borderRadius: '0.7rem'}}>
                            <Card.Title style={{paddingRight: "6.8rem"}}>Ім’я Прізвище</Card.Title>
                            <Card.Subtitle style={{paddingRight: "5rem"}} className="mb-5 text-muted">Frontend-розробник</Card.Subtitle>
                            <Button variant="primary" style={{backgroundColor: "#EB5B25", border: "none", marginRight: "10.2rem"}}>Більше</Button>
                            <Card.Subtitle style={{paddingRight: "12.2rem"}} className="text-muted mt-2">Дата</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row style={{marginLeft: "5rem"}}>
            <Col>
                    <Card style={{ width: '18rem'}} className='mt-5'>
                        <Card.Body style={{border: '3px solid #000', borderRadius: '0.7rem'}}>
                            <Card.Title style={{paddingRight: "6.8rem"}}>Ім’я Прізвище</Card.Title>
                            <Card.Subtitle style={{paddingRight: "5rem"}} className="mb-5 text-muted">Frontend-розробник</Card.Subtitle>
                            <Button variant="primary" style={{backgroundColor: "#EB5B25", border: "none", marginRight: "10.2rem"}}>Більше</Button>
                            <Card.Subtitle style={{paddingRight: "12.2rem"}} className="text-muted mt-2">Дата</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem'}} className='mt-5'>
                        <Card.Body style={{border: '3px solid #000', borderRadius: '0.7rem'}}>
                            <Card.Title style={{paddingRight: "6.8rem"}}>Ім’я Прізвище</Card.Title>
                            <Card.Subtitle style={{paddingRight: "5rem"}} className="mb-5 text-muted">Frontend-розробник</Card.Subtitle>
                            <Button variant="primary" style={{backgroundColor: "#EB5B25", border: "none", marginRight: "10.2rem"}}>Більше</Button>
                            <Card.Subtitle style={{paddingRight: "12.2rem"}} className="text-muted mt-2">Дата</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem'}} className='mt-5'>
                        <Card.Body style={{border: '3px solid #000', borderRadius: '0.7rem'}}>
                            <Card.Title style={{paddingRight: "6.8rem"}}>Ім’я Прізвище</Card.Title>
                            <Card.Subtitle style={{paddingRight: "5rem"}} className="mb-5 text-muted">Frontend-розробник</Card.Subtitle>
                            <Button variant="primary" style={{backgroundColor: "#EB5B25", border: "none", marginRight: "10.2rem"}}>Більше</Button>
                            <Card.Subtitle style={{paddingRight: "12.2rem"}} className="text-muted mt-2">Дата</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <div className="carusel__grp">
                <div className="arrow__button">
                    <div className="arrow__left"></div>
                </div>
                <div className="button__carusel">1</div>
                <div className="button__carusel">2</div>
                <div className="arrow__button">
                    <div className="arrow__right"></div>
                </div>
            </div>
    </Container>
  )
}

export default Trainee

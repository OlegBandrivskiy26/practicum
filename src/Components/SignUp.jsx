import React from 'react'
import "../App.css"

import { Form, Button } from 'react-bootstrap'

const Registration = () => {
  return (
    <>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{ marginTop: "30px", fontSize: "40px", fontWeight: "600", lineHeight: "48px"}}>Створіть акаунт</Form.Label>
                <Form.Control style={{ marginTop: "30px", width: "50rem", height: "4rem", fontSize: "32px", fontWeight: "400", border: "3px solid #000"}}  className='input' type="text" placeholder="Name Surname" />
                </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control style={{marginTop: "30px", width: "50rem", height: "4rem", fontSize: "32px", fontWeight: "400", border: "3px solid #000"}} className='input' type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control style={{ marginTop: "30px", width: "50rem", height: "4rem", fontSize: "32px", fontWeight: "400", border: "3px solid #000"}}  className='input' type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group style={{display: "flex", alignItems:"center", justifyContent: "center"}}>
                <input type="checkbox" style={{ marginRight: "10px",width:"52px", height: "52px", border:"3px solid #000"}} />
                <Form.Label style={{ marginRight: "30px",fontSize: "32px", fontWeight: "400"}}>Стажер</Form.Label>
                <input type="checkbox" style={{ marginRight: "10px", width:"52px", height: "52px", border:"3px solid #000"}} />
                <Form.Label  style={{fontSize: "32px", fontWeight: "400"}}>Роботодавець</Form.Label>
            </Form.Group>
            <Button style={{ marginTop: "30px", backgroundColor: "#EB5B25", width: "458px", height: "83px", fontWeight: "600", fontSize: "32px"}} variant="primary" type="submit">
                Зареєструватись
            </Button>
        </Form>
    </>
  )
}

export default Registration

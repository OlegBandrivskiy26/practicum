import React from 'react'
import "../App.css"

import { Form, Button } from 'react-bootstrap'

const Registration = () => {
  return (
    <>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{ marginTop: "30px", fontSize: "32px", fontWeight: "600"}}>Створіть акаунт</Form.Label>
                <Form.Control style={{marginTop: "30px", width: "23rem", height: "3rem", fontSize: "24px", fontWeight: "400", border: "2px solid #000"}} className='input' type="text" placeholder="Name Surname" />
                </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control style={{marginTop: "30px", width: "23rem", height: "3rem", fontSize: "24px", fontWeight: "400", border: "2px solid #000"}} className='input' type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control style={{marginTop: "30px", width: "23rem", height: "3rem", fontSize: "24px", fontWeight: "400", border: "2px solid #000"}}  className='input' type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group style={{display: "flex", alignItems:"center", justifyContent: "center"}}>
                <input type="checkbox" style={{ marginRight: "10px",width:"22px", height: "22px", border:"3px solid #000"}} />
                <Form.Label style={{ marginRight: "30px",marginTop: "8px",fontSize: "14px", fontWeight: "400"}}>Стажер</Form.Label>
                <input type="checkbox" style={{ marginRight: "10px", width:"22px", height: "22px", border:"3px solid #000"}} />
                <Form.Label style={{marginTop: "8px",fontSize: "14px", fontWeight: "400"}}>Роботодавець</Form.Label>
            </Form.Group>
            <Button style={{ marginTop: "30px", backgroundColor: "#EB5B25", width: "258px", height: "43px", fontWeight: "600", fontSize: "20px"}} variant="primary" type="submit">
                Зареєструватись
            </Button>
        </Form>
    </>
  )
}

export default Registration

import React from 'react'
import "../App.css"

import { Form, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Registration = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{ marginTop: "30px", fontSize: "40px", fontWeight: "600", lineHeight: "48px"}}>Увійдіть на сайт</Form.Label>
        <Form.Control style={{marginTop: "30px", width: "50rem", height: "4rem", fontSize: "32px", fontWeight: "400", border: "3px solid #000"}} className='input' type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control style={{ marginTop: "30px", width: "50rem", height: "4rem", fontSize: "32px", fontWeight: "400", border: "3px solid #000"}}  className='input' type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group>
        <Button style={{ marginTop: "30px", backgroundColor: "#EB5B25", width: "458px", height: "83px", fontWeight: "600", fontSize: "32px"}} variant="primary" type="submit">
            Увійти
        </Button>
        
      </Form.Group>
      <Link className='link' to="/signUp">Sign Up</Link>
    </Form>
  )
}

export default Registration

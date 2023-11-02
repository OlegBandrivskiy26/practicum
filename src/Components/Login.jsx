import React from 'react'
import "../App.css"

import { Form, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Registration = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{ marginTop: "30px", fontSize: "32px", fontWeight: "600"}}>Увійдіть на сайт</Form.Label>
        <Form.Control style={{marginTop: "30px", width: "23rem", height: "3rem", fontSize: "24px", fontWeight: "400", border: "2px solid #000"}} className='input' type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control style={{marginTop: "30px", width: "23rem", height: "3rem", fontSize: "24px", fontWeight: "400", border: "2px solid #000"}}  className='input' type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group>
        <Button style={{ marginTop: "30px", backgroundColor: "#EB5B25", width: "258px", height: "43px", fontWeight: "600", fontSize: "20px"}} variant="primary" type="submit">
            Увійти
        </Button>
        
      </Form.Group>
      <Link className='link' to="/signUp">Sign Up</Link>
    </Form>
  )
}

export default Registration

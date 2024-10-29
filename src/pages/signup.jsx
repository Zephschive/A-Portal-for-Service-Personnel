
import React, {useState, useEffect} from 'react'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import CircularProgress from '@mui/material/CircularProgress';
import { Link,useNavigate } from 'react-router-dom'
import { FormLabel } from '@mui/material';

const Signup = () => {
  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)

  const signin = async (e)=>{}

  



return <section className='Background'>
  
  <Container>
    <Row>
    <Col lg='6' className='m-auto text-center'>
    <h1 className='display-3 text-white pb-5 mt-5'>
      Signup
    </h1>

    <Form className='auth_form' onSubmit={signin}>

    <FormLabel className="text-white d-flex justify-content-start pb-2">Name</FormLabel>
                  <FormGroup className='form_group'>
                        <input type="email" name='' id='' placeholder='Enter your email'  value={email} onChange={e=> setEmail(e.target.value)}/>
                  </FormGroup>


                  <FormLabel className="text-white d-flex justify-content-start pb-2">Email</FormLabel>
                  <FormGroup className='form_group'>
                        <input type="email" name='' id='' placeholder='Enter your email'  value={email} onChange={e=> setEmail(e.target.value)}/>
                  </FormGroup>

                  <FormLabel className='text-white d-flex justify-content-start pb-2' >Password</FormLabel>
                  <FormGroup className='form_group'>
                        <input type="password" name='' id='' placeholder='Enter your password' value={password} onChange={e=> setPassword(e.target.value)} />
                  </FormGroup>

                  <FormLabel className='text-white d-flex justify-content-start pb-2' >Confirm Password</FormLabel>
                  <FormGroup className='form_group'>
                        <input type="password" name='' id='' placeholder='Enter your password' value={password} onChange={e=> setPassword(e.target.value)} />
                  </FormGroup>

                  <button className="buy_btn auth_btn">{loading ? 'Loading....' : 'Login'}</button>
                  { loading ? <div className='mt-3'><CircularProgress size="30px"/></div> : ""}
                  <p>Don't have an account? <Link to='/signup'>Create an account </Link></p>

              </Form>
    

    </Col>
   
   </Row>
  </Container>
  
  
</section>
}

export default Signup
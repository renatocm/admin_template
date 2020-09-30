import React from 'react';
import { Link } from 'react-router-dom';
import useClass from './../hooks/add-class-body'
import {
    Container,
    Col,
    Row,
    Form,
    Card,
    CardBody,
    Input,
    InputGroup,
    Button
} from 'reactstrap';

const Login = (props) => {
    useClass('bg-blue')
    const handleLogin = () => {
        console.log('Make http request here...');
    }
    return (
        <div className='flex-row align-items-center'>
            <Container>
                <Row className="mt-5 justify-content-center">
                    <Col md='6'>
                        <Card>
                            <CardBody>
                                <Form>
                                    <h1>Login</h1>
                                    <p>
                                        Enter e-mail and password to access. New? <Link to='/register'>Sign-up</Link>
                                    </p>
                                    <InputGroup className='mb-3'>
                                        <Input type='email' placeholder='E-mail' />
                                    </InputGroup>
                                    <InputGroup className='mb-3'>
                                        <Input type='password' placeholder='Senha' />
                                    </InputGroup>
                                    <InputGroup className='mb-3'>
                                        <Button outline color='primary' onClick={handleLogin}>Go!</Button>
                                    </InputGroup>
                                    <InputGroup>
                                        <Link to="forgot">
                                            <Button color='link' onClick={handleLogin}>
                                                Forgot Password?
                                            </Button>
                                        </Link>
                                    </InputGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login;
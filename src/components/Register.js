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

const Register = (props) => {
    useClass('bg-blue')
    const handleCreate = () => {
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
                                    <h1>New account</h1>
                                    <p>
                                        Enter name, e-mail and password to create account.  Already registered <Link to='/login'>Login</Link>
                                    </p>
                                    <InputGroup className='mb-3'>
                                        <Input type='text' placeholder='Name' />
                                    </InputGroup>
                                    <InputGroup className='mb-3'>
                                        <Input type='email' placeholder='E-mail' />
                                    </InputGroup>
                                    <InputGroup className='mb-3'>
                                        <Input type='password' placeholder='Senha' />
                                    </InputGroup>
                                    <InputGroup className='mb-3'>
                                        <Button outline color='primary' onClick={handleCreate}>Create</Button>
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

export default Register;
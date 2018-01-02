import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class LoginComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6 offset-3">
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Username</Label>
                            <Input type="username" name="username" id="username" placeholder="username" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="password" placeholder="password" />
                        </FormGroup>
                        <Button>Sign in</Button>
                    </Form>
                </div>
            </div>
        );
    }
}

LoginComponent.defaultProps = {
};


export default LoginComponent;

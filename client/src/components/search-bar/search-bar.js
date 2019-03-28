import React from 'react';
import { InputGroup, InputGroupAddon, Button } from 'reactstrap';
import { Formik, Form, Field } from 'formik';

const SearchBar = ({handleSubmit}) => (
    <Formik initialValues={{ text: '' }} onSubmit={handleSubmit}>
        <Form>    
            <InputGroup>
                <Field type="text" name="text" className="form-control" placeholder='Search by tag'/>
                <InputGroupAddon addonType="prepend">
                    <Button type='submit'>Search...</Button>
                </InputGroupAddon>
            </InputGroup>   
        </Form>
    </Formik>
);

export default SearchBar;
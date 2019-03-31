import React, { Component } from 'react';
import { connect } from 'react-redux';

import UpserUserForm from '../components/upsert-user-form';
import { CreateUserValidationSchema } from '../utilities';
import { getUserById, updateUser } from '../actions';

class UpdateUserPage extends Component { 
    
    componentDidMount() {
        const id = this.props.match.params.id

        this.props.getUserById(id);
    }

    handleSubmit = (data) => {
        this.props.updateUser(data);
    }

    render() {
        const { user } = this.props;
    
        return  (
           <React.Fragment>
            {user && 
                <UpserUserForm
                    isUpdate
                    title='Update User'
                    handleSubmit={this.handleSubmit}
                    validationSchema={CreateUserValidationSchema}
                    initialValues={user} 
                /> 
            }
           </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    user: state.usersReducer.selectedUser
});

const mapDispatchToProps = dispatch => ({
    getUserById: (id) => dispatch(getUserById(id)),
    updateUser: (data) => dispatch(updateUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUserPage);
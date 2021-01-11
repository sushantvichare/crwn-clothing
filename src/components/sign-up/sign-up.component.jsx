import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {connect} from 'react-redux';
import {signUpStart} from '../../redux/user/user-actions'

import './sign-up.styles.scss';



class SignUp extends React.Component{
    constructor(){
    super();
    
    
    this.state = {
        displayName:"",
        email:"",
        password:"",
        confirmPassword:"",

        };
    }

    handleSubmit=async event=>{
        event.preventDefault();

        const{signUpStart}=this.props;

        const{displayName,email,password,confirmPassword}=this.state;

        if(password!==confirmPassword){
            alert("password don't match");
            return;
        }


        signUpStart({displayName,email,password})
  

    }

    handleChange=(event)=>{
        const{value,name}=event.target;
        
        this.setState({[name]:value})
      }


render(){
    
    
    return(
        <div className='sign-up'>

        <h2 className='title'>I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
        <FormInput type='text' name='displayName' value={this.state.displayName} handleChange={this.handleChange}
        label="Name" required></FormInput>
        <FormInput type='email' name='email' value={this.state.email} handleChange={this.handleChange}
        label="Email" required></FormInput>
        <FormInput type='password' name='password' value={this.state.password} handleChange={this.handleChange}
        label="Password" required></FormInput>
        <FormInput type='password' name='confirmPassword' value={this.state.confirmPassword} handleChange={this.handleChange}
        label="Confirm Password" required></FormInput>
        
        <CustomButton type='submit'>SIGN UP</CustomButton>

        </form>
    </div>
   )}
}

const mapDispatchToProps=dispatch=>({
    signUpStart:(userCredentials)=>dispatch(signUpStart(userCredentials))
})

export default connect(null,mapDispatchToProps)(SignUp);
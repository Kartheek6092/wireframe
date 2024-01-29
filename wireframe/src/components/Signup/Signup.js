import { Link } from "react-router-dom/cjs/react-router-dom.min";

import { FaArrowRightLong } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa";

import Header from '../Header/Header'

import {
    LoginContainer,
    BodyContainer,
    LoginForm,
    FormTitle,
    InputField,
    CustomInput,
    // CustomLabel,
    ContinueBtn
} from './StyledComponents'


export default function Signup(){

    const sendMail = async(e) =>{
        e.preventDefault()
        // console.log('otp send')
        const emailId = {
            email: "kartheek6092@gmail.com",
        }
        const url = `http://localhost:5000/api/send-otp`
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(emailId)
        }
        const response = await fetch(url, options)
        console.log(response)
    }
    
    return(
        <LoginContainer>
            <Header />
            <BodyContainer>
                <LoginForm onSubmit={sendMail}>
                    <FaRocket size={25} style={{alignSelf: 'center'}}/>
                    <FormTitle>Create Your Form</FormTitle>
                    
                    <InputField>
                        <CustomInput type='text' placeholder='Enter Your Name...' />
                    </InputField>
                    <InputField>
                        <CustomInput type='email' placeholder='Enter Email ID...' />
                    </InputField>
                    
                    <Link to='/verify' style={{width: '85%', alignSelf: 'center', textDecoration: 'none'}}> 
                        <ContinueBtn type='submit' >Continue <FaArrowRightLong size={15} /> </ContinueBtn>
                    </Link>
                </LoginForm>
            </BodyContainer>
        </LoginContainer>
    )
}
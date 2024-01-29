import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import { FaArrowRightLong } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa";
import { RiVerifiedBadgeLine } from "react-icons/ri";

import Header from '../Header/Header'

import {
    VerificationContainer,
    BodyContainer,
    LoginForm,
    FormTitle,
    InputField,
    CustomInput,
    ContinueBtn,
    CustomPara
} from './StyledComponents'

export default function Verify(){
    const [isVerfied, setVerified] = useState(false)
    
    const validateOtp = () => {
        setVerified(true)
    }
    
    const renderSuccess = () => (
        <>
            <RiVerifiedBadgeLine size={35} />
            <FormTitle style={{width: '75%'}}>Account Created Succesfully</FormTitle>
            
            <Link to='/all-posts'  style={{width: '100%', display: 'flex', justifyContent: 'center', textDecoration: 'none'}} > <ContinueBtn type='button' onClick={validateOtp} >Create Your First Post <FaArrowRightLong size={15} /> </ContinueBtn></Link>
        </>
    )

    const renderForm = () =>(
        <>
            <FaRocket size={25} style={{alignSelf: 'center'}}/>
            <FormTitle>Create Your Form</FormTitle>
                    
            <CustomPara>Please verify your email ID to continue.We have sent an OTP to you email address</CustomPara>
            <CustomPara></CustomPara>
                    
            <InputField>
                <CustomInput type='text' placeholder='Enter OTP...' />
            </InputField>
                    
            <ContinueBtn type='button' onClick={validateOtp} >Continue <FaArrowRightLong size={15} /> </ContinueBtn>
        </>
    )

    return(
        <VerificationContainer>
            <Header />
            <BodyContainer>
                <LoginForm>
                    {isVerfied ? renderSuccess() : renderForm()}
                </LoginForm>
            </BodyContainer>
        </VerificationContainer>
    )
}
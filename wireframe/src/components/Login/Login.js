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
    CustomLabel,
    ContinueBtn
} from './StyledComponents'


export default function Login(){
    return(
        <LoginContainer>
            <Header />
            <BodyContainer>
                <LoginForm>
                    <FaRocket size={25} style={{alignSelf: 'center'}}/>
                    <FormTitle>Create Your Form</FormTitle>
                    
                    <InputField>
                        <CustomInput type='text' placeholder='Enter Your Name...' />
                    </InputField>
                    <InputField>
                        <CustomInput type='text' placeholder='Enter Email ID...' />
                    </InputField>
                    
                    <ContinueBtn type='button'>Continue <FaArrowRightLong size={15} /> </ContinueBtn>
                </LoginForm>
            </BodyContainer>
        </LoginContainer>
    )
}
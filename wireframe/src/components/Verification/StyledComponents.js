import styled from "styled-components";

export const VerificationContainer = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #000000;
    color: #fff;
    overflow: hidden;
    box-sizing: border-box;
`

export const BodyContainer = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const LoginForm = styled.form `
    width: 25vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #252626;
    padding: 25px 15px;
    border-radius: 15px;
    row-gap: 15px;
`

export const FormTitle = styled.h2 `
    margin: 0px;
    text-align: center;
`

export const CustomInput = styled.input `
    padding: 15px;
    border: 1px solid #FFFFFF;
    border-radius: 30px;
    background-color: inherit;
    width: 85%;
    color: #FFFFFF;
`

export const InputField = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
`

export const ContinueBtn = styled.button `
    width: 90%;
    align-self: center;
    padding: 15px;
    border: none;
    border-radius: 30px;
    background-color: #474747;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 10px;
    font-size: 15px;
`

export const CustomPara = styled.p `
    color: #898c8a;
    margin: 0px;
    padding: 0px;
    text-align: center;
    width: 79%;
`
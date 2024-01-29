import styled from "styled-components";

export const GreetingContainer = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #000;
    color: #fff;
`

export const BodyContainer = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
`

export const GreettHeading = styled.h1 `
    font-size: 55px;
    width: 55%;
    text-align: center;
`

export const Para = styled.p `
    font-size: 18px;
    width: 65%;
`

export const ContinueBtn = styled.button `
    width: 200px;
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
    margin: auto;
    
    &:hover {
        box-shadow: 0px 0px 16px 8px #D9D9D9;
    }
`

export const CustomPara = styled.p `
    border: 1px solid #FFFFFF;
    border-radius: 30px;
    display: flex;
    align-items: center;
    padding: 10px;
 `
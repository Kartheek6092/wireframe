import styled from "styled-components";

export const HomeContainer = styled.div `
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
    /* align-items: center; */
    justify-content: center;
`

export const ContentContainer = styled.div `
    width: 80%;
    height: 80%;
    background-color: transparent;
    display: flex;
    
`

export const LeftNav = styled.div `
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
`

export const NavOptionsContainer = styled.div `
    display: flex;
    flex-direction: column;
`

export const PostsContainer = styled.div `
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: #1a1919;
    border-radius: 15px;
    overflow-y: auto;
    
    &::-webkit-scrollbar{
        width: 5px;
    }
`

export const NavOptionBtn = styled.button `
    width: 200px;
    background-color: ${(props) => props.active ? '#706d6d' : 'inherit'};
    color:  ${(props) => props.active ? '#FFFFFF' : '#807d7d'};
    border-radius: 8px;
    padding: 10px 15px;
    outline: none;
    border-style: none;
    font-size: 20px;
    text-align: left;
`

export const CreateBtn = styled(NavOptionBtn) `
    border: 1px solid #807d7d;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const CustomUl = styled.ul `
    padding-left: 0px;
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    width: 100%;
    height: fit-content;
    list-style: none;
`

export const CustomLi = styled.li `
    /* width: 100%; */
    padding: 10px;
    background-color: #212020;
    border-radius: 8px;
    color: #807d7d;
`

export const CustomHeading = styled.h3 `
    color: #FFFFFF;
`

export const PostTitle = styled.h3 `
`

export const CountsPara  = styled.p ``
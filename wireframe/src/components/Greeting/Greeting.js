import { Link } from 'react-router-dom/cjs/react-router-dom.min'


import { FaArrowRightLong } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa";

import Header from '../Header/Header'

import {
    GreetingContainer, 
    GreettHeading,
    BodyContainer,
    Para,
    ContinueBtn,
    CustomPara,
} from './StyledComponents'

export default function Greeting(){
    return(
        <GreetingContainer>
            <Header />
            <BodyContainer>
            <CustomPara><FaRocket size={20} style={{paddingRight: '15px'}}/> For Indian Users Only</CustomPara>
                <GreettHeading>Start Posting anonymously where no one will judge</GreettHeading>
                <Para>Welcom to stranger Discussion Forum</Para>
                
                <Link to='/signup' style={{width: '85%', alignSelf: 'center', textDecoration: 'none'}}> 
                        <ContinueBtn type='submit' >Continue <FaArrowRightLong size={15} /> </ContinueBtn>
                    </Link>
            </BodyContainer>
        </GreetingContainer>
    )
}
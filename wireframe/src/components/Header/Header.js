import { IoAppsSharp } from "react-icons/io5";

import {
    HeaderContainer,
    LogoHeading
} from './StyledComponents'


export default function Header(){
    return(
        <HeaderContainer>
        <IoAppsSharp size={35} />
            <LogoHeading>Wireframe</LogoHeading>
        </HeaderContainer>
    )
}
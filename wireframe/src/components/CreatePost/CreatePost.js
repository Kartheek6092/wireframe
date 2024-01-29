import { useState } from "react";

import { CiCirclePlus } from "react-icons/ci";

import Header from '../Header/Header'

import {
    CreatePostContainer,
    BodyContainer,
    ContentContainer,
    LeftNav,
    PostsContainer,
    NavOptionBtn,
    CreateBtn,
    CustomHeading,
    NavOptionsContainer,
    CustomInput,
    CustomTextArea,
    SubmitBtn
    
} from './StyledComponents'


export default function CreatePost() {
    
    return(
        <CreatePostContainer>
            <Header />
            <BodyContainer>
                <ContentContainer>
                    <LeftNav>
                        <NavOptionsContainer>
                            <NavOptionBtn active>All Posts</NavOptionBtn>
                            <NavOptionBtn>Commented Post</NavOptionBtn>
                            <NavOptionBtn>Replied Post</NavOptionBtn>
                        </NavOptionsContainer>
                        
                        <CreateBtn type='button'><CiCirclePlus size={25} /> Create Post</CreateBtn>
                    </LeftNav>
                    <PostsContainer>
                        <CustomHeading>Create Post</CustomHeading>
                        <CustomInput type="text" placeholder="Post Title..." />
                        <CustomTextArea cols={20} rows={15} placeholder="Post description..." ></CustomTextArea>
                        <SubmitBtn type='button'> Post Submit</SubmitBtn>
                    </PostsContainer>
                </ContentContainer>
            </BodyContainer>
        </CreatePostContainer>
    )
}
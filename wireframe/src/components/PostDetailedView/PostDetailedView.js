import { useState } from "react";

import { Link } from "react-router-dom/cjs/react-router-dom.min";

import { CiCirclePlus } from "react-icons/ci";

import AppContext from "../../context/AppContext";

import Header from '../Header/Header'

import {
    HomeContainer,
    BodyContainer,
    ContentContainer,
    LeftNav,
    PostsContainer,
    NavOptionBtn,
    CreateBtn,
    CustomUl,
    CustomLi,
    CustomHeading,
    PostTitle,
    CountsPara,
    NavOptionsContainer,
    
} from './StyledComponents'


export default function PostDetailedView() {
    const [showPostDetailed, togglePostDetails] = useState(false)
    
    const togglePostDetailedView = () =>{
        togglePostDetails(true)
    }
    
    
    const renderDetailedView = (item) =>{
        return(
            <>
               
            </>
        )
    }
    
    console.log(showPostDetailed)
    
    return(
        <AppContext.Consumer>
            {value => {
                const {item} = value
                return(
                    <HomeContainer>
                            <Header />
                            <BodyContainer>
                                <ContentContainer>
                                    <LeftNav>
                                        <NavOptionsContainer>
                                            <NavOptionBtn active>All Posts</NavOptionBtn>
                                            <NavOptionBtn>Commented Post</NavOptionBtn>
                                            <NavOptionBtn>Replied Post</NavOptionBtn>
                                        </NavOptionsContainer>
                                        
                                        <Link to='/create-post'><CreateBtn type='button'><CiCirclePlus size={25} /> Create Post</CreateBtn></Link>
                                    </LeftNav>
                                    <PostsContainer>
                                        <CustomHeading>Post Details </CustomHeading>
                                        <PostTitle>{item.postTitle}</PostTitle>
                                        <CountsPara>This is the post description for this topic. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dumm text ever since the 1500s</CountsPara>
                                        <CountsPara style={{fontStyle: 'italic'}}>{item.commentCount} Comments {item.replyCount} Replies</CountsPara>
                                        <CountsPara style={{fontSize: '14px'}}>Comments</CountsPara>
                                        <CountsPara>Jimmy: first comment</CountsPara>
                                        <CountsPara>Harshith: second comment</CountsPara>
                                        <CountsPara style={{paddingLeft: '30px'}}>Kiran: first reply</CountsPara>
                                        <CountsPara style={{paddingLeft: '30px'}}>Kiran: second reply</CountsPara>
                                        <CountsPara style={{paddingLeft: '30px'}}>Kiran: third reply</CountsPara>
                                    </PostsContainer>
                                </ContentContainer>
                            </BodyContainer>
                    </HomeContainer>
                )
            }}
        </AppContext.Consumer>
    )
}
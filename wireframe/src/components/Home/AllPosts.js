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

const Data = [
    {
        "postTitle": "Introduction to Machine Learning",
        "commentCount": 25,
        "replyCount": 10
    },
    {
        "postTitle": "Data Visualization Techniques",
        "commentCount": 30,
        "replyCount": 15
    },
    {
        "postTitle": "Python Programming Basics",
        "commentCount": 15,
        "replyCount": 5
    },
    {
        "postTitle": "Web Development Trends in 2024",
        "commentCount": 40,
        "replyCount": 20
    },
    {
        "postTitle": "Understanding Neural Networks",
        "commentCount": 20,
        "replyCount": 8
    }
]

export default function AllPosts() {
    const [postsData, setPostsData] = useState(Data)
    const [showPostDetailed, togglePostDetails] = useState(false)
    
    const togglePostDetailedView = () =>{
        togglePostDetails(true)
    }
    
    
    const renderDetailedView = (item) =>{
        return(
            <>
                <PostTitle>{item.postTitle}</PostTitle>
                <CountsPara>This is the post description for this topic. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dumm text ever since the 1500s</CountsPara>
                <CountsPara style={{fontStyle: 'italic'}}>{item.commentCount} Comments {item.replyCount} Replies</CountsPara>
                <CountsPara style={{fontSize: '14px'}}>Comments</CountsPara>
                <CountsPara>Jimmy: first comment</CountsPara>
                <CountsPara>Harshith: second comment</CountsPara>
                <CountsPara style={{paddingLeft: '30px'}}>Kiran: first reply</CountsPara>
                <CountsPara style={{paddingLeft: '30px'}}>Kiran: second reply</CountsPara>
                <CountsPara style={{paddingLeft: '30px'}}>Kiran: third reply</CountsPara>
            </>
        )
    }
    
    console.log(showPostDetailed)
    
    return(
        <AppContext.Consumer>
            {value => {
            const {updateItem} = value
            
            const changeItem = (item) =>{
                updateItem(item)
            }
            
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
                                    <CustomHeading>All Posts {postsData.length}</CustomHeading>
                                    {showPostDetailed ? renderDetailedView(postsData[1]) : (
                                        <CustomUl>
                                            {postsData.map(item => (
                                                <Link to='/post-details'><CustomLi key={item.postTitle} onClick={changeItem(item)} >
                                                    <PostTitle>{item.postTitle}</PostTitle>
                                                    <CountsPara>{item.commentCount} Comments {item.replyCount} Replies</CountsPara>
                                                </CustomLi></Link>
                                            ))}
                                        </CustomUl>
                                    )}
                                </PostsContainer>
                            </ContentContainer>
                        </BodyContainer>
                    </HomeContainer>
            )
            }}
        </AppContext.Consumer>
    )
}
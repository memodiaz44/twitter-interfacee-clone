import React from "react";
import './Post.css'
import { Avatar } from "@mui/material";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function Post (){
    return(
        <div className="post">
            <div className="post_avatar">
                <Avatar src=""/>
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headertext">
                        <h3>Will {' '}
                            <spam className='post_borderspecial'>
                            <VerifiedUserIcon className="post_badge"/>
                            </spam></h3>

                    </div>
                    <div className="post_headerdesciption">
                        <p>Challenge accepted</p>
                    </div>
                </div>
                <img src="https://media.giphy.com/media/EbteoXuFr9JmuctegF/giphy-downsized-large.gif" alt=""/>
                <div className="post_footer">
                <ChatBubbleOutlineIcon fontSize="small"/>
                <RepeatIcon fontSize="small"/>
                <FavoriteBorderIcon fontSize="small"/>
                <PublishIcon fontSize="small"/>

                </div>
            </div>
        </div>
    )
}

export default Post
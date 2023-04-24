import React from "react";
import './FirstSEction.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import Options from "./Options";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from "@mui/material";

function Container (){
    return(
        <div className="bar">

        <TwitterIcon className="tweetIcon"/>

        <Options action Icons={HomeIcon} text='home' />
        <Options Icons={SearchIcon} text='Explore' />
        <Options Icons={NotificationsIcon} text='Notifications'/>
        <Options Icons={MailOutlineIcon} text='Mail' />
        <Options Icons={BookmarkBorderIcon} text='Bookmarks' />
        <Options Icons={ListAltIcon} text='List' />
        <Options Icons={PermIdentityIcon} text='Profile' />
        <Options Icons={MoreHorizIcon} text='More' />
        
        
      <Button variant="outlined" className="Option__tweet" fullWidth>Tweet</Button>

        </div>
        
    )
}

export default Container
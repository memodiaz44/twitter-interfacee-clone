import React from "react";
import './Widgetts.css';
import { TwitterTweetEmbed, TwitterTimelineEmbed,  TwitterShareButton} from 'react-twitter-embed'
import SearchIcon from '@mui/icons-material/Search';

function Widgetts (){
    return(
        <div className="widgets">
            <div className="widgets_input">
                <SearchIcon className="widgets_searchicon"/>
                <input placeholder="Search Twitter" type="text"/>
            </div>
            <div className="widgets_container">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId="000000000000"/>
                <TwitterTimelineEmbed
                sourceType="profile"
                sourceName="cleverqazi"
                options={{height: 400}}/>

                <TwitterShareButton
                url=""
                options={{text: 'hi thea',via: 'closenogth'}}
                />
            </div>
        </div>
    )
}

export default Widgetts
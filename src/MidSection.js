import React from "react";
import './MidSection.css'
import TweetBox from "./TweetBox";
import Post from "./Post";

function MidSection (){
    return(
        <div className="feed">
            <div className="feed__header">
            <h2>Home</h2>
            </div>
            <TweetBox/>

            <Post/>
            <Post/>
            <Post/>
            <Post/>

        </div>
    )
}
 export default MidSection
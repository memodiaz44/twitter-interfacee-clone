import React from "react";
import './TweetBox.css'
import { Avatar, Button } from "@mui/material";

function TweetBox(){
    return(
        <div className="tweetbox">
            <form>
                <div className="tweetbox__input">
                    <Avatar src=""/>
                    <input placeholder="What is happening?" type="text"></input>
                </div>
                <input className="tweetbox__inputimage" placeholder="Enter image URL?" type="text"></input>
                <Button className="tweetbox__button">Tweet</Button>
                

            </form>
        </div>
    )
}

export default TweetBox
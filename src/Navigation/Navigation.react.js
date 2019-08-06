import React from 'react';
import {Route, Switch} from 'react-router-dom';
// import AddBuddy from '../AddBuddy/AddBuddy.react';
import FetchBuddies from '../FetchBuddies/FetchBuddies.react';
import FetchPosts from '../FetchPosts/FetchPosts.react';
import AddBuddy from '../AddBuddy/AddBuddy.react';
import NewPost from '../NewPost/NewPost.react';
import VideoEmbed from '../VideoEmbed/VideoEmbed.react';

const Navigation = () => {

    return (
        <div >
            <main>
                 <Switch>
                    
                    <Route path="/fetchBuddy" component={FetchBuddies}></Route>
                    <Route path="/fetchPosts/:id" component={FetchPosts}></Route>
                    <Route path="/addBuddy" component={AddBuddy}></Route>
                    
                    <Route path="/newPost/:id" component={NewPost}></Route>
                    <Route exact path="/" component={VideoEmbed}></Route>
                    {/*
                    
                    <Route exact path="/" component={}></Route>
                 
                 
                    <Route path="/newPost" component={NewPost}></Route> */}
                </Switch>
            </main>
        </div>
    );

}

export default Navigation;
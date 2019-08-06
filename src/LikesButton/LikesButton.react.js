import React from 'react';


class LikesButton extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            buddy: props.buddy,
            details: props.details,
            likeCount:props.likes, 
            dislikes: props.dislikes                   
        }
        //console.log(this.state.dislikes)
        //this.setState({likeCount:this.state.likeCount+1})
    }

    componentDidUpdate=() => {
        
        // console.log(this.state.buddy.workOuts.likes+'--After likes')   
        // console.log(this.state.buddy.workOuts)   
        // console.log(this.state.buddy+'--BuddyList')   
        if(this.state.buddy.id!==undefined){
            let url='http://localhost:3003/buddies/'+this.state.buddy.id;
            fetch(url,{
                method:"PUT",
                body:JSON.stringify(this.state.buddy),
                headers: {
                    "Content-Type":"application/json"   
                }
            }).catch(error => console.log(error));
        }
    }

    handleLike() {
        this.setState({likeCount:this.state.likeCount+1})
        //console.log(this.state.buddy).;
        let data = this.state.buddy.workOuts;
        //console.log(data);
        for (let post of data) {
            if (post.details===this.state.details) {
               // console.log(post.likes+'--From json')   
                
                
                // this.state.buddy.workOuts = 
          
                post.likes+=1;
                // eslint-disable-next-line
                this.state.buddy.workOuts.likes = post.likes;
                // console.log(this.state.buddy.workOuts.likes+'--After update')

                break;
            }
        }
    }
    handleUnLike() {
        this.setState({dislikes:this.state.dislikes+1})
        //console.log(this.state.buddy);
        let data = this.state.buddy.workOuts;
        for (let post of data) {
            if (post.details===this.state.details) {
               // console.log(post.likes+'--From json')   
                
                
                // this.state.buddy.workOuts = 
          
                post.dislikes+=1;
                // eslint-disable-next-line
                this.state.buddy.workOuts.dislikes = post.dislikes;
                // console.log(this.state.buddy.workOuts.likes+'--After update')

                break;
            }
        }
    }

    render() {
        return (
            <div >
                <button type="button" className="btn btn-light" onClick={()=>this.handleLike()}>
                    <i className="fa fa-thumbs-up"> </i>&nbsp;Like&nbsp;-&nbsp;{this.state.likeCount}</button>&nbsp;&nbsp;&nbsp;
                <button type="button" className="btn btn-light" onClick={()=>this.handleUnLike()}>
                    <i className="fa fa-thumbs-down"> </i>&nbsp;Unlike&nbsp;-&nbsp;{this.state.dislikes}</button>   
                
            </div>
        );
    }
}

export default LikesButton;
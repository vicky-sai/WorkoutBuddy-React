import React from 'react';
import AddComment from '../AddComment/AddComment.react'
import LikesButton from '../LikesButton/LikesButton.react';

class FetchPosts extends React.Component {
    url='http://localhost:3003/buddies';
    constructor(props) {
        super(props);
        this.state ={
            buddyList:[{
                id: 0,
                name: '',
                userName: '',
                passWord: '',
                location: '',
                phoneNumber: '',
                buddiesList: [],
                workOuts: []
            }]
        }
    }
  

    componentDidUpdate() {
        //console.log(this.state.buddyList);
    }
    componentDidMount(){
        //console.log('Did Mount called');
        //console.log(this.state.buddyList[0].id+"---");
       
        const id = this.props.match.params.id;  
        console.log(id);
        if(id!==undefined) {
            this.url=this.url+'/'+id;
        }
        fetch(this.url).then(resp=>resp.json()).then(buddyList=>this.setState({buddyList}));
        
    }   
    
    render() {
        
        if( this.url!=='http://localhost:3003/buddies') {
            return (
                <div>
                    <br/>
                    <div className="container">
                    <div className="card bg-success text-white">
                        <div className="card-body"><h5><strong>Name: </strong>{this.state.buddyList.name}&nbsp;&nbsp;&nbsp;&nbsp;<strong>Location: </strong>{this.state.buddyList.location}&nbsp;&nbsp;&nbsp;
                         <strong>Phone Number: </strong>{this.state.buddyList.phoneNumber}</h5></div>
                    </div>
                    <br/>
                        {                      
                            // eslint-disable-next-line
                            this.state.buddyList.workOuts.map((eachPost,index)=> {  if(eachPost.scope==='public')  {                      
                                return (
                                    <div className="card" key={index}>
                                        <div className="card-body">
                                            <h4 className="card-title">{eachPost.details}</h4>
                                            <p className="card-text">{eachPost.date}</p>
                                            {/* <Link to="/" className="btn btn-primary">See Profile</Link> */}
                                            <LikesButton likes={eachPost.likes}  dislikes={eachPost.dislikes} buddy={this.state.buddyList} details={eachPost.details}></LikesButton>
                                            <br/>
                                            <span>Comments:&nbsp;&nbsp;{eachPost.comments+','}</span>
                                            <AddComment buddy={this.state.buddyList} details={eachPost.details}></AddComment>
                                        
                                        </div>
                                    </div>
                                )
                                                    
                                }                       
                            } )
                        } 
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                     
                    {
                       
                        this.state.buddyList.map((eachBuddy,index1)=> {
                          
                            return (          
                                      
                                    <div className="container" key={index1}>
                                        <br/>
                                       
                                        <div className="card bg-success text-white">
                                            <div className="card-body"><h5><strong>Name: </strong>{eachBuddy.name}&nbsp;&nbsp;&nbsp;&nbsp;
                                            <strong>Location: </strong>{eachBuddy.location}&nbsp;&nbsp;&nbsp;
                                            <strong>Phone Number: </strong>{eachBuddy.phoneNumber}</h5>
                                            </div>
                                        </div>
                    
                        {                      
                           // eslint-disable-next-line
                           eachBuddy.workOuts.map((eachPost,index)=> {   
                            if(eachPost.scope==='public')  {                          
                                return (
                                    <div className="card" key={index}>
                                        <div className="card-body">
                                            <h4 className="card-title">{eachPost.details}</h4>
                                            <p className="card-text">{eachPost.date}</p>
                                            {/* <Link to="/" className="btn btn-primary">See Profile</Link> */}
                                            <LikesButton likes={eachPost.likes} dislikes={eachPost.dislikes} buddy={eachBuddy} details={eachPost.details}></LikesButton>
                                            <br/>
                                            <span>Comments:&nbsp;&nbsp;{eachPost.comments+','}</span>
                                            <AddComment buddy={this.state.buddyList} postId={eachPost.id}></AddComment>
                                        
                                        </div>
                                    </div>
                                )
                            }                       
                                                        
                            } )
                        } 
                    </div>
                            )
                        }
                         )
                    }
                </div>
            );
        }

        
    }
}

export default FetchPosts;
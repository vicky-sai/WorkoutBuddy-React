import React from 'react';
import {Link} from 'react-router-dom';


class DataGrid extends React.Component {

    // componentDidMount(){
    //     console.log('Did Mount called');
    //     let url="http://localhost:3003/buddies";
    //     fetch(url).then(resp=>resp.json()).then(buddyList=>this.setState({buddyList}));
    // }

    render() {

        return (
            <div className="container">
            <br></br>
            {
                this.props.buddyList.map((eachBuddy,index)=>{
                    let linkString = '/fetchPosts/'+eachBuddy.id;
                    let linkPost = '/newPost/'+eachBuddy.id;
                        return ( 
                             <div key={index}>
                                <div className="card-deck">
                                    <div className="card bg-warning">
                                        <div className="card-body text-center">
                                            <p className="card-text">Name: {eachBuddy.name}</p>
                                            <p className="card-text">Location: {eachBuddy.location}</p>
                                            <p className="card-text">Phone Number: {eachBuddy.phoneNumber}</p>
                                            
                                            <p className="card-text">Buddies: { this.props.buddyList.map((eachInnerBuddy,index1)=>
                                            {      
                                                let onePersonLink = '/fetchPosts/'+eachInnerBuddy.id;
                                                    if(eachBuddy.buddiesList.includes(eachInnerBuddy.id)) {
                                                        return ( 
                                                            <Link to={onePersonLink} key={index1}>
                                                                {eachInnerBuddy.name},
                                                            </Link>
                                                        )
                                                    }
                                                    else    
                                                        return null
                                                    
                                                })
                                            }   
                                            </p>
                                            
                                            <Link to={linkPost}>
                                                <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit" >Post {eachBuddy.name}'s activity</button>
                                            </Link>&emsp;&emsp;
                                            <Link to={linkString}>
                                                <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit" >View Posts</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                               </div>
                            )
                    }
                )
            }
            
            </div>
        )
    }
}

export default DataGrid;
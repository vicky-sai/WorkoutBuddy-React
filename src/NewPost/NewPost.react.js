import React from 'react';



class NewPost extends React.Component {
    url="http://localhost:3003/buddies/";
    constructor(props) {
        super(props);
        this.state ={
            buddy:{
                name: '',
                userName: '',
                passWord: '',
                location: '',
                phoneNumber: '',
                buddiesList: [],
                workOuts: []                
            },
            tempWorkOuts:{
                details: '',
                date: '',
                scope: '',
                likes: 1,
                dislikes: 0,
                "comments": []
              },
        }
    }

    componentDidMount(){
        const {id} = this.props.match.params;  
        this.url=this.url+id;
        //console.log(this.url);
        fetch(this.url).then(resp=>resp.json()).then(buddy=>this.setState({buddy})).catch(error => console.log(error));
        
    } 

    componentDidUpdate=() => {

    }
    handleSubmit=(event)=>{
        document.getElementById("clearForm").reset();
        event.preventDefault();

        let data = this.state.buddy.workOuts;
        //let works =  post.workOuts.slice();
        data.push(this.state.tempWorkOuts);              
        //post.workOuts = works;
        // eslint-disable-next-line
        this.state.buddy.workOuts = data;
        console.log(data);

        fetch(this.url,{
            method:"PUT",
            body:JSON.stringify(this.state.buddy),
            headers: {
                "Content-Type":"application/json"   
            }
        }).then(resp=> console.log(resp.json())).then(data=>{console.log('done posting')}).catch(error => console.log(error));

        console.log("submit called");
        //console.log(this.state.addWorkout);
    }

    handleChange =(event) => {
        let name= event.target.name;
        let value = event.target.value;
        
        this.setState( prevState => ({tempWorkOuts: {...prevState.tempWorkOuts, [name]:value}}))
        // eslint-disable-next-line
        //this.state.tempComment = value;
    }

    render() {
        return (
            <div >
                <div className="container">
                    <h2>Post an update..</h2><br/>
                    <form className="form-center col-md-16" onSubmit={this.handleSubmit}  id='clearForm'>
                        <div className="form-inline">
                            <label htmlFor="details">Details :&emsp;&emsp;&emsp;</label>
                            <input type="text" className="form-control col-md-6" id="details" placeholder="Enter details" name="details"  onChange={this.handleChange}/>
                        </div>
                        <br/>
                        <div className="form-inline">
                            <label htmlFor="date">Date :&emsp;&emsp;&emsp;&ensp;&ensp;</label>
                            <input type="date" className="form-control col-md-6" id="date" placeholder="Enter date" name="date"  onChange={this.handleChange}/>
                        </div>
                        <br/>
                        <div className="form-inline" onChange={this.handleChange}>
                            <label htmlFor="location">Scope :&emsp;&emsp;&emsp;&ensp;</label>
                            <label className="form-check-label" htmlFor="scope">
                                <input type="radio" className="form-check-input" id="scope" name="scope" value="public" defaultChecked/>Public
                            </label>&emsp;&emsp;&emsp;
                            <label className="form-check-label" htmlFor="scope  ">
                                <input type="radio" className="form-check-input" id="scope" name="scope" value="private"/>Private
                            </label>
                        </div>
                        <br/>
                        <input className="btn btn-outline-success my-2 my-sm-0" type="reset" value="Reset"/>&emsp;&emsp;&emsp;
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default NewPost;
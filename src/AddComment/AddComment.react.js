import React from 'react';


class AddComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            buddy: props.buddy,
            details: props.details,
            tempComment:''
        }
    }

    handleSubmit=(event) => {
        //this.state = { fields: {name: ''}};
        document.getElementById("clearForm").reset();
        document.getElementById('commentDynamic').append(this.state.tempComment+',');
        event.preventDefault();
        
        let data = this.state.buddy.workOuts;
        for (let post of data) {
            if (post.details===this.state.details) {
                let comm =  post.comments.slice();
                comm.push(this.state.tempComment);              
                post.comments = comm;
                // eslint-disable-next-line
                this.state.buddy.workOuts.comments = post.comments;
                break;
            }
        }
          
        let url='http://localhost:3003/buddies/'+this.state.buddy.id;

        fetch(url,{
            method:"PUT",
            body:JSON.stringify(this.state.buddy),
            headers: {
                "Content-Type":"application/json"   
            }
        }).then(resp=> console.log(resp.json())).then(data=>{console.log('done')}).catch(error => console.log(error));
        // console.log('Done commenting');
    }

    handleChange =(event) => {
        let name= event.target.name;
        let value = event.target.value;
        
        this.setState( prevState => ({newDonor: {...prevState.newDonor, [name]:value}}))
        // eslint-disable-next-line
        this.state.tempComment = value;
    }
    render() {
        return (
            <div >
                <p id='commentDynamic'></p>
                <form onSubmit={this.handleSubmit} id='clearForm'>
                    <div className="form-group">
                        <input type="text" name="comment" onChange={this.handleChange}  value= {this.state.name}/>&nbsp;&nbsp;&nbsp;
                        
                    </div>
                    <input type="submit" value='Submit'/>                
                </form>
            </div>
        );
    }
}

export default AddComment;
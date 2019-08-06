import React from 'react';



class AddBuddy extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            addWorkout:{
                "id":0,
                "name": "",
                "userName": "",
                "passWord": "",
                "location": "",
                "phoneNumber": "",
                "buddiesList": [],
                "workOuts": []
            }
        }
    }
    handleSubmit=(event)=>{
        document.getElementById("clearForm").reset();
        alert("Buddy created..!!")
        event.preventDefault();
        let url="http://localhost:3003/buddies";
        fetch(url,{
            method:"POST",
            body:JSON.stringify(this.state.addWorkout),
            headers:{
                "Content-Type":"application/json"
            }}).then(resp=>console.log("resource created"));
        // console.log("submit called");
        // console.log(this.state.addWorkout);
    }

    handleChange=(event)=>{
        let name=event.target.name;
        let value=event.target.value;
    
        this.setState(prevState=>({addWorkout:{...prevState.addWorkout,[name]:value}}));
    }

    render() {
        return (
            <div >
                <div className="container">
                    <h2>Registering yourself</h2><br/>
                    <form className="form-center col-md-16" onSubmit={this.handleSubmit} id='clearForm'>
                        <div className="form-inline">
                            <label htmlFor="name">Name :&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;</label>
                            <input type="text" className="form-control col-md-6" id="name" placeholder="Enter name" name="name"  onChange={this.handleChange}/>
                        </div>
                        <br/>
                        <div className="form-inline">
                            <label htmlFor="userName">Username :&emsp;&emsp;&ensp;&ensp;</label>
                            <input type="email" className="form-control col-md-6" id="userName" placeholder="Enter username" name="userName"  onChange={this.handleChange}/>
                        </div>
                        <br/>
                        <div className="form-inline">
                            <label htmlFor="passWord">Password :&emsp;&emsp;&emsp;</label>
                            <input type="password" className="form-control col-md-6" id="passWord" placeholder="Enter password" name="passWord" onChange={this.handleChange}/>
                        </div>
                        <br/>
                        <div className="form-inline">
                            <label htmlFor="location">Location :&emsp;&emsp;&emsp;&ensp;</label>
                            <input type="text" className="form-control col-md-6" id="location" placeholder="Enter location" name="location" onChange={this.handleChange}/>
                        </div>
                        <br/>
                        <div className="form-inline">
                            <label htmlFor="phoneNumber">Phone Number :&nbsp;&nbsp;</label>
                            <input type="text" className="form-control col-md-6" id="phoneNumber" placeholder="Enter phone number" name="phoneNumber" onChange={this.handleChange}/>
                        </div>
                        <br/>
                        <div className="form-inline">
                            <label htmlFor="sel1">Select buddies (select one):&nbsp;&nbsp;</label>
                            <select className="form-control col-md-5" id="sel1">
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                            </select>
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

export default AddBuddy;
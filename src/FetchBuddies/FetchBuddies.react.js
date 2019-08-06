import React from 'react';
import DataGrid from '../DataGrid/DataGrid.react';


class FetchBuddies extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            buddyList:[]
        }
    }
    componentDidMount(){
        //console.log('Did Mount called');
        let url="http://localhost:3003/buddies";
        fetch(url).then(resp=>resp.json()).then(buddyList=>this.setState({buddyList}));
        //
        //console.log(this.state.buddyList[0]+"--");
    }
    componentDidUpdate() {
        //console.log(this.state.buddyList);
    }
    
    render() {
        return (
            <div >
                
                <DataGrid buddyList={this.state.buddyList}>
                </DataGrid>

            </div>
        );
    }
}

export default FetchBuddies;
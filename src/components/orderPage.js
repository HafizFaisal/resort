import React, { Component } from 'react';

 class orderPage extends Component {
    render() {
        return (
            <React.Fragment>
                <div>


<label style={{color:"white"}}>
    ENTER THE PRICE OF ROOM
</label><br/>
<input type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter the price of room"/><br/>
    <label >
        ENTER quanity of room
    </label><br/>

    
    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter the price of room"/><br/>
    <button class="btn btn-secondary" id="add-item-btn">
        OderRoom
    </button>




                        </div>
                
             
            </React.Fragment>
        )
    }
}

export default orderPage;
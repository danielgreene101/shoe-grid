import React, { Component } from 'react';

class Shoe extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      brand: 'nike',
      style: 'running',
      size: '11',
      upcId: '643596234987',
      open: false,
    };
  }
    editShoe = () => {
      this.setState({ open: true })
    }
    render() {

      return (
        <div style={{border: '1px solid red', display: 'flex', width: 200, height: 200}}>
          <div style={{ display: 'block'}}>
            <p>Brand: {this.state.brand}</p>
            <p>Style: {this.state.style}</p>
            <p>Size: {this.state.size}</p>
            <p>upcId: {this.state.upcId}</p>
            <button onClick={this.editShoe} >
              Edit Shoe
            </button>
          </div>
        </div>
      );
    }
  }
  
  export default Shoe;
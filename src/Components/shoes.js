import React, { Component } from 'react';

class Shoe extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      brand: 'nike',
      style: 'running',
      size: '11',
      upcId: '643596234987',
      editing: false,
    };
  }
    editShoe = () => {
      this.setState({ editing: !this.state.editing })
    }

    updateStyle = (event) => {
      console.log('value', event.target.value);
      this.setState({ style: event.target.value  })
    }
    updateBrand = (event) => {
      console.log('value', event.target.value);
      this.setState({ brand: event.target.value  })
    }
    updateSize = (event) => {
      console.log('value', event.target.value);
      this.setState({ size: event.target.value  })
    }
    updateUpcId = (event) => {
      console.log('value', event.target.value);
      this.setState({ upcId: event.target.value  })
    }

    render() {
      const { 
        editing,
        brand,
        size,
        upcId,
        style
        } = this.state

      return (
        <div style={{border: '1px solid red', display: 'flex', width: 200, height: 200}}>
          <div style={{ display: 'block'}}>
          {!editing ?
            <div> 
              <p>Brand: {brand}</p>
              <p>Style: {style}</p>
              <p>Size: {size}</p>
              <p>upcId: {upcId}</p>
            </div> :
            <div>
              Brand: <input value={this.state.brand} onChange={this.updateBrand}/>
              Style: <input value={this.state.style} onChange={this.updateStyle}/>
              Size: <input value={this.state.size} onChange={this.updateSize}/>
              upcId: <input value={this.state.upcId} onChange={this.updateUpcId}/>
            </div>
          }
            <button onClick={this.editShoe} >
              {editing ? 'Save Shoe' : 'Edit Shoe'}
            </button>
          </div>
        </div>
      );
    }
  }
  
  export default Shoe;
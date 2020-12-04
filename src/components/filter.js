import React, { Component } from 'react'
export default class Filtter extends Component{
    
    constructor(){
        super()
        
        this.state={
            search:'',
        }
    }

change=(e)=>{
    // console.log(e);
    this.setState({search:e.target.value})
    console.log(e.target.value);
    this.props.onAdd(this.state.search)
}

  render(){
    return (
        <div>
       
            <input id="filter" type="text"
                style={
                {padding:'10px',
                border:'1px solid midnightblue' ,
                borderRadius: '7px',
                outline: 'none',
                marginTop:'10px',
                width:'30%'
                }}
                onChange={this.change}
            />
        
       <p>{this.state.search}</p>
        
        </div>


    );
  }


}
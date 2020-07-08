import React, { Component } from 'react'
import UserTemplate from './User_template';



export default class User extends Component {

  state ={
    name: 'arri',
    lastname: 'Fab',
    age: 35,
    hobbies:['run', 'jump'],
    spanish:false,
    message(){console.log('hey');},
    car:{brand:"BMW",model:'3m'},
    mother:'Azzi',
    color: 'red'
  }
  changeColor (){
    // this.setState({
    //   color:'orange'
    // }) --or do below 
    this.refs.myColor.style.color ='blue'
    this.refs.myColor.style.fontSize ='30px'

  }
  render() {
    const style ={
      color: this.state.color}
    return (
      <div>
        <h4 style={style} ref="myColor">{this.state.mother}</h4>

        <div onClick={()=>this.changeColor()}>Change color</div><br/>
        <UserTemplate {...this.state}/>

        
      </div>
    )
  }
}

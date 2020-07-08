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
    car:{brand:"BMW",model:'3m'}
  }

  render() {
    return (
      <div>
        <UserTemplate {...this.state}/>

        
      </div>
    )
  }
}

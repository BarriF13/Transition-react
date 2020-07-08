import React from 'react';
import PropTypes from 'prop-types';

const UserTemplate =(props)=> {
  // console.log(props);
  return (
    <div>
      Template
    </div>
  )
};
UserTemplate.propTypes = {
  name:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number ,
    PropTypes.oneOf(['Barri', 'Cyrus']) 
  ]),
  lastname:PropTypes.string,
  age:PropTypes.number,
  // hobbies:PropTypes.array,
  hobbies:PropTypes.arrayOf(PropTypes.string),
  spanish:PropTypes.bool,
 message:PropTypes.func,
 car:PropTypes.object,
 mother: function(props, propName, componentName){
  // 
  if(props[propName] !== 'Cyrus'){
    return new Error(`The name ${props[propName]} is not correct. should be Barri `)
  }
 }
 
}

export default UserTemplate;
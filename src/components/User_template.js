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
UserTemplate.PropTypes = {
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
 mother: PropTypes.string.isRequired,
 
}

export default UserTemplate;
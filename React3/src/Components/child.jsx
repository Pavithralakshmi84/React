import React from 'react'
import Cards from './cards.jsx';

const Child = (props) => {

    console.log(props);
    
  return (
   <>
   
   <div>

    This is Child  {props.sendto}
   </div>
   <Cards  childsendto = {props} />
   
   </>
  )
}

export default Child
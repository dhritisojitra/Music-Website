import React from 'react'

function HeaderUseCallback(){
    console.log("Header rendered");
    
  return (
    <>
    <h2>Hello Header</h2>
    </>
  )
}

export default React.memo(HeaderUseCallback);

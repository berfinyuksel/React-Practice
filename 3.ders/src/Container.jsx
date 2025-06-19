import React from 'react'

function Container({children}) {
  return (
    <>
    <div>Container is called</div>
    {children}
    </>
  )
}

export default Container
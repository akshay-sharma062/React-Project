import React from 'react'

const CountMain = (x) => {
  console.log("rendering",x.children);
  return (
    <div>
{x.children}:{x.data}
    </div>
  )
}

export default React.memo(CountMain) 




// memo - It is a method. it memorized complete component if there is some change in component it will reload otherwise it will not reload the componet
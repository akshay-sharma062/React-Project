import {memo} from 'react'

const ButtonMain = (x) => {
  console.log("rendering",x.children);
  return (
    <div>
<button onClick={x.func}>{x.children}</button>
    </div>
  )
}

export default memo(ButtonMain)
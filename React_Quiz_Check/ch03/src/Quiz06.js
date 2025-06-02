import { useState } from 'react'

function Quiz06() {
   const [count, setNumber] = useState(0)
   return (
      <div>
         <p>카운트: {count}</p>
         <button
            onClick={() => {
               setNumber(count + 1)
            }}
         >
            1씩 증가
         </button>
      </div>
   )
}

export default Quiz06

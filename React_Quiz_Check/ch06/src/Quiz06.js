import React, { useState } from 'react'

function Quiz06() {
   const [count, setCount] = useState(0)

   const increment = () => {
      setCount(count + 1)
   }

   return (
      <div>
         <p>Count: {count}</p>
         <button onClick={increment}>Increment</button>
      </div>
   )
}

export default Quiz06

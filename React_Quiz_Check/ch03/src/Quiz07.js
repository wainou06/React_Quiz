import { useState } from 'react'

function Quiz07() {
   const [isOn, setOnoff] = useState(true || false)
   return (
      <div>
         <p>{isOn ? 'ON' : 'OFF'}</p>
         <button
            onClick={() => {
               setOnoff(!isOn)
            }}
         >
            토글
         </button>
      </div>
   )
}

export default Quiz07

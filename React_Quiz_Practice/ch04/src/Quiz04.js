import step1 from './images/step1.jpg'
import step2 from './images/step2.jpg'
import step3 from './images/step3.jpg'
import React, { useState } from 'react'

function Quiz04() {
   const [display, setDisplay] = useState({
      display1: 'block',
      display2: 'none',
      display3: 'none',
      level: 1,
   })

   const ginwha = (display, levelVal) => {
      setDisplay({
         display1: 'none',
         display2: 'none',
         display3: 'none',
      })

      setDisplay((prevState) => ({
         ...prevState,
         [display]: 'block',
         level: levelVal,
      }))
   }

   return (
      <div>
         <img src={step1} width="150" style={{ display: display.display1 }} />
         <img src={step2} width="150" style={{ display: display.display2 }} />
         <img src={step3} width="150" style={{ display: display.display3 }} />

         <br />

         {display.level === 1 && <button onClick={() => ginwha('display2', 2)}>이상해씨 진화!</button>}
         {display.level === 2 && <button onClick={() => ginwha('display3', 3)}>이상해풀 진화!</button>}
         {display.level === 3 && <p>진화 끝!</p>}
      </div>
   )
}

export default Quiz04

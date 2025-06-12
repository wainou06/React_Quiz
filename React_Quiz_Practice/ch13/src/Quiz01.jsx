import { createContext, useContext } from "react"

const style = { color: 'red' }

const theme = createContext(style)

function Quiz01() {
   const color= useContext(theme)
   return <div style={color}>Hello Context!</div>
}

export default Quiz01

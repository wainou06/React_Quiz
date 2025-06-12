import styled from 'styled-components'

const Button = styled.button`
   color: #fff;
   border: 1px solid transparent;
   border-radius: 5px;
   padding: 10px 15px;
   background-color: ${(props) => props.color || 'gray'};
`

function Quiz02() {
   return (
      <div>
         <Button color="blue">Blue Button</Button>
         <Button>Gray Button</Button>
      </div>
   )
}

export default Quiz02

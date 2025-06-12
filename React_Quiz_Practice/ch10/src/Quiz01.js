import styled from 'styled-components'

const StyledInput = styled.input`
width: 250px;
height: 50px;
   background-color: skyblue;
` // 여기에 코드 작성
const StyledInput2 = styled(StyledInput)`
   background-color: white;
` // 여기에 코드 작성

function Quiz01() {
   return (
      <div>
         <StyledInput />
         <StyledInput2 />
      </div>
   )
}

export default Quiz01

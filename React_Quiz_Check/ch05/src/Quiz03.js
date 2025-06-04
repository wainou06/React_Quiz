import React, { useState } from 'react'

function Quiz03() {
   const [employees, setEmployees] = useState([
      { id: 1, name: '김도도', dept: '개발부' },
      { id: 2, name: '이레레', dept: '개발부' },
      { id: 3, name: '박미미', dept: '인사부' },
      { id: 4, name: '강파파', dept: '마케팅부' },
   ])

   const employeeList = employees.map((employee) => (
      <li key={employee.id} onDoubleClick={() => onRemove(employee.id)}>
         사원명: {employee.name}, 부서: {employee.dept}
      </li>
   ))

   const [inputName, setInputName] = useState('')
   const [inputDept, setinputDept] = useState('')
   const [nextId, setNextId] = useState(5)

   const onChangeName = (e) => setInputName(e.target.value)
   const onChangeDept = (e) => setinputDept(e.target.value)

   const onClick = () => {
      const nextEmployee = employees.concat({
         id: nextId,
         name: inputName,
         dept: inputDept,
      })

      setNextId(nextId + 1)
      setEmployees(nextEmployee)
      setInputName('')
      setinputDept('')
   }

   const onRemove = (id) => {
      const nextEmployee = employees.filter((employee) => employee.id !== id)

      setEmployees(nextEmployee)
   }

   return (
      <>
         <input type="text" value={inputName} onChange={onChangeName} placeholder="사원 이름"></input>
         <input type="text" value={inputDept} onChange={onChangeDept} placeholder="부서"></input>
         <button onClick={onClick}>추가</button>
         <ul>{employeeList}</ul>
      </>
   )
}

export default Quiz03

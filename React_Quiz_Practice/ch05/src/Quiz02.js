import React, { useState } from 'react'

function Quiz02() {
   const [projects, setProjects] = useState([
      { id: 1, name: '프로젝트 A', status: '미완료' },
      { id: 2, name: '프로젝트 B', status: '완료' },
   ])

   const projectNames = projects.map((project) => (
      <li key={project.id} onDoubleClick={() => onRemove(project.id)}>
         프로젝트명: {project.name}, 상태: {project.status}
      </li>
   ))

   const [inputPjName, setInputPjName] = useState('')
   const [selectStatus, setSelectStatus] = useState('미완료')
   const [nextId, setNextId] = useState(3)

   const onChangeName = (e) => setInputPjName(e.target.value)
   const onChangeStatua = (e) => setSelectStatus(e.target.value)

   const onClick = () => {
      // 프로젝트 이름을 입력하지 않으면 추가하지 않음
      if (inputPjName.trim() === '') return

      const nextProjectName = projects.concat({
         id: nextId,
         name: inputPjName,
         status: selectStatus,
      })

      setProjects(nextProjectName)
      setNextId(nextId + 1)
      setInputPjName('')
      setSelectStatus('미완료')
   }
   const onRemove = (id) => {
      const removePj = projects.filter((project) => project.id !== id)

      setProjects(removePj)
   }

   return (
      <>
         <input type="text" placeholder="프로젝트 이름" value={inputPjName} onChange={onChangeName}></input>
         <select value={selectStatus} onChange={onChangeStatua}>
            <option value="미완료">미완료</option>
            <option value="완료">완료</option>
         </select>
         <button onClick={onClick}>추가</button>
         <br />
         <ul>{projectNames}</ul>
      </>
   )
}

export default Quiz02

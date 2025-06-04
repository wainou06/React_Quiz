import React, { useState } from 'react'

function Quiz02() {
   const [projects, setProjects] = useState([
      { id: 1, name: '프로젝트 A', status: '미완료' },
      { id: 2, name: '프로젝트 B', status: '완료' },
   ])

   const projectNames = projects.map((project) => (
      <li key={project.id}>
         프로젝트명: {project.name}, 상태: {project.status}
      </li>
   ))

   const [inputPjName, setInputPjName] = useState('')
   const [selectStatus, setSelectStatus] = useState('')
   const [nextId, setNextId] = useState(3)

   return (
      <>
         <input type="text" placeholder="프로젝트 이름"></input>
         <select>
            <option>미완료</option>
            <option>완료</option>
         </select>
         <button>추가</button>
         <br />
         <ul>{projectNames}</ul>
      </>
   )
}

export default Quiz02

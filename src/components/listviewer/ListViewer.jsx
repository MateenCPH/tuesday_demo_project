import React from 'react'
import './ListViewer.css'
const ListViewer = ({nameList, setNameList}) => {
    const clickHandler = (name) => {

        console.log(name)

        setNameList([...nameList.filter((nameElement)=>nameElement !== name)])
    }

    return (
      <>
      {nameList
      .map((name, index) =>
      <li key={index}>{name}<button onClick={()=>clickHandler(name)}>Delete</button></li>
      )}
      </>
    )
  }

  export default ListViewer;
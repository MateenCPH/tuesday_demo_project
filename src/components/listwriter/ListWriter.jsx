import React, { useState } from "react";
import './ListWriter.css'

const ListWriter = ({setNameList, nameList}) => {
    const [inputValue, setInputValue] = useState('')
  
    const changeHandler= (event)=>{
      console.log(event.target);
      console.log(event.target.value);
      setInputValue(event.target.value);
    };
  
  
    const clickHandler = () => {
      setNameList([...nameList, inputValue])
    }
  
    return (<>
    <input type="text" onChange={changeHandler}/>
    <button onClick={clickHandler}>Add name</button>
    </>);
  }

  export default ListWriter;
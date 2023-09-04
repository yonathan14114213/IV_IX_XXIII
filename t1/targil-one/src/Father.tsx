import Child from './child'
import { useRef } from 'react'
import setText from './App';

const relf = useRef
const Father = () => {
  return (
    <>
        <Child/>
        <input type='string' ref={relf}> enter new </input>
        <button onClick={()=>{
            setText(relf);
        }}>switch</button>
    </>
    )
}

export default Father
import { useRef, useContext } from 'react';
import Child from './Child'
import { Context } from './App';
const Father = () => {
    // const count = useRef(0);
        const ralf = useRef<HTMLInputElement>(null) 

    const {setText} = useContext(Context)!
    return (
        <>
            <Child/>
            <input ref={ralf} type='string' placeholder='enter new text' ></input>
            <button onClick={()=>setText(ralf.current!.value)}>button</button>
        </>
    )
}

export default Father
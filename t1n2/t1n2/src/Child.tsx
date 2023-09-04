import { useContext } from "react";
import { Context } from "./App";

const MyComponent = ()=>{
    const {text , setText} = useContext(Context)!;
    return (
        <div>
            <p>my text: {text}</p>
            <button onClick={()=>setText('new')}>change</button>
        </div>
    );
};
export default MyComponent;
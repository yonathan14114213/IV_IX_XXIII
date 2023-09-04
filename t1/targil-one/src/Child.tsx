import { useContext } from "react"
import TextContext from './App'


const Child = () => {
    const text = useContext(TextContext('./Father', 'hjhkh'))
    return (
        <h4>{text}</h4>
    )
}

export default Child
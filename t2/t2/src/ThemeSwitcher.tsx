import { useContext } from "react"
import { ThemeContext } from "./App"

const ThemeSwitcher = () => {
    const {light, settheSwitch} = useContext(ThemeContext)
    return (
    <div>ThemeSwitcher</div>
  )
}

export default ThemeSwitcher
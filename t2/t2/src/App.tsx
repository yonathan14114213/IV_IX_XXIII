import { SetStateAction, createContext, useState } from 'react'
import './App.css'
import ThemeSwitcher from './ThemeSwitcher';
interface arr {
  light: string;
  SetSwitch:React.Dispatch<SetStateAction<string>>
}
export const ThemeContext = createContext<arr|null>(null);
function App() {
    const Switch [light, setSwitch] = useState(null)
    return (
    <>
    <ThemeContext.Provider value={{light,SetSwitch}}>
      <ThemeSwitcher/>
    </ThemeContext.Provider>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

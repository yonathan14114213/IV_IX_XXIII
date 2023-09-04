import { createContext, useState, Dispatch, SetStateAction } from 'react';
import './App.css';
import Grandpa from './Grandpa';
interface Obj {
  text: string,
  setText: Dispatch<SetStateAction<string>>
}
export const Context = createContext<Obj|null>(null);
const App = () => {
  const [text, setText] = useState('hello world');
  return (
    <>
    <Context.Provider value={{text, setText}}>
      <Grandpa/>
      </Context.Provider>
    </>
  );
};

export default App;

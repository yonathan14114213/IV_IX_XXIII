import { useState, createContext } from "react"

interface TextData {
  value: string;
  }
interface TextContextType {
    text: TextData;
    setText: React.Dispatch<React.SetStateAction<TextData>>;
  }

interface TextContextProviderProps {
  children: React.ReactNode;
}


export const TextContext = createContext<TextContextType | null>(null);

const TextContextProvider: React.FC<TextContextProviderProps> = (props) => {
  const [text, setText] = useState<TextData>({ value:'hello world' });
return (
<TextContext.Provider value={{ text, setText }}>
{props.children}
</TextContext.Provider>
);
};



export default TextContextProvider;
import { useState, createContext } from "react";
import { FirstFormValues } from "../types/myTypes";

const MultiPageFormContext = createContext<ContextType>({} as ContextType)

interface Props {
    children?: React.ReactNode
}

interface ContextType {
        formData:AllFormType | null;
        handleData: (data:FirstFormValues) => void;
} 

interface AllFormType {
    firstForm:FirstFormValues;
}

function MultiPageFormContextProvider({children}:Props){
    
    const[formData, setFormData] = useState<AllFormType | null>(null)

    function handleData(data: FirstFormValues){
        setFormData(prev => ({...prev, firstForm:data}))
    }


    return(
        <MultiPageFormContext.Provider value={{formData, handleData}}>
            {children}
        </MultiPageFormContext.Provider>
    )

}

export {MultiPageFormContextProvider, MultiPageFormContext}
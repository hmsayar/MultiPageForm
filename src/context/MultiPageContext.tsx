import { useState, createContext } from "react";
import getTimeNums from "../utils/getTimeNums"
import useSessionStorage from "../hooks/useSessionStorage";
const MultiPageFormContext = createContext<ContextType>({} as ContextType)

interface Props {
    children: React.ReactNode
}
interface ContextType {
    formData: AllFormType<any> | null;
    handleData: (data: object) => void;
}
export type AllFormType<Type> = {
    [Property in keyof Type]: Type[Property];
}

function MultiPageFormContextProvider({ children }: Props) {


    const [formData, setFormData] = useSessionStorage<AllFormType<{}>>("form",{})

    function handleData(data: object) {
        setFormData({ ...formData, ...data })
    }


    return (
        <MultiPageFormContext.Provider value={{ formData, handleData }}>
            {children}
        </MultiPageFormContext.Provider>
    )

}

export { MultiPageFormContextProvider, MultiPageFormContext }
import { useState, createContext } from "react";
import getTimeNums from "../utils/getTimeNums"
import useSessionStorage from "../hooks/useSessionStorage";
const MultiPageFormContext = createContext<ContextType>({} as ContextType)

interface Props {
    children: React.ReactNode
}
interface ContextType {
    formData: AllFormType | null;
    handleData: (data: Partial<AllFormType>) => void;
}
export interface AllFormType {
    firstName?: string;
    lastName?: string;
    password?: string;
    confirmPassword?: string;
    primarySelect?: string;
    secondarySelect?: string;
    agree?: boolean;
    email?: string;
    startDay: number;
    startMonth: number;
    startYear: number;
    endDay: number;
    endMonth: number;
    endYear: number;

}

function MultiPageFormContextProvider({ children }: Props) {


    const [formData, setFormData] = useSessionStorage<AllFormType>("form", {
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
        primarySelect: "A",
        secondarySelect: "A1",
        agree: false,
        email: "",
        startDay: getTimeNums().day,
        startMonth: getTimeNums().month,
        startYear: getTimeNums().year,
        endDay: getTimeNums().day + 1,
        endMonth: getTimeNums().month,
        endYear: getTimeNums().year

    })

    function handleData(data: Partial<AllFormType>) {
        setFormData({ ...formData, ...data })
    }


    return (
        <MultiPageFormContext.Provider value={{ formData, handleData }}>
            {children}
        </MultiPageFormContext.Provider>
    )

}

export { MultiPageFormContextProvider, MultiPageFormContext }
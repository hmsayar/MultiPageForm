import { useContext } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { MultiPageFormContext } from "../context/MultiPageContext"
import { Button, ButtonGroup, Box, TextField } from "@mui/material"
import getTimeNums from "../utils/getTimeNums"
import { AllFormType } from "../context/MultiPageContext"

export default function ThirdPage() {
    
    const navigate = useNavigate();
    const { formData, handleData } = useContext(MultiPageFormContext);
    const { register, handleSubmit, formState: { errors }, watch, setError, clearErrors } = useForm<Partial<AllFormType>>({
        defaultValues: {
            startDay: formData?.startDay,
            startMonth: formData?.startMonth,
            startYear: formData?.startYear,
            endDay: formData?.endDay,
            endMonth: formData?.endMonth,
            endYear: formData?.endYear
        } 
    })
    const watchAllFields = watch();
    
    function prevPage() {
        navigate("/2")
    }

    function checkIsValid(e: React.FocusEvent<HTMLElement>) {
        if (
            typeof watchAllFields.startYear !== "undefined" &&
            typeof watchAllFields.startMonth !== "undefined" &&
            typeof watchAllFields.endMonth !== "undefined" &&
            typeof watchAllFields.endYear !== "undefined"
        ) {
            let start = new Date(watchAllFields.startYear, watchAllFields.startMonth - 1, watchAllFields.startDay)
            let end = new Date(watchAllFields.endYear, watchAllFields.endMonth - 1, watchAllFields.endDay)
            if (end.getTime() - start.getTime() < 0) {
                setError("notRegisteredInput", { type: "custom", message: "The start day cannot be later than the end day. " })
            } else {
                clearErrors("notRegisteredInput")
            }
        }
    }

    function dayRange(month: number | undefined, year: number | undefined, value: number | undefined) {
        if (
            typeof value !== "undefined" &&
            typeof month !== "undefined" &&
            typeof year !== "undefined"
            ) {
            if (month === 2) {
                if (year % 4 === 0) {
                    if (value > 29) {
                        return "Out of range 29"
                    }
                } else {
                    if (value > 28) {
                        return "Out of range 28"
                    }
                }
            } else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
                if (value > 31) {
                    return "Out of range 31"
                }
            } else {
                if (value > 30) {
                    return "Out of range 30"
                }
            }
        }   
    }
    
    function saveThirdForm(data: Partial<AllFormType>) {
        handleData(data)
        alert(JSON.stringify(formData))
    }
    
    return (
        <form onSubmit={handleSubmit(saveThirdForm)}>

            <Box sx={{
                display: "flex",
                gap: "13px"
            }}>
                <TextField
                    id="outlined-number"
                    label="Day"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    style={{ width: "70px" }}
                    {...register("startDay", {
                        required: "Required",
                        min: {
                            value: 1,
                            message: "Out of range"
                        },
                        onBlur: (e) => checkIsValid(e),
                        validate: (val: number | undefined) => {
                            return dayRange(watch("startMonth"), watch("startYear"), val)
                        }
                    })}
                    error={!!errors.startDay}
                    helperText={typeof errors?.startDay?.message === "string" && errors?.startDay?.message}
                />
                <TextField
                    id="outlined-number"
                    label="Month"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    style={{ width: "70px" }}
                    {...register("startMonth", {
                        required: "Required",
                        max: {
                            value: 12,
                            message: "Out of range"
                        },
                        min: {
                            value: 1,
                            message: "Out of range"
                        },
                        onBlur: (e) => checkIsValid(e)
                    })}
                    error={!!errors.startMonth}
                    helperText={typeof errors?.startMonth?.message === "string" && errors?.startMonth?.message}
                />
                <TextField
                    id="outlined-number"
                    label="Year"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    style={{ width: "90px" }}
                    {...register("startYear", {
                        required: "Required",
                        max: {
                            value: getTimeNums().year + 5,
                            message: "Out of range"
                        },
                        min: {
                            value: getTimeNums().year,
                            message: "Out of range"
                        },
                        onBlur: (e) => checkIsValid(e)
                    })}
                    error={!!errors.startYear}
                    helperText={typeof errors?.startYear?.message === "string" && errors?.startYear?.message}
                />
            </Box>

            <Box sx={{
                display: "flex",
                gap: "13px"
            }}>
                <TextField
                    id="outlined-number"
                    label="Day"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    style={{ width: "70px" }}
                    {...register("endDay", {
                        required: "Required",
                        min: {
                            value: 1,
                            message: "Out of range"
                        },
                        onBlur: (e) => checkIsValid(e),
                        validate: (val: number | undefined) => {
                            return dayRange(watch("startMonth"), watch("startYear"), val)
                        }
                    })}
                    error={!!errors.endDay}
                    helperText={typeof errors?.endDay?.message === "string" && errors?.endDay?.message}
                />
                <TextField
                    id="outlined-number"
                    label="Month"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    style={{ width: "70px" }}
                    {...register("endMonth", {
                        required: "Required",
                        max: {
                            value: 12,
                            message: "Out of range"
                        },
                        min: {
                            value: 1,
                            message: "Out of range"
                        },
                        onBlur: (e) => checkIsValid(e)
                    })}
                    error={!!errors.endMonth}
                    helperText={typeof errors?.endMonth?.message === "string" && errors?.endMonth?.message}
                />
                <TextField
                    id="outlined-number"
                    label="Year"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    style={{ width: "90px" }}
                    {...register("endYear", {
                        required: "Required",
                        max: {
                            value: getTimeNums().year + 5,
                            message: "Out of range"
                        },
                        min: {
                            value: getTimeNums().year,
                            message: "Out of range"
                        },
                        onBlur: (e) => checkIsValid(e)
                    })}
                    error={!!errors.endYear}
                    helperText={typeof errors?.endYear?.message === "string" && errors?.endYear?.message}
                />
            </Box>

                <p style={{color:"red", fontSize:"13px"}}>{errors?.notRegisteredInput?.message}</p>

            <ButtonGroup>
                <Button onClick={prevPage}>Previous</Button>
                <Button variant="contained" type="submit">Submit</Button>
            </ButtonGroup>
        </form>
    )
}
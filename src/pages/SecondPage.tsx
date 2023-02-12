import { useContext, useState, useEffect } from "react"
import { useForm, Controller } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { MultiPageFormContext } from "../context/MultiPageContext"
import { AllFormType } from "../context/MultiPageContext"

import { TextField, Button, ButtonGroup, Checkbox, FormControlLabel, MenuItem, Container } from "@mui/material"

interface selectedType {
    [key: string]: string[];
}

const selectInputData: selectedType = {
    A: ["A1", "A2", "A3"],
    B: ["B1", "B2", "B3"],
    C: ["C1", "C2", "C3"],
}


export default function SecondPage() {

    const { formData, handleData } = useContext(MultiPageFormContext);
    const { register, handleSubmit, formState: { errors }, watch, control } = useForm<Partial<AllFormType>>(
        {
            defaultValues: {
                primarySelect: formData?.primarySelect,
                secondarySelect: formData?.secondarySelect,
                agree: formData?.agree,
                email: formData?.email
            }
        }
    )
    const [renderArray, setRenderArray] = useState<Array<string>>(() => {
        return (
            formData?.primarySelect ?
                selectInputData[formData.primarySelect] :
                selectInputData.A
        )
    })
    const watchSecondarySelect = watch("secondarySelect", "A1")
    const watchAgree = watch("agree")


    const navigate = useNavigate();

    useEffect(() => {

    }, [watchSecondarySelect])

    function saveSecondForm(data: Partial<AllFormType>) {
        if (data.agree) {
            handleData(data)
        } else if (!data.agree) {
            data = { ...data, email: "" }
            handleData(data)
        }
        navigate("/3")
    }

    function prevPage() {
        navigate("/")
    }

    function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        e.preventDefault()
        setRenderArray(selectInputData[e.target.value])

    }

    return (
        <form onSubmit={handleSubmit(saveSecondForm)}>

            <Container>
                <TextField
                    select
                    fullWidth
                    label="category"
                    defaultValue={formData?.primarySelect}
                    inputProps={register("primarySelect", {
                        required: true,
                        onChange: (e) => handleChange(e)
                    })}
                    error={!!errors.primarySelect}
                    helperText={errors.primarySelect?.message}>
                    {Object.keys(selectInputData).map(key => <MenuItem value={key}>{key}</MenuItem>)}
                </TextField>
            </Container>

            <Container>
                <TextField
                    select
                    fullWidth
                    label="sub-category"
                    defaultValue={formData?.secondarySelect}
                    inputProps={register("secondarySelect", {
                        required: true,
                    })}
                    error={!!errors.secondarySelect}
                    helperText={errors.secondarySelect?.message}>
                    {renderArray.map(item => <MenuItem value={item}>{item}</MenuItem>)}
                </TextField>
            </Container>

            <Container>

                <FormControlLabel
                    control={
                        <Controller
                            name="agree"
                            control={control}
                            render={({ field: props }) => (
                                <Checkbox
                                    {...props}
                                    checked={props.value}
                                    onChange={(e) => props.onChange(e.target.checked)}
                                />
                            )}
                        />
                    }
                    label="Agree"
                />
            </Container>

            <Container>
                {watchAgree && <TextField
                    type="email"
                    label="E-mail"
                    {...register("email", { required: true, shouldUnregister: true })}
                    placeholder="E-mail"
                />}
            </Container>

            <ButtonGroup variant="outlined" aria-label="text button group">
                <Button onClick={prevPage}>Previous</Button>
                <Button type="submit">Next</Button>
            </ButtonGroup>
        </form>
    )
}
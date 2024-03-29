import { useContext } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { MultiPageFormContext } from "../context/MultiPageContext"

import { TextField,Button } from "@mui/material"

import { firstPageType } from "../types"


export default function FirstPage() {

    const { formData, handleData } = useContext(MultiPageFormContext);
    const { register, formState: { errors }, watch, handleSubmit } = useForm<firstPageType>(
        {
            defaultValues: {
                firstName: formData?.firstName,
                lastName: formData?.lastName,
                password: formData?.password,
                confirmPassword: formData?.confirmPassword
            }
        }
    )
    const navigate = useNavigate();


    function saveFirstForm(data: firstPageType ) {
        handleData(data)
        navigate("/2")
    }


    return (

        <form onSubmit={handleSubmit(saveFirstForm)}>
            <TextField
                {
                ...register("firstName", {
                    minLength: {
                        value: 2,
                        message: "Name too short"
                    },
                    pattern: {
                        value: /^[A-Za-z]+$/,
                        message: "Name should contain only letter"
                    }

                })}
                label="First Name"
                error={!!errors.firstName}
                helperText={errors?.firstName?.message}
                variant="outlined"
                margin="normal"
            />

            <TextField
                {...register("lastName", {
                    minLength: {
                        value: 2,
                        message: "Name too short"
                    },
                    pattern: {
                        value: /^[A-Za-z]+$/,
                        message: "Name should contain only letter"
                    }
                })}
                label="Last name"
                error={!!errors.lastName}
                helperText={errors?.lastName?.message}
                variant="outlined"
                margin="normal"

            />

            <TextField
                type="password"
                {...register("password", {
                    minLength: {
                        value: 8,
                        message: "Password at least 8 letter"
                    }
                })}
                label="Password"
                error={!!errors.password}
                helperText={errors?.password?.message}
                variant="outlined"
                margin="normal"

            />

            <TextField
                type="password"
                {...register("confirmPassword", {
                    required: true,
                    validate: (val: string | undefined) => {
                        if (watch('password') != val) {
                            return "Your passwords do not match";
                        }
                    }
                })}
                label="Password"
                error={!!errors.confirmPassword}
                helperText={errors?.confirmPassword?.message}
                variant="outlined"
                margin="normal"
    
            />
            <Button variant="outlined" type="submit">Next</Button>
        </form>
    )
}
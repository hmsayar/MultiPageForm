import React from "react"
import { useForm, useFormContext, Resolver } from "react-hook-form"

export default function SecondPage(){

    const { register, handleSubmit, formState: { errors }, watch } = useForm()


    return(
        <h1>Hello</h1>
    )
}
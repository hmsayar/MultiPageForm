import { useContext } from "react"
import { useForm, Resolver } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { FirstFormValues } from "../types/myTypes"
import { MultiPageFormContext } from "../context/MultiPageContext"




export default function FirstPage() {

    const { register, formState: { errors }, watch, handleSubmit  } = useForm<FirstFormValues>()
    const {formData, handleData} = useContext(MultiPageFormContext);


    const navigate = useNavigate();


    function saveFirstForm(data:FirstFormValues){
        handleData(data)
        navigate("/2")
    }
    console.log(formData)


    return (

        <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit(saveFirstForm)}>
            <input
                {
                ...register("firstName")

                }
                placeholder="First name"
            />
            <p>{errors.firstName?.message}</p>

            <input
                {...register("lastName", { 
                    minLength: 2 
                })}
                placeholder="Last name"
            />
            <input
                type="password"
                {...register("password")}
                placeholder="Password"
            />

            <input
                type="password"
                {...register("confirmPassword", {
                    required: true,
                    validate: (val: string) => {
                        if (watch('password') != val) {
                            return "Your passwords do not match";
                        }
                    }
                })}
                placeholder="Password"
            />
           <p>{errors.confirmPassword?.message}</p>




            <button type="submit">Next</button>

        </form>
    )
}
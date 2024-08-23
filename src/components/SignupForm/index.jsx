import { useForm } from "react-hook-form";

const SignupForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const handleClearForm = () => reset();
    const handleSubmitForm = (data) => console.log(data)
    return (

        <form onSubmit={handleSubmit(handleSubmitForm)}>
            <label>
                Name
                <input {...register("name", { required: true })} />
            </label><br/>
            <label>
                Age
                <input type="number" {...register("age", { required: true })}/>
            </label><br/>
            <label>
                Address:
                <input  {...register("address", { required: true })} />
            </label><br/>
            <label>
                Zipcode:
                <input type="number" {...register("zipcode", { required: true })} />
            </label><br/>
            <label>
                Phone:
                <input  {...register("phone", { required: true })} />
            </label><br/>

            <label>
                {errors.name && <span>Name field is required</span>}
            </label>

            <div>
                <button onClick={handleClearForm}>Clear</button>
                <button type="submit">Signup</button>
            </div>
        </form>
    );
}

export default SignupForm;
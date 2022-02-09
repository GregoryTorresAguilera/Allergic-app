import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { JwtContext } from '../../shared/contexts/JwtContext';
import { API } from "../../shared/services/api";

export default function LoginPage () {
    const { register, handleSubmit } = useForm();
    const { setJwt } = useContext(JwtContext);

    const onSubmit = formData => {
        API.post('login', formData).then(res => {
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user', JSON.stringify(res.data.user))
            setJwt(res.data.token);
            console.log("prueba")
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <label htmlFor="email">Email</label>
            <input  id="email" defaultValue="contacto@abelcabezaroman.com"
                   {...register("email",{ required: true, pattern: /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/ })}/>
            {/* include validation with required or other standard HTML validation rules */}
            <label htmlFor="password">Password</label>
            <input  id="password" type="password" defaultValue={'ABCedf123'}
                   {...register("password",{
                       required: true,
                       pattern: /^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*_=+-]).{8,12}$/
                   })}/> {/* errors will return when field validation fails  */}
            {/*{errors.exampleRequired && <span>This field is required</span>}*/}

            <input type="submit" value="Login"/>
        </form>
    )
}

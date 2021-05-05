import React from 'react'
import {useForm} from 'react-hook-form'
import s from './Login.module.scss'


type FormType = {
    email: string
    password: string
}

const Login = () => {

    const {register, handleSubmit} = useForm<FormType>()

    const submitHandler = (data: FormType) => {
        console.log("FORM DATA:  ", data)
    }

    return (
        <div className={s.loginWrapper}>
            <div className={s.login}>
                <h4>LOG IN TO YOUR ACCOUNT</h4>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <div className={s.emailBlock}>
                        <input type="email" id="email" {...register('email')}/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className={s.passBlock}>
                        <input type="password" id="password" {...register('password')}/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <button>LOGIN</button>
                </form>
            </div>
        </div>
    )
}

export default Login;

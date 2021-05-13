import React from 'react'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'
import {useHistory} from 'react-router-dom'
import {setAuth} from '../../store/actions/authActions'
import {yupResolver} from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import cn from 'classnames'
import s from './Login.module.scss'


type FormType = {
    email: string
    password: string
}

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('incorrect').required('is required'),
    password: Yup.string().required('is required').min(8, 'length must be at least 8 characters')
});

const Login: React.FC = () => {
    const dispatch = useDispatch()
    const history = useHistory()


    const {register, handleSubmit, formState: {errors}} = useForm<FormType>({
        resolver: yupResolver(LoginSchema),
        defaultValues: {
            email: 'gmail@gmail.com',
            password: '00000000000'
        }
    })

    const submitHandler = (data: FormType) => {
        dispatch(setAuth({email: data.email, name: 'Artem', lastname: 'Pavlenko', auth: true}))
        history.push('/dashboard')
    }

    return (
        <div className={s.loginWrapper}>
            <div className={s.login}>
                <h4>LOG IN TO YOUR ACCOUNT</h4>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <div className={cn(s.emailBlock, {[s.error]: errors.email})}>
                        <input type="email" id="email" {...register('email')}/>
                        <label htmlFor="email">Email</label>
                        {errors.email?.message && <span>{errors.email.message}</span>}
                    </div>
                    <div className={cn(s.passBlock, {[s.error]: errors.password})}>
                        <input type="password" id="password" {...register('password')}/>
                        <label htmlFor="password">Password</label>
                        {errors.password?.message && <span>{errors.password.message}</span>}
                    </div>
                    <button>LOGIN</button>
                </form>
            </div>
        </div>
    )
}

export default Login;

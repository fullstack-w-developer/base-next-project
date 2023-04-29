import ContainerAuth from '@/components/auth/ContainerAuth'
import Input from '@/components/common/Input'
import Link from 'next/link'
import React from 'react'
import { useFormik } from "formik"
import { signUpValues } from '@/helpers/utills/initalVales'
import { signUpSchema } from '@/helpers/utills/validations'
import Button from '@/components/common/Button'
import useSignInMutation from '@/hooks/mutation/auth/useSignInMutation'
import useSignUpMutation from '@/hooks/mutation/auth/useSignUpMutation'
const Signup = () => {

    const { isLoading, mutate } = useSignUpMutation()
    const formik = useFormik({
        initialValues: signUpValues,
        validationSchema: signUpSchema,
        onSubmit: (values) => {
            mutate(values)
        }
    })

    const { email, first_name, last_name, password, repPassword, student_number } = formik.values
    return (
        <ContainerAuth>
            <div className='flex-1 flex flex-col justify-center  items-center  w-full'>
                <div className='min-w-[400px]'>
                    <form onSubmit={formik.handleSubmit} className='flex flex-col gap-14  h-full'>
                        <Input value={first_name} onChange={formik.handleChange} name='first_name' error={formik.touched.first_name && formik.errors.first_name} label='نام' />
                        <Input value={last_name} onChange={formik.handleChange} name='last_name' error={formik.touched.last_name && formik.errors.last_name} label='نام‌خانودگی' />
                        <Input ltr value={email} onChange={formik.handleChange} name='email' error={formik.touched.email && formik.errors.email} label='ایمیل' />
                        <Input ltr value={student_number} onChange={formik.handleChange} name='student_number' error={formik.touched.student_number && formik.errors.student_number} label='شماره دانشجویی' />
                        <Input type='password' ltr value={password} onChange={formik.handleChange} name='password' error={formik.touched.password && formik.errors.password} label='رمز عبور' />
                        <Input type='password' ltr value={repPassword} onChange={formik.handleChange} name='repPassword' error={formik.touched.repPassword && formik.errors.repPassword} label='تکرار رمز عبور' />
                        <Button type='submit' isLoading={isLoading} name='ثبت نام' />
                    </form>
                    <p className='text-[#626262] pt-10'>آیا قبلا ثبت نام کرده اید؟   <Link className='font-[700] text-main' href={"/auth.login"}>ثبت نام</Link></p>
                </div>
            </div>
        </ContainerAuth>

    )
}

export default Signup
import ContainerAuth from '@/components/auth/ContainerAuth'
import Button from '@/components/common/Button'
import Input from '@/components/common/Input'
import { signInValues } from '@/helpers/utills/initalVales'
import { signInSchema } from '@/helpers/utills/validations'
import useSignInMutation from '@/hooks/mutation/auth/useSignInMutation'
import { useFormik } from 'formik'
import Link from 'next/link'
import React from 'react'

const Signin = () => {
    const { isLoading, mutate } = useSignInMutation()
    const formik = useFormik({
        initialValues: signInValues,
        validationSchema: signInSchema,
        onSubmit: (values) => {
            mutate(values)
        }
    })

    const { password, student_number } = formik.values
    return (
        <ContainerAuth>

            <div className='flex-1 flex flex-col justify-center  items-center  w-full'>
                <div className='min-w-[400px]'>

                    <form onSubmit={formik.handleSubmit} className='flex flex-col gap-14  h-full'>
                        <div>
                            <h1 className='font-[800] text-3xl'>ورود</h1>
                            <p className='text-[#a7a7a7] pt-3'>برای ورود شماره دانشجویی و رمز عبور خود را وارد کنید</p>
                        </div>
                        <Input ltr name='student_number' error={formik.touched.student_number && formik.errors.student_number} onChange={formik.handleChange} value={student_number} label='شماره دانشجویی' />
                        <Input type='password' ltr name='password' error={formik.touched.password && formik.errors.password} onChange={formik.handleChange} value={password} label='رمز عبور' />
                        <Button type="submit" name='ورود' isLoading={isLoading} />
                    </form>
                    <p className='text-[#626262] pt-10'>آیا تاکنون وارد سایت نشدی؟ <Link className='font-[700] text-main' href={"/auth.login"}>ثبت نام</Link></p>
                </div>
            </div>
        </ContainerAuth>

    )
}

export default Signin
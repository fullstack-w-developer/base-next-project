import { RtlProvider } from '@/theme/RtlProvider'
import { TextField } from '@mui/material'
import React from 'react'
interface Props {
    label: string;
    value: string;
    onChange: any;
    error?: string | false | undefined | any;
    name: string;
    ltr?: boolean;
    type?: string
}
const Input = ({ label, value, onChange, error, name, ltr, type }: Props) => {
    return (
        <RtlProvider>
            <TextField
                type={type}
                value={value}
                onChange={onChange}
                className={`!min-w-full ${ltr ? "ltr" : ""}`}
                error={error ? true : false}
                id="outlined-error"
                label={label}
                helperText={error ? <p className='!text-[11px] !-mr-4'>{error}</p> : ""}
                name={name}
            />
        </RtlProvider>
    )
}

export default Input
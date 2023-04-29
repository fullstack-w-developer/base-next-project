import useConfigureQueryClient from '@/hooks/common/useConfigureQueryClient';
import React, { ReactNode } from 'react'
import { ToastContainer } from "react-toast"
import { QueryClientProvider } from 'react-query';
interface GlobalContextProviderProps {
    children?: ReactNode;
}

const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
    const queryClient = useConfigureQueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ToastContainer delay={8000} position='top-right' />
        </QueryClientProvider>

    )
}

export default GlobalContextProvider
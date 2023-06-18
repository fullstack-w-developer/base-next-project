"use client";
import React, { ReactNode } from "react";
import { ToastContainer } from "react-toast";
import { QueryClientProvider } from "react-query";
import useConfigureQueryClient from "@/hooks/common/useConfigureQueryClient";
import useVerifyAuth from "@/hooks/global/useVerifyAuth";
interface GlobalContextProviderProps {
    children?: ReactNode;
}

const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
    const queryClient = useConfigureQueryClient();
    useVerifyAuth();
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ToastContainer delay={8000} position="top-right" />
        </QueryClientProvider>
    );
};

export default GlobalContextProvider;

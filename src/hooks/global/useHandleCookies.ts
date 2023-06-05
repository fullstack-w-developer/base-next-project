"use client"
import axios from "@/services/utils/axios";
import useAuthStore from "@/stores/auth-store";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

const useHandleCookies = () => {
    const setAuthLoading = useAuthStore((s) => s.setAuthLoading);
    const removeUser = useAuthStore((s) => s.removeUser);
    const [cookies, _, removeCookies] = useCookies(["token", "jwt"]);
    const { pathname, push } = useRouter();

    useEffect(() => {
        if (!cookies.jwt || !cookies.token) {
            delete axios.defaults.headers.common["Authorization"];
            removeCookies("token", { path: "/" });
            removeUser();
        }
        if (pathname === "/" && cookies.token && cookies.jwt) {
            setAuthLoading(true);
            push("/dashboard").then(() => {
                setAuthLoading(false);
            });
            return;
        }
    }, [cookies.jwt, cookies.token]);
};

export default useHandleCookies;

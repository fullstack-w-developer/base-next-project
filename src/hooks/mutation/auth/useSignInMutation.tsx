import { useMutation } from "react-query";
import { SignInFormData, SignUpFormData } from "@/types/Auth/form";
import { useCookies } from "react-cookie";
import { AxiosError } from "axios";
import axios from "@/services/utils/axios";
import useAuthStore from "@/stores/auth-store";
import { useRouter } from "next/router";
import { errorToast, successToast } from "@/helpers/utills/error";
import { login } from "@/services/utils/auth";

type SignInMutation = SignInFormData;

const useSignInMutation = () => {
    const [, setCookies] = useCookies(["token", "jwt"]);
    const setUser = useAuthStore((s) => s.setUser);
    const { push } = useRouter();
    return useMutation(async (data: SignInMutation) => await login(data), {
        onSuccess: async function ({ message, data, status }) {
            if (status) {
                const { token, user } = data
                setCookies("token", data.token, { path: "/" });

                axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

                setUser({ user });
                successToast(message);
                if (user.role === "ADMIN") {
                    push("/admin");
                } else {
                    push("/");
                }

            }
        },
        onError: async function (error) {
            errorToast((error as AxiosError<any>)?.response?.data.message);
        },
    });
};

export default useSignInMutation;

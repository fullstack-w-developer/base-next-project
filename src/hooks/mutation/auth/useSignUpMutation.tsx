import { useMutation } from "react-query";
import { SignUpFormData } from "@/types/Auth/form";
import { useCookies } from "react-cookie";
import { AxiosError } from "axios";
import axios from "@/services/utils/axios";
import useAuthStore from "@/stores/auth-store";
import { useRouter } from "next/router";
import { signUp } from "@/services/utils/auth";
import { errorToast, successToast } from "@/helpers/utills/error";

type SignUpMutation = SignUpFormData;

const useSignUpMutation = () => {

    const { push } = useRouter();
    return useMutation(async (data: SignUpMutation) => await signUp(data), {
        onSuccess: async function ({ message, status }) {
            if (status) {
                successToast(message);
                push("/");
            }
        },
        onError: async function (error) {
            errorToast((error as AxiosError<any>)?.response?.data.message);
        },
    });
};

export default useSignUpMutation;

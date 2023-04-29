import { SignInFormData, SignUpFormData } from "@/types/Auth/form";
import { getRoute } from "@/types/services";
import routes from "@/helpers/routes/apiRoutes";
import client from "./client";
import { LogInReceiveResponse } from "@/types/Auth/LoginReceiveResponse";
import { SignUpReceiveResponse } from "@/types/Auth/SignUpReceiveResponse";

type SignInBodyRequest = SignInFormData;
type SignUpBodyRequest = SignUpFormData;

export const login = async (data: SignInBodyRequest) => {
    const url = getRoute({ route: routes.auth.login });
    return await client<LogInReceiveResponse>({ url, method: "POST", data });
};
export const signUp = async (data: SignUpBodyRequest) => {
    const url = getRoute({ route: routes.auth.register });
    return await client<SignUpReceiveResponse>({ url, method: "POST", data });
};

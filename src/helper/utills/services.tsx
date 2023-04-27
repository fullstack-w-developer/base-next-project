import { AxiosRequestConfig } from "axios";
import { IS_SERVER } from "../constans/constans";

export const logRequestedUrl = ({ baseURL, method, url }: AxiosRequestConfig) => {
    if (baseURL && inDevEnvironment) {
        const fullUrl = baseURL + url;
        const str = method?.toUpperCase() + " " + fullUrl;
        if (IS_SERVER) {
            console.log("\x1b[36m%s\x1b[0m", str);
        } else {
            console.log(`%c${str}`, "color: #16ffff");
        }
    }
};

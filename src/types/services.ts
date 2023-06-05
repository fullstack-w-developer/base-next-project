import { AxiosRequestConfig } from "axios";
import { Required } from "utility-types";

export type ConfigUrlRequired = Required<AxiosRequestConfig, "url">;

export type ClientOverload = {
    <D = any>(urlAndConfig: ConfigUrlRequired): Promise<D>;
    <D, F>(urlAndConfig: ConfigUrlRequired, formatter: (data: D) => F): Promise<F>;
};

export const getRoute = ({ route, query, ...rest }: GetRouteProps) => {
    let url = route;

    if (Object.keys({ ...rest }).length) {
        url = formatUnicorn(route, { ...rest });
    }

    if (query) {
        const queries = generateQueries(query);
        url = url + queries;
    }

    return url;
};

export type QueryParams = {
    ids?: number[];
    page?: number;
    limit?: number;
    sort?: string;
    order?: "asc" | "desc" | string;
    q?: string;
    [key: string]: any;
};

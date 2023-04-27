import { AxiosRequestConfig } from "axios";
import { Required } from "utility-types";

export type ConfigUrlRequired = Required<AxiosRequestConfig, "url">;

export type ClientOverload = {
    <D = any>(urlAndConfig: ConfigUrlRequired): Promise<D>;
    <D, F>(urlAndConfig: ConfigUrlRequired, formatter: (data: D) => F): Promise<F>;
};

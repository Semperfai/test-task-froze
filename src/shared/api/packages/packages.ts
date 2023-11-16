import type { AxiosPromise } from "axios";
import { apiInstance } from "./base";

const BASE_URL = "/search";

export type GetPackagesListParams = {
    q: string;
    size?: number;
    from?: number;
};

export const getPackagesListByName = (
    params?: GetPackagesListParams,
): AxiosPromise<any[]> => {
    return apiInstance.get(BASE_URL, { params });
};

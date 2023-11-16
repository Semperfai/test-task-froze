import { packagesApi } from "shared/api";

export const NAMESPACE = "Packages";

const IS_NAMESPACED = true;

export const initialState: Record<string, any> = [];

export const module = {
    namespaced: IS_NAMESPACED,
    state: {
        data: initialState,
        total: 0,
        isListLoading: false,
        isDetailsLoading: false,
    },
    getters: {},
    mutations: {
        setPackagesList: (state: any, response: any) => {
            state.data = response?.data?.results;
            state.total = response?.data?.total;
        },
        setListLoading: (state: any, isLoading: any) => {
            state.isListLoading = isLoading;
        },
        setDetailsLoading: (state: any, isLoading: any) => {
            state.isDetailsLoading = isLoading;
        },
    },
    actions: {
        getPackagesListAsync: async (
            { commit }: any,
            params: packagesApi.packages.GetPackagesListParams,
        ) => {
            commit("setListLoading", true);
            try {
                commit(
                    "setPackagesList",
                    await packagesApi.packages.getPackagesListByName(params),
                );
            } finally {
                commit("setListLoading", false);
            }
        },
    },
};

const withPrefix = (name: string) =>
    IS_NAMESPACED ? `${NAMESPACE}/${name}` : name;

export const actions = {
    getPackagesListAsync: withPrefix("getPackagesListAsync"),
};

export const getters = {};

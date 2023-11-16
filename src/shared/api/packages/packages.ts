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
): AxiosPromise<ApiResponse> => {
  return apiInstance.get(BASE_URL, { params });
};

export interface ApiResponse {
  data: Data;
  status: number;
  statusText: string;
  headers: Headers;
  config: Config;
  request: any;
}

interface Data {
  total: number;
  results: Result[];
}

interface Result {
  package: Package;
  score: Score;
  searchScore: number;
  flags?: Flags;
}

interface Package {
  name: string;
  scope: string;
  version: string;
  description: string;
  date: string;
  links: Links;
  publisher: Publisher;
  maintainers: Maintainer[];
  author?: Author;
  keywords?: string[];
}

interface Links {
  npm: string;
}

interface Publisher {
  username: string;
  email: string;
}

interface Maintainer {
  username: string;
  email: string;
}

interface Author {
  name: string;
  email: string;
}

interface Score {
  final: number;
  detail: Detail;
}

interface Detail {
  quality: number;
  popularity: number;
  maintenance: number;
}

interface Flags {
  unstable: boolean;
}

interface Headers {
  'content-type': string;
}

interface Config {
  transitional: Transitional;
  adapter: string[];
  transformRequest: any[];
  transformResponse: any[];
  timeout: number;
  xsrfCookieName: string;
  xsrfHeaderName: string;
  maxContentLength: number;
  maxBodyLength: number;
  env: any;
  headers: ConfigHeaders;
  baseURL: string;
  params: Params;
  method: string;
  url: string;
}

interface Transitional {
  silentJSONParsing: boolean;
  forcedJSONParsing: boolean;
  clarifyTimeoutError: boolean;
}

interface ConfigHeaders {
  Accept: string;
}

interface Params {
  q: string;
  size: number;
  from: number;
}

import {AxiosRequestConfig, AxiosResponse} from 'axios';
import {axiosClient} from '../config/axios';

export interface ApiResponse<data = unknown> {
  data: data;
  status: 'ok' | 'error';
}

export async function get<T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> {
  return axiosClient.get<T>(url, config);
}

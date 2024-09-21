import { AxiosError } from 'axios';
import apiClient from './axios';

type ApiErrorResponse = {
  message: string;
};

export class BaseClass {
  protected $api: typeof apiClient;

  constructor() {
    this.$api = apiClient;
  }

  throwError(error: unknown) {
    const axiosError = error as AxiosError<ApiErrorResponse>;
    throw new Error(
      axiosError.response?.data?.message || 'An unknown error occurred'
    );
  }
}

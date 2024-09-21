import { useRefreshToken } from '@/hooks';
import axios from 'axios';
import Cookies from 'js-cookie';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

apiClient.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get('access_token');
    // проверка токена на истечение срока
    if (accessToken) {
      const decodedToken = JSON.parse(atob(accessToken.split('.')[1]));
      const currentTime = Math.floor(Date.now() / 1000);
      if (decodedToken.exp < currentTime) {
        Cookies.remove('access_token');
        useRefreshToken();
        // return Promise.reject(new Error('Token expired'));
      } else {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.request.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (
      (error.response && error.response.status === 400) ||
      (error.response.status === 401 && !originalRequest._retry)
    ) {
      originalRequest._retry = true;
      try {
        const accessToken = await useRefreshToken();
        apiClient.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${accessToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
        return apiClient(originalRequest);
      } catch (refreshError) {
        console.log('Ошибка при обновлении токенов:', refreshError);
        throw refreshError;
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;

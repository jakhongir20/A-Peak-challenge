import apiClient from '@/services/axios';
import Cookies from 'js-cookie';

export async function useRefreshToken() {
  const refreshToken = Cookies.get('refresh_token');
  if (refreshToken) {
    try {
      const res = await apiClient.post('auth/refresh-token', {
        refresh_token: refreshToken,
      });
      Cookies.set('access_token', res.data.token, { expires: 50 / 1440 });
      Cookies.set('refresh_token', res.data.refresh_token);
      return res.data.access;
    } catch (error) {
      console.log('Ошибка обновления токенов', error);
      throw error;
    }
  } else {
    throw new Error('Требуется вход в систему');
  }
}

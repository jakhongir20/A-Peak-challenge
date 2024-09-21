export interface IRegister {
  email: string;
  username: string;
  password: string;
  password2?: string;
}
export interface ILogin {
  username: string;
  password: string;
}

export interface IUser {
  id: number;
  username: string;
  email: string;
  roles: string[];
}

export interface IAccessToken {
  accessToken: string | null;
}

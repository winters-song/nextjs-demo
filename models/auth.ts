
export interface IAuthStore {
  logged?: boolean;
  user?: IUser;
  email: string;
}

export interface IUser {
  token: string;
  icon: string;
  userId: number;
  nickName: string;
}
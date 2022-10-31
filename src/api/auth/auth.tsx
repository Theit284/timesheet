import { IError } from "../../interfaces/type";

export interface IFormLoginRequest {
  userNameOrEmailAddress: string;
  password: string;
  rememberClient: boolean;
}

export interface IFormLoginResponse {
  result: {
    accessToken: string;
    encryptedAccessToken: string;
    expireInSeconds: number;
    userId: number;
  };
  error: IError;
  success: boolean;
}


export interface IAuthState {
  progress: string;
  user: {
    accessToken: string;
  };
  error: IError;
  success: boolean;
}


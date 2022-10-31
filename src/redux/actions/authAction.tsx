import { createAsyncThunk } from "@reduxjs/toolkit";
import getAuthenticateApi from "../../api/auth/auh";
import { IFormLoginRequest, IFormLoginResponse} from "../../api/auth/auth";




export const getAuthenticate = createAsyncThunk(
  "auth/Authenticate",
  async ({
    userNameOrEmailAddress,
    password,
    rememberClient,
  }: IFormLoginRequest) => {
    const response = {...await getAuthenticateApi({
      userNameOrEmailAddress,
      password,
      rememberClient,
    })};
    return response;
  }
);

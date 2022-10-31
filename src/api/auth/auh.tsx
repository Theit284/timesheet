
import { postApi } from "../../utils/apiHelper";
import { IFormLoginRequest, IFormLoginResponse } from "./auth";


const getAuthenticateApi = async ({
  userNameOrEmailAddress,
  password,
  rememberClient,
}: IFormLoginRequest) => {
  const data = await postApi<IFormLoginRequest, IFormLoginResponse>(
    `/TokenAuth/Authenticate`,
    { userNameOrEmailAddress, password, rememberClient }
  );
  return data;
};

export default getAuthenticateApi;
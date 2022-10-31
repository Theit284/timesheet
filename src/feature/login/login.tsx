import { Button, TextField, Checkbox } from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/store";
import { IFormLoginRequest } from "../../api/auth/auth";
import { getAuthenticate } from "../../redux/actions/authAction";


const StyleCheckBox = styled.div`
  display: flex;
  margin-top: 15px;
`;

const LoginTimesheet = styled.div`
  background: #00bcd4;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 30px;
  text-align: center;
`;

const MyTimesheet = styled.div`
  width: 30%;
`;

const TitleError = styled.div`
  color: red;
`;

const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 50px;
  gap: 20px;
  border-radius: 10px;
`;

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLoginRequest>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const accessToken = useSelector(
    (state: RootState) => state.auth.user.accessToken
  );
  const progress = useSelector(
    (state: RootState) => state.auth.progress
  );
 
  const onLogin = async (data: IFormLoginRequest) => {
    const payload = {
    userNameOrEmailAddress : data.userNameOrEmailAddress,
    password: data.password,
    rememberClient: false,
  } as IFormLoginRequest
    dispatch(
        getAuthenticate(payload)
    );
  };

  useEffect(() => {
    if (accessToken) {
     navigate("/home");
    }
  }, [accessToken, navigate]);
  return (
    <LoginTimesheet>
      <MyTimesheet>
        <Title>My Timesheet</Title>
        <FormLogin onSubmit={handleSubmit(onLogin)}>
          <TextField
            id="standard-basic"
            label="Username"
            {...register("userNameOrEmailAddress", { required: true })}
          />
          {errors.userNameOrEmailAddress && (
            <TitleError>This field is required</TitleError>
          )}
          <TextField
            id="standard-basic"
            label="Password"
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && <TitleError>This field is required</TitleError>}
          <StyleCheckBox>
            <Checkbox
              style={{ textAlign: "left" }}
              {...register("rememberClient")}
            />
            <p>Remember me</p>
          </StyleCheckBox>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ width: "50%", left: "25%" }}
          >
            Login
          </Button>
        </FormLogin>
      </MyTimesheet>
    </LoginTimesheet>
  );
};

export default Login;
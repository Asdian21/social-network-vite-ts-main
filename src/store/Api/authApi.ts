import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";
import { IUser } from "../userSlice";

interface IRegistrationUserPayload {
  name: string;
  email: string;
  phone_number: string;
  password: string;
  user_city: string;
}

interface IRegisterUserResponse {
  status: number;
  user_id: number;
}

interface ILoginUserPayload {
  email: string;
  password: string;
}

interface ILoginUserResponse extends IRegisterUserResponse {

} 

interface IGetUserResponse {
  status: 1;
  message: IUser;
}

interface IChangeProfilePayload {
  user_id: number;
  change_info: string;
  new_data: string;
}

export const authApi = createApi({
  // можно создать четыре ключа - для регистрации, получении данных юзера, логина и изменении профиля
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }), // базовый url, который мы вынесли в utilits и импортировали сюда
  endpoints: (builder) => ({
    registerUser: builder.mutation<
      IRegisterUserResponse,
      IRegistrationUserPayload
    >({
      query: (payload) => ({
        url: "/registration", // окончание к baseUrl
        method: "POST",
        body: payload, // данные, которые будут отправляться на backend в виде объекта, которые хранятся в interface
      }),
    }),
    loginUser: builder.mutation<ILoginUserResponse, ILoginUserPayload>({
      query: (payload) => ({
        url: "/login", // окончание к baseUrl
        method: "POST",
        body: payload,
      }),
    }),
    getUser: builder.query<IGetUserResponse, string>({
      query: (userId) => `/user?user_id=${userId}`,
    }),
    changeUser: builder.mutation<string, IChangeProfilePayload>({
      query: (payload) => ({
        url: "/change-profile",
        method: "PUT",
        body: payload,
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetUserQuery,
} = authApi;


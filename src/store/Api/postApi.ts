import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";

interface IPost {
  main_text: string;
  user_id: number;
  id: number;
  reg_date: string;
  user_fk: {
    user_city: string;
    phone_number: string;
    reg_date: string;
    email: string;
    id: number;
    name: string;
    password: string;
  };
  photos: string[];
  comments: string[];
}

interface IGetPostResponse {
  status: number;
  message: IPost[];
}

interface IRegisterUserResponse {
  status: number;
  user_id: number;
}

interface INewPostUserPayload {
  email: string;
  password: string;
}

interface INewPostUserResponse extends IRegisterUserResponse {}

interface IPutProfilePayload {
  user_id: number;
  change_info: string;
  new_data: string;
}

interface IDeleteUserPostResponse extends IGetPostResponse {}

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getPostList: builder.query<IGetPostResponse, null>({
      query: (postId) => `/post?post_id=${postId}`,
    }),
    newPostUser: builder.mutation<INewPostUserResponse, INewPostUserPayload>({
      query: (payload) => ({
        url: "/post",
        method: "POST",
        body: payload,
      }),
    }),
    putPostUser: builder.mutation<string, IPutProfilePayload>({
      query: (payload) => ({
        url: "/change-profile",
        method: "PUT",
        body: payload,
      }),
    }),
    deleteUserPost: builder.mutation<IDeleteUserPostResponse, string>({
      query: (payload) => ({
        url: "/delete",
        method: "DELETE",
        body: payload,
      }),
    }),
  }),
});

export const {
  useGetPostListQuery,
  useLazyGetPostListQuery,
  useNewPostUserMutation,
  usePutPostUserMutation,
  useDeleteUserPostMutation,
} = postApi;

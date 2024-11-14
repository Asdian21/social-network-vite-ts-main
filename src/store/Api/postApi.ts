import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";

export interface IPost {
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

interface IGetPostListResponse {
  status: number;
  message: IPost[];
}
interface IGetPostListByIdResponse {
  status: number;
  message: IPost;
}
interface IAddPostPayload {
  user_id: number;
  main_text: string;
}
interface IAddPostResponse {
  status: number;
  post_id: number;
}
interface IEditPostPayload {
  post_id: number;
  new_text: string;
}
interface IEditPostResponse {
  status: number;
  message: string;
}
export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getPostList: builder.query<IGetPostListResponse, null>({
      query: () => `/post`,
    }),
    getPostListById: builder.query<IGetPostListByIdResponse, string>({
      query: (postId) => `post?post_id=${postId}`,
    }),
    addNewPost: builder.mutation<IAddPostResponse, IAddPostPayload>({
      query: (payload) => ({
        url: "/post",
        method: "POST",
        body: payload,
      }),
    }),
    editPost: builder.mutation<IEditPostResponse, IEditPostPayload>({
      query: (payload) => ({
        url: "/post",
        method: "PUT",
        body: payload,
      }),
    }),
    deletePost: builder.mutation<any, any>({
      query: () => ({
        url: "/post",
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetPostListQuery,
  useLazyGetPostListQuery,
  useLazyGetPostListByIdQuery,
  useAddNewPostMutation,
  useDeletePostMutation,
} = postApi;

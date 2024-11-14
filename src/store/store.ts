// Это банк, в котором есть разные ячейки, с разными действиями. Слайсы объединяются здесь.
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import { authApi } from "./Api/authApi";
import { postApi } from "./Api/postApi";

export const store = configureStore({
  reducer: {
    userSlice,
    [authApi.reducerPath]: authApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware, postApi.middleware]),
});

// middleware - некоторая инструкция для backend?, которая обрабатывает данные

// Для типизации и подсказок добавляем эти строки:

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

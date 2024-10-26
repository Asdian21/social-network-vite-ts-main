import { createSlice } from "@reduxjs/toolkit";

export interface IUser {
  mail: string;
  phone_number: string;
  user_id: number;
  name: string;
  reg_date: string;
  city: string;
}

export interface IUserStateProps {
  user: null | IUser; // Здесь будет храниться либо пустое значение, либо значения из IUser
}

export const initialState: IUserStateProps = {
  user: null,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    changeUser(state, action) {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer; // Дефолтно экспортируем объект с помощью редюсера
export const { changeUser } = userSlice.actions; // Деструктуризируем объект на отдельные значения для actions

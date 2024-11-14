import { useNavigate } from "react-router-dom";
import { Heading } from "../../components/Header/Heading";
import * as yup from "yup";
import { Linktext } from "../../components/Header/Typography/LinkText/Linktext";
import { Button } from "../../components/UI/Button/Button";
import { Container } from "../../components/UI/Container/container.style";
import { RegistrationInfo } from "../../components/UI/RegistrationInfo/RegistrationInfo";
import { Input } from "../../components/UI/Input/InputWord";
import { StyleRegistrationPage } from "./RegistrationPage.style";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRegisterUserMutation } from "../../store/Api/authApi";
import { useEffect } from "react";

interface IRegistrationForm {
  username: string;
  useremail: string;
  userphone: string;
  userpassword: string;
  usercity: string;
}
//   "name": "string",
//   "email": "string",
//   "phone_number": "string",
//   "password": "string",
//   "user_city": "string"

const registrationFormSchema = yup.object({
  username: yup.string().required("Обязательное поле"),
  useremail: yup.string().required("Обязательное поле"),
  userphone: yup
    .string()
    .required("Обязательное поле")
    .matches(/^\+?[0-9]{10,15}$/, "Некорректный номер телефона"),
  userpassword: yup
    .string()
    .required("Обязательное поле")
    .min(4, "Пароль должен содержать не менее 4 символов"),
  usercity: yup.string().required("Обязательное поле"),
});

export const RegistrationPage = () => {
  const navigate = useNavigate();
  const [registrationUser, { data: newData,isLoading,isSuccess }] = useRegisterUserMutation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationForm>({
    resolver: yupResolver(registrationFormSchema),
    defaultValues: {
      username: "",
      useremail: "",
      userphone: "",
      userpassword: "",
      usercity: "",
    },
  });

  const onRegisterSubmit: SubmitHandler<IRegistrationForm> = (data) => {
    registrationUser({
      name: data.username,
      email: data.useremail,
      phone_number: data.userphone,
      password:data.userpassword,
      user_city:data.usercity,
    });
  };


  return (
    <Container>
      {isLoading&& <div>Загрузка,,,</div>}
      <StyleRegistrationPage>

        <Heading headingText="Регистрация" />
        <form onSubmit={handleSubmit(onRegisterSubmit)}>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <Input
                type="text"
                placeholder="Ваще имя"
                errorText={errors.username?.message}
                isError={!!errors.username}
                {...field}
              />
            )}
          />
          <Controller
            name="useremail"
            control={control}
            render={({ field }) => (
              <Input
                type="text"
                placeholder="Электронная почта"
                errorText={errors.useremail?.message}
                isError={!!errors.useremail}
                {...field}
              />
            )}
          />
          <Controller
            name="userphone"
            control={control}
            render={({ field }) => (
              <Input
                type="tel"
                placeholder="Номер телефона"
                errorText={errors.userphone?.message}
                isError={!!errors.userphone}
                {...field}
              />
            )}
          />
          <Controller
            name="userpassword"
            control={control}
            render={({ field }) => (
              <Input
                type="password"
                placeholder="Пароль"
                errorText={errors.userpassword?.message}
                isError={!!errors.userpassword}
                {...field}
              />
            )}
          />
          <Controller
            name="usercity"
            control={control}
            render={({ field }) => (
              <Input
                type="password"
                placeholder="Ваш город"
                errorText={errors.usercity?.message}
                isError={!!errors.usercity}
                {...field}
              />
            )}
          />
          <Button isPrimary buttonText="Зарегистрироваться" />
        </form>
        <Linktext
          regularText="Уже есть аккаунт?"
          linkText="Войти"
          onLinkClick={() => navigate("/")}
        />
        <RegistrationInfo Infotext="Регистрация с помощью:" />
      </StyleRegistrationPage>
    </Container>
  );
};

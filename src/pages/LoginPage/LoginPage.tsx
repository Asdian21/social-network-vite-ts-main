import { useNavigate } from "react-router-dom";
import { Heading } from "../../components/Header/Heading";
import * as yup from "yup";
import { Linktext } from "../../components/Header/Typography/LinkText/Linktext";
import { Button } from "../../components/UI/Button/Button";
import { Container } from "../../components/UI/Container/container.style";
import { RegistrationInfo } from "../../components/UI/RegistrationInfo/RegistrationInfo";
import { Input } from "../../components/UI/Input/InputWord";
import { StyleLoginPage } from "./LogiPage.style";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { changeUser } from "../../store/userSlice";
import { useEffect } from "react";
import { useLoginUserMutation } from "../../store/Api/authApi";

const mockeUser = {
  mail: "asdiank7@gmail.com",
  phone_number: "+998909013281",
  user_id: 266,
  name: "Yedixanov Said Jasurovich",
  reg_date: new Date(),
  city: "Tashkent",
};

interface ILoginForm {
  useremail: string;
  userpassword: string;
}

const loginFormScheme = yup.object({
  useremail: yup
    .string()
    .required("Обязательное поле")
    .email("Неверный формат эл почты"),
  userpassword: yup
    .string()
    .required("Обязательное поле")
    .min(4, "Пароль должен содержать не менее 4 символов"),
});

export const LoginPage = () => {
  const user = useSelector((state: RootState) => state.userSlice.user);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Перенесено внутрь компонента
  const [loginUser, { data: newData }] = useLoginUserMutation();

  console.log(user);

  useEffect(() => {
    if (newData?.user_id) {
      console.log(newData);
    }
  }, [newData, navigate]);
  // добавляем navigate в зависимости для useEffect

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    // resolver: yupResolver(loginFormScheme),
    defaultValues: {
      useremail: "",
      userpassword: "",
    },
  });

  const onLoginSubmit: SubmitHandler<ILoginForm> = (data) => {
    loginUser({ email: data.useremail, password: data.userpassword });

    // dispatch(changeUser(mockeUser));
    // const savedemail = localStorage.getItem("useremail");
    // const savedpassword = localStorage.getItem("userpassword");

    // if (
    //     savedemail &&
    //     savedpassword &&
    //     data.useremail === savedemail &&
    //     data.userpassword === savedpassword
    //   ) {
    //     console.log("Успешный вход");
    //     navigate("/main-page");
    //   } else {
    //     console.log("Неверный email или пароль");
    //     alert("Неверный email или пароль");
    //   }
  };

  return (
    <Container>
      {/* {isLoading && <div>Загрузка...</div>} */}
      <StyleLoginPage>
        <Heading headingText="Авторизация" />
        <form onSubmit={handleSubmit(onLoginSubmit)}>
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
            name="userpassword"
            control={control}
            render={({ field }) => (
              <Input
                type="password"
                placeholder="Введите пароль"
                errorText={errors.userpassword?.message}
                isError={!!errors.userpassword}
                {...field}
              />
            )}
          />
          <Button isPrimary buttonText="Войти" />
        </form>
        <Linktext
          linkText="Забыли пароль?"
          onLinkClick={() => navigate("/wrong-password")}
        />
        <RegistrationInfo
          registrationText="У вас нет аккаунта?"
          linkText="Зарегистрироваться"
          onLinkClick={() => navigate("/registration-page")}
          Infotext="Войти с помощью"
        />
      </StyleLoginPage>
    </Container>
  );
};

import Modal from "react-modal";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IPost } from "../../store/Api/postApi";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const AddNewPostScheme = yup.object({
  mainText: yup.string().required("Введите содержимое поста"),
});

interface IAddNewPostProps {
  openModal: boolean;
  onCloseModal: () => void;
  post?: IPost;
}

export const AddNewPost = ({
  openModal,
  onCloseModal,
  post,
}: IAddNewPostProps) => {
  const {
    formState: { errors }, // нужен для того, чтобы использовать
    handleSubmit,
    control,
  } = useForm({
    resolver: yupResolver(AddNewPostScheme), // подключение объекта с ошибками ( проверкой )
    defaultValues: {
      mainText: "", // первоначальное состояние
    },
  });

  return <Modal isOpen={openModal} style={customStyles}></Modal>;
};

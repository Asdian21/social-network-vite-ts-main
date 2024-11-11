import Modal from "react-modal";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IPost, useAddNewPostMutation } from "../../store/Api/postApi";
import { SPostForm } from "./PostPage.style";
import { SPostButtonsContainer } from "./PostPage.style";
import { Input } from "../../components/UI/Input/InputWord";
import { Button } from "../../components/UI/Button/Button";
import { useUserId } from "../../hooks/useUserId";

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
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    resolver: yupResolver(AddNewPostScheme),
    defaultValues: {
      mainText: "",
    },
  });

  const userId = useUserId();
  // console.log(userId);
  const [fetchTrigger, { data, isSuccess }] = useAddNewPostMutation();
  const addNewPostSubmit: SubmitHandler<{ mainText: string }> = (data) => {
    if (data) {
      const payload = {
        user_id: Number(userId),
        main_text: data.mainText,
      };
      fetchTrigger(payload);
      onCloseModal();
    }
    if (isSuccess) {
      onCloseModal();
      openModal = false;
    }
  };

  return (
    <Modal isOpen={openModal} style={customStyles}>
      <SPostForm onSubmit={handleSubmit(addNewPostSubmit)}>
        <h3>Ваш пост</h3>
        <Controller
          name="mainText"
          control={control}
          render={({ field }) => (
            <Input
              type="text"
              placeholder="Электронная почта"
              errorText={errors.mainText?.message}
              isError={Boolean(errors.mainText)}
              {...field}
            />
          )}
        />

        <SPostButtonsContainer>
          <Button buttonText="Сохранить" type="button" $isPrimary />
          <Button
            buttonText="Отменить"
            onClick={() => {
              onCloseModal();
            }}
            $isPrimary
          />
        </SPostButtonsContainer>
      </SPostForm>
    </Modal>
  );
};

import { useParams } from "react-router-dom";
import { Container } from "../../components/UI/Container/container.style";
import { useLazyGetPostListByIdQuery } from "../../store/Api/postApi";
import React, { useEffect } from "react";
import { PostItem } from "../../components/PostItem/PostItem";

export const PostPage = () => {
  const { postId } = useParams();
  const [fetchTrigger, { data, isError, isLoading }] =
    useLazyGetPostListByIdQuery();

  useEffect(() => {
    if (postId) {
      console.log("Запуск fetchTrigger с postId:", postId); // Лог для проверки, что fetchTrigger вызывается
      fetchTrigger(postId);
    }
  }, [postId, fetchTrigger]);

  useEffect(() => {
    if (data) {
      console.log("Данные получены:", data); // Лог для проверки, что данные были получены
    } else if (isError) {
      console.error("Ошибка при получении данных"); // Лог для проверки ошибки
    }
  }, [data, isError]);

  if (isLoading) return <Container>Загрузка...</Container>;
  if (isError) return <Container>Ошибка загрузки данных.</Container>;

  return (
    <Container>
      <PostItem
        postText={data?.message.main_text}
        regDate={data?.message.reg_date}
        userName={data?.message.user_fk.name}
      />
    </Container>
  );
};

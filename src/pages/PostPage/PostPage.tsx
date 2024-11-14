import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components/UI/Container/container.style";
import { useLazyGetPostListByIdQuery } from "../../store/Api/postApi";
import { PostItem } from "../../components/PostItem/PostItem";

export const PostPage = () => {
  const { postId } = useParams();
  const [fetchTrigger, { data, isError, isLoading }] =
    useLazyGetPostListByIdQuery();
  useEffect(() => {
    if (postId) {
      fetchTrigger(postId);
    }
  }, [postId]);
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

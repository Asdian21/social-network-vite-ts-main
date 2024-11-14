import { Header } from "../../components/Header/Header";
import { Container } from "../../components/UI/Container/container.style";
import "./MainPage.scss";
import NavbarItem from "../../components/Aside/Navbar/NavbarItem";
import { Heading } from "../../components/Header/Heading";
import { UserElem } from "../../components/Aside/List/UserElem";
import { ImgArina } from "../../components/Main/WhatsNew/ImgArina";
import { Input } from "../../components/UI/Input/InputWord";
import { WhatsNewIcons } from "../../components/Main/WhatsNew/WhatsNewIcons";
import { HistorySvg } from "../../components/Main/History/HistorySvg";
import { AddHistorySvg } from "../../components/Main/History/HistoryWrapper/AddHistorySvg";
import { AddHistoryImg } from "../../components/Main/History/HistoryWrapper/AddHistoryImg";
import { HistoryItem } from "../../components/Main/History/HistoryItem";
import { PostUserElem } from "../../components/Main/Post/PostUserElement";
import { PostMediaItem } from "../../components/Main/Post/PostMediaItem";
import { PostIconWrapper } from "../../components/Main/PostRepost/PostIconWrapper";
import { CommentBlockImg } from "../../components/Main/PostRepost/CommentBlockImg";
import { CommentDescription } from "../../components/Main/PostRepost/CommentDescription";
import { Span } from "../../components/Main/PostRepost/Span";
import { RepostSvg } from "../../components/Main/PostRepost/RepostSvg";
import { MusicElem } from "../../components/Aside/List/MusicElem";
import { PostItem } from "../../components/PostItem/PostItem";
import { useLazyGetPostListQuery } from "../../store/Api/postApi";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { FullscreenLoader } from "../../components/UI/FullScreenLoader/FullscreenLoader";
import {
  navbarItems,
  userElems,
  whatsNew,
  historyItems,
  postControls,
  rightList,
  musicBlock,
} from "../../components/MainArrays";

export const MainPage = () => {
  const [fetchTrigger, { data, isLoading, isSuccess }] =
    useLazyGetPostListQuery();
  const postId = useParams();

  useEffect(() => {
    fetchTrigger(null);
  }, [postId, fetchTrigger]);

  return (
    <Container>
      {isLoading && <FullscreenLoader />}
      <Header onNewPostAdded={() => fetchTrigger(null)} />
      <div className="MainPage">
        <aside className="LeftSide">
          <nav className="Navbar">
            <ul className="navbar__list">
              {navbarItems.map((elem, indx) => (
                <NavbarItem
                  key={indx}
                  iconClass={elem.iconClass}
                  viewBox={elem.viewBox}
                  pathData={elem.pathData}
                  secondPath={elem.secondPath}
                  name={elem.name}
                  badgeCount={elem.badgeCount}
                />
              ))}
            </ul>
          </nav>
          <div className="List">
            <div className="List__title">
              <Heading headingText="Подписки" headingType="h2" />
              <span className="count">123</span>
            </div>
            {userElems.map((elem, indx) => (
              <UserElem
                userElemImg={elem.userElemImg}
                mainText={elem.mainText}
                secondaryText={elem.secondaryText}
                badgeCount={elem.badgeCount}
                key={indx}
              />
            ))}
          </div>
        </aside>
        <main className="Main">
          <div className="WhatsNew">
            <ImgArina />
            <Input
              type="text"
              name="whats-new"
              id="whats-new"
              placeholder="Что у вас нового?"
            />
            <div className="icons-wrapper">
              {whatsNew.map((elem, indx) => (
                <WhatsNewIcons
                  iconType={elem.iconType}
                  viewBoxNum={elem.viewBoxNum}
                  pathData={elem.pathData}
                  key={indx}
                />
              ))}
            </div>
          </div>
          <div className="History">
            <HistorySvg />
            <div className="History__wrapper">
              <div className="History__item add-history">
                <div className="icon-wrapper">
                  <AddHistorySvg />
                  <span>История</span>
                </div>
                <AddHistoryImg />
              </div>
              {historyItems.map((elem) => (
                <HistoryItem
                  historyPoster={elem.historyPoster}
                  userImg={elem.userImg}
                  ownerName={elem.ownerName}
                />
              ))}
            </div>
          </div>
          {data?.message.length &&
            [...data.message]
              .reverse()
              .map((elem) => (
                <PostItem
                  key={elem.id}
                  postText={elem.main_text}
                  regDate={elem.reg_date}
                  userName={elem.user_fk.name}
                />
              ))}
          <div className="Post Repost _liked _marked">
            <PostUserElem
              userElemImg="./img/users/mark-krahmalev.jpeg"
              mainText="Марк Крахмалев"
              secondaryText="20 марта 23:31"
            />
            <div className="Repost__wrapper">
              <PostUserElem
                userElemImg="./img/users/aleksandr-maykov.jpeg"
                mainText="Александр Майков"
                secondaryText="Сегодня 9:37"
              />
              <div className="media-container">
                <PostMediaItem imgPost="./img/post/garnet-man.png" />
                <PostMediaItem imgPost="./img/post/garnet.png" />
              </div>
            </div>
            <div className="PostControls">
              {postControls.map((elem) => (
                <PostIconWrapper
                  iconWrap={elem.iconWrap}
                  whatCount={elem.whatCount}
                  count={elem.count}
                  className={elem.className}
                  viewBox={elem.viewBox}
                  pathData={elem.pathData}
                  color={elem.fill}
                />
              ))}
            </div>
            <div className="CommentBlock">
              <CommentBlockImg />
              <CommentDescription
                owner="Карина Савина"
                text="Этот текст комментария..."
                reply="Ответить"
              />
              <Span />
              <PostIconWrapper
                className="icon-like"
                viewBox="0 0 23 23"
                pathData="M11.5 23L9.8325 21.3455C3.91 15.4921 0 11.6191 0 6.89373C0 3.02071 2.783 0 6.325 0C8.326 0 10.2465 1.01526 11.5 2.60708C12.7535 1.01526 14.674 0 16.675 0C20.217 0 23 3.02071 23 6.89373C23 11.6191 19.09 15.4921 13.1675 21.3455L11.5 23Z"
              />
            </div>
            <RepostSvg className="icon-more" />
          </div>
        </main>
        <aside className="RightSide">
          <div className="List">
            <div className="List__title">
              <Heading headingText="Близкие друзья" headingType="h2" />
              <span className="count">123</span>
            </div>
            {rightList.map((elem) => (
              <UserElem
                userElemImg={elem.userElemImg}
                mainText={elem.mainText}
                secondaryText={elem.secondaryText}
                badgeCount={elem.badgeCount}
              />
            ))}
          </div>
          <div className="MusicBlock">
            <div className="MusicBlock__title">
              <h2>Вы недавно слушали</h2>
              <span>123</span>
            </div>
            {musicBlock.map((elem) => (
              <MusicElem
                musicElemImg={elem.musicElemImg}
                mainText={elem.mainText}
                secondaryText={elem.secondaryText}
              />
            ))}
          </div>
        </aside>
      </div>
    </Container>
  );
};

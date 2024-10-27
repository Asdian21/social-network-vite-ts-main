type TUserImg = {
  imgSourse: string;
  userAlt: string;
};

export const UserImg = ({ imgSourse, userAlt }: TUserImg) => {
  return <img src={imgSourse} alt={userAlt} />;
};

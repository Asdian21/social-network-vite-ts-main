type TFriend = {
  friendImg: string;
  friendName: string;
};

export const Friend = ({ friendImg, friendName }: TFriend) => {
  return (
    <div className="friend">
      <img src={friendImg} alt="Friend" />
      <span className="friend__name">{friendName}</span>
    </div>
  );
};

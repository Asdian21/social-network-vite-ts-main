import "./MusicElem.scss";

type TMusicElem = {
  musicElemImg: string;
  mainText: string;
  secondaryText: string;
};

export const MusicElem = ({
  musicElemImg,
  mainText,
  secondaryText,
}: TMusicElem) => {
  return (
    <div className="MusicElem">
      <img src={musicElemImg} alt="Album" />
      <div className="music__description">
        <p className="main__text">{mainText}</p>
        <p className="secondary__text">{secondaryText}</p>
      </div>
      <div className="plus-button _active"></div>
    </div>
  );
};

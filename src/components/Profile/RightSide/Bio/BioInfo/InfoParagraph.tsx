type TInfoParagraph = {
  subjectClass: string;
  mainText: string;
  subText: string;
};

export const InfoParagraph = ({
  subjectClass,
  mainText,
  subText,
}: TInfoParagraph) => {
  return (
    <>
      <p className={`main__text ${subjectClass}`}>{mainText}</p>
      <p className={`secondary__text ${subjectClass}`}>{subText}</p>
    </>
  );
};

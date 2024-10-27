type TProfileHeaderSvg = {
  iconName: string;
  viewBox: string;
  pathData: string;
};

export const ProfileHeaderSvg = ({
  iconName,
  viewBox,
  pathData,
}: TProfileHeaderSvg) => {
  return (
    <svg
      className={`icon ${iconName}`}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path id="icon" fillRule="evenodd" clipRule="evenodd" d={pathData} />
    </svg>
  );
};

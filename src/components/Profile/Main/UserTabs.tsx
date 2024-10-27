type TUserTabs = {
  divClassName: string;
  svgClassName: string;
  id: string;
  pathData: string;
  spanName: string;
};

export const UserTabs = ({
  divClassName,
  svgClassName,
  id,
  pathData,
  spanName,
}: TUserTabs) => {
  return (
    <div className={`tab ${divClassName}`}>
      <svg
        className={`icon ${svgClassName}`}
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path id={id} d={pathData} />
      </svg>

      <span>{spanName}</span>
    </div>
  );
};

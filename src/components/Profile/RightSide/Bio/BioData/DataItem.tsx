type TDataItem = {
  className: string;
  viewBox: string;
  pathData: string;
  mainText: string;
  subText: string;
};

export const DataItem = ({
  className,
  viewBox,
  pathData,
  mainText,
  subText,
}: TDataItem) => {
  return (
    <div className="data__item">
      <svg
        className={`icon ${className}`}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path id="icon" d={pathData} fill="#526ED3" />
      </svg>
      <p className="main__text">
        {mainText} <span>{subText}</span>
      </p>
    </div>
  );
};

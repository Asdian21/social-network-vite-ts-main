type TUserParameter = {
  parameterName: string;
  parameterValue: number;
};

export const UserParameter = ({
  parameterName,
  parameterValue,
}: TUserParameter) => {
  return (
    <div className="parameter">
      <span className="key">{parameterName}</span>
      <span className="value">{parameterValue}</span>
    </div>
  );
};

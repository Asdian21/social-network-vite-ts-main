type THeadingProps = {
  headingText: string;
  headingType?: string;
  className?: string;
};

export const Heading = ({
  headingText,
  headingType,
  className,
}: THeadingProps) => {
  const createHeaging = () => {
    switch (headingType) {
      case "h1":
        return <h1 className={className}>{headingText}</h1>;
      case "h2":
        return <h2 className={className}>{headingText}</h2>;
      case "h3":
        return <h3 className={className}>{headingText}</h3>;
      case "h4":
        return <h4 className={className}>{headingText}</h4>;
      case "h5":
        return <h5 className={className}>{headingText}</h5>;
      case "h6":
        return <h6 className={className}>{headingText}</h6>;
      default:
        return <h2 className={className}>{headingText}</h2>;
    }
  };
  return createHeaging();
};

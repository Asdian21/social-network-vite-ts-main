type TUploadMedia = {
  spanName: string;
};

export const UploadMedia = ({ spanName }: TUploadMedia) => {
  return (
    <div className="upload-media _no-select">
      <svg
        className="icon icon-upload"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
      >
        <g>
          <path d="M13,8h-5v5c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29c-.19-.19-.29-.44-.29-.71v-5H1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29H6V1c0-.27,.11-.52,.29-.71,.19-.19,.44-.29,.71-.29s.52,.11,.71,.29c.19,.19,.29,.44,.29,.71V6h5c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71s-.11,.52-.29,.71c-.19,.19-.44,.29-.71,.29Z" />
        </g>
      </svg>
      <span>{spanName}</span>
    </div>
  );
};

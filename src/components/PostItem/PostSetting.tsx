import { StylePostSettings } from "./PostItem.style";

interface PostSettingProps {
  onEditClick?: () => void;
  onDeleteClick?: () => void;
}

export const PostSetting = ({
  onEditClick,
  onDeleteClick,
}: PostSettingProps) => {
  return (
    <StylePostSettings>
      <div>
        <span onClick={onEditClick} className="settingBtn">
          Изменить
        </span>
        <span onClick={onDeleteClick} className="settingBtn">
          Удалить
        </span>
      </div>
    </StylePostSettings>
  );
};

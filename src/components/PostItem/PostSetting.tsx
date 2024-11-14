import { StylePostSettings } from "./PostItem.style";

interface PostSettingsProps {
  onEditClick?: () => void;
  onDeleteClick?: () => void;
}

export const PostSetting = ({
  onEditClick,
  onDeleteClick,
}: PostSettingsProps) => {
  return (
    <StylePostSettings>
      <span onClick={onEditClick} className="settingBtn">
        Изменить
      </span>
      <span onClick={onDeleteClick} className="settingBtn">
        Удалить
      </span>
    </StylePostSettings>
  );
};

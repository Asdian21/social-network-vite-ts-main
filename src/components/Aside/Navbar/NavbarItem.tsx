import "./Navbar.scss";

type TNavbarItem = {
  iconClass: string;
  viewBox: string;
  pathData: string;
  secondPath?: string;
  name: string;
  badgeCount: number;
};

const NavbarItem = ({
  iconClass,
  viewBox,
  pathData,
  secondPath,
  name,
  badgeCount,
}: TNavbarItem) => {
  // render({ iconClass, viewBox, pathData, name, badgeCount }) {
  return (
    <li className="navbar__item">
      <svg
        className={`icon ${iconClass}`}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={pathData} />
        <path d={secondPath} />
      </svg>
      <p className="item__name">{name}</p>
      {badgeCount && <span className="Badge">{badgeCount}</span>}
    </li>
  );
};
// };

export default NavbarItem;

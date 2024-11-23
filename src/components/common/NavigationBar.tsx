import styled from "styled-components";
import HomeIcon from "../../assets/home.svg";
import ScrapIcon from "../../assets/scrap.svg";
import SearchIcon from "../../assets/search.svg";
import MypageIcon from "../../assets/rate/뉴싹.svg";
import Home_active from "../../assets/home_active.svg";
import Scrap_active from "../../assets/scrap_active.svg";
import Search_active from "../../assets/search_active.svg";
import Mypage_active from "../../assets/mypage_active.svg";

import { Link, useLocation, LinkProps } from "react-router-dom";
import { useCategoryContext } from "../../context/CategoryContext";

interface NavItemProps extends LinkProps {
  isactive?: boolean;
}

const NavigationBar = () => {
  const location = useLocation();
  const { selectedCategories } = useCategoryContext();
  const checkActive = (path: string) => location.pathname.includes(path);

  return (
    <NavBar>
      <NavItem
        to={`/home/${encodeURIComponent(selectedCategories[0])}`}
        isactive={checkActive("/home")}
      >
        <Icon src={checkActive("/home") ? Home_active : HomeIcon} />
      </NavItem>
      <NavItem to="/search" isactive={checkActive("/search")}>
        <Icon src={checkActive("/search") ? Search_active : SearchIcon} />
      </NavItem>
      <NavItem to="/scrap" isactive={checkActive("/scrap")}>
        <Icon src={checkActive("/scrap") ? Scrap_active : ScrapIcon} />
      </NavItem>
      <NavItem to="/mypage" isactive={checkActive("/mypage")}>
        <Icon src={checkActive("/mypage") ? Mypage_active : MypageIcon} />
      </NavItem>
    </NavBar>
  );
};

export default NavigationBar;

const NavBar = styled.nav`
  bottom: 0;
  left: 0;
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  border-top: 1px solid #dcdcdc;
  box-sizing: border-box;
`;

interface NavItemProps extends Omit<LinkProps, "isactive"> {
  isactive?: boolean;
}

const NavItem = styled(({ isactive, ...props }: NavItemProps) => (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  <Link {...props} />
))`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  text-decoration: none;
  font-size: 10px;
  color: ${({ isactive }) => (isactive ? "#10D99B" : "black")};
`;

const Icon = styled.img`
  width: 30px;
  height: 25px;
`;

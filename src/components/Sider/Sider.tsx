import { FC, createElement } from "react";
import { useNavigate } from "react-router-dom";
import { TableOutlined, HomeOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";

const { Sider } = Layout;

const navigationItems = [
  {
    key: "home",
    icon: createElement(HomeOutlined),
    url: "/",
    label: "Homepage",
  },
  {
    key: "table",
    icon: createElement(TableOutlined),
    url: "/table",
    label: "Table View",
  },
];

export const AppSider: FC = () => {
  const navigate = useNavigate();

  const onNavItemClick = (navUrl: string) => {
    navigate(navUrl);
  };

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["home"]}
        items={navigationItems.map((nav) => ({
          ...nav,
          onClick: () => onNavItemClick(nav.url),
        }))}
      />
    </Sider>
  );
};

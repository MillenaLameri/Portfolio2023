import { FC, ReactNode } from "react";

import "./styles.scss";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <div className="main-wrapper">{children}</div>
    </div>
  );
};

export default Layout;

import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import { AppFooter, Homepage, AppTable } from "..";

const { Content } = Layout;

export const AppContent: FC = () => {
  return (
    <Layout>
      <Content className="content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/table" element={<AppTable />} />
        </Routes>
      </Content>
      <AppFooter />
    </Layout>
  );
};

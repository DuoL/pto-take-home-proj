import { FC } from "react";
import { Layout } from "antd";
import { BrowserRouter } from "react-router-dom";
import { MovieContextProvider } from "providers";
import { AppSider, AppContent } from "components";

const App: FC = () => {
  return (
    <BrowserRouter>
      <MovieContextProvider>
        <Layout>
          <AppSider />
          <AppContent />
        </Layout>
      </MovieContextProvider>
    </BrowserRouter>
  );
};

export default App;

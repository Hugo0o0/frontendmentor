import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import router from "~/router";
import theme from "~/theme/theme";
import BodyWrapper from "./components/BodyWrapper/BodyWrapper";

const App = () => {
  return (
    <ThemeProvider theme={theme.light}>
      <BodyWrapper>
        <RouterProvider router={router} />
      </BodyWrapper>
    </ThemeProvider>
  );
};

export default App;

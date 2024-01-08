import { useTheme } from "styled-components";
import { Heading } from "~/components/UI/Typography";

const App = () => {
  const theme = useTheme();

  console.log(theme);

  return (
    <div>
      <Heading variant="xl">Hello World</Heading>
    </div>
  );
};

export default App;

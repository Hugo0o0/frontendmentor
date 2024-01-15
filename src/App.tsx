import useTheme from "@/utils/hooks/useTheme";
import Header from "@/components/Header/Header";

const App = () => {
  const { toggle } = useTheme();
  return (
    <div>
      <Header />
    </div>
  );
};

export default App;

import styles from "./App.module.scss";
import AdviceCard from "@/components/AdviceCard/AdviceCard";

const App = () => {
  return (
    <div className={styles.app}>
      <AdviceCard />
    </div>
  );
};

export default App;

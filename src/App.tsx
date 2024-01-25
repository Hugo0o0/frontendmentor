import Header from "@/components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <>
      <Header />

      <main className="flex h-full">
        <Sidebar />

        <div className="flex-1">Main</div>
      </main>
    </>
  );
};

export default App;

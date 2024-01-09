import Dropdown from "~/components/UI/InteractiveElements/Dropdown/Dropdown";

const Home = () => {
  return (
    <Dropdown
      onChange={(e) => {
        console.log(e);
      }}
      defaultValue="Todo"
    >
      <Dropdown.Button>Select a Status</Dropdown.Button>
      <Dropdown.List>
        <Dropdown.Item value="Todo">Todo</Dropdown.Item>
        <Dropdown.Item value="Doing">Doing</Dropdown.Item>
        <Dropdown.Item value="Done">Done</Dropdown.Item>
      </Dropdown.List>
    </Dropdown>
  );
};

export default Home;

import { useState } from "react";
import "./App.css";
import Form from "~/components/Form/Form";
import SuccessCard from "~/components/SuccessCard/SuccessCard";

function App() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <>
      {isSuccess ? (
        <SuccessCard email={email} setIsSuccess={setIsSuccess} />
      ) : (
        <Form setEmail={setEmail} setIsSuccess={setIsSuccess} />
      )}
    </>
  );
}

export default App;

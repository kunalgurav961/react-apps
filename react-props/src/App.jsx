import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Nested from "./components/Nested";

const App = () => {
  const [user, setUser] = useState({
    name: "juee",
    age: 10000000,
    salary: "0.2 rs",
    desc: "developer",
  });
  return (
    <>
      <Navbar name={user.name} user={user} />
      <h1>Hello, {user.name}</h1>
      <Footer>
        <Nested />
      </Footer>
    </>
  );
};

export default App;

import "./App.css";
import Welcome from "./Welcome";
import UserDetail from "./UserDetail";
function App() {

  const handleClick = () => {

    console.log("Button clicked!");
  }
  return (
    <>
      <h1>Props</h1>
      <Welcome name="Rebecca" age={28} />
      <UserDetail name="guest" age={26} />
      <button onClick={handleClick} />
    </>
  );
}

export default App;

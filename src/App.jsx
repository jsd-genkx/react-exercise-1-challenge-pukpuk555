import "./App.css";
import FirstComponent from "./components/1.1_myFirstReactComponent/01_FunctionComponent";
import SecondComponent from "./components/1.1_myFirstReactComponent/02_FunctionalComponent";
import ThirdComponent from "./components/1.1_myFirstReactComponent/03_ClassComponent";

function App() {
  return (
    <div className="flex flex-col">
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import ListViewer from "./components/listviewer/ListViewer";
import ListWriter from "./components/listwriter/ListWriter";

function App() {
  // Share state between sibling components - det vi gerne vil
  // Step 1: Move useState to nearest common parent
  // Step 2: send useState setter function to child component that needs to communicate state
  // Step 3: send useState variable to other child component that needs the state
  // Step 4:
  const names = ["Alice", "Bob", "Charlie", "Diana"];
  const [nameList, setNameList] = useState(names);
  
  const url = "https://packingapi.cphbusinessapps.dk/packinglist/";
  useEffect(() => {

    // First method to fetch:
    // const promise1 = fetch(url);
    // const promise2 = promise1.then((res) => res.json());
    // promise2.then((jsonData) => {
    //   setNameList(jsonData.categories)

    //Second method to fetch:
    const getData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setNameList(data.categories);
    };
    getData();
  }, []);

  return (
    <>
      <h3>React App</h3>
      <ListWriter setNameList={setNameList} nameList={nameList} />
      <ListViewer nameList={nameList} setNameList={setNameList} />
    </>
  );
}

export default App;

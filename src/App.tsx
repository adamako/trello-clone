import React from "react";
import { AppContainer } from "./styles";
import { Card, Column, AddNewItem } from "./components";

function App() {
  return (
    <AppContainer>
      <Column text={"To DO"}>
        <Card text={"Generate app scafold"} />
      </Column>
      <Column text={"In Progress"}>
        <Card text={"Learn Typescript"} />
      </Column>
      <Column text={"Done"}>
        <Card text={"Begin to use static typing"} />
      </Column>
      <AddNewItem onAdd={console.log} toggleButtonText={"+ Add another list"} />
    </AppContainer>
  );
}

export default App;

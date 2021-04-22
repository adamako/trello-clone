import React from "react";
import { AppContainer } from "./styles";
import { Card, Column, AddNewItem } from "./components";
import { useAppState } from "./providers/AppStateContext";

const App = () => {
  const { state } = useAppState();

  return (
    <AppContainer>
      {state.lists.map((list, i) => (
        <Column text={list.text} key={list.id} index={i} />
      ))}
      <AddNewItem onAdd={console.log} toggleButtonText={"+ Add another list"} />
    </AppContainer>
  );
};

export default App;

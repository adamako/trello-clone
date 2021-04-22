import React from "react";
import { AppContainer, ColumnContainer, ColumnTitle } from "../styles";
import { useAppState } from "../providers/AppStateContext";
import { Card } from "./Card";
import { AddNewItem } from "./AddNewItem";

interface ColumnProps {
  text: string;
  index: number;
}
export const Column = ({ text, index }: ColumnProps) => {
  const { state } = useAppState();

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map((task) => (
        <Card text={task.text} key={task.id} />
      ))}
      <AddNewItem
        onAdd={console.log}
        toggleButtonText={"+ Add another task"}
        dark
      />
    </ColumnContainer>
  );
};
